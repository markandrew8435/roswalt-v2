import { createServerFn } from "@tanstack/react-start";
import { getCfEnv, type D1Database } from "./env-context";

export type EnquiryPayload = {
  type: "lead_gate" | "layout_request" | "contact";
  name: string;
  phone: string;
  email: string;
  budget?: string;
  buyer_type?: string;
  visit_date?: string;
  message?: string;
  layout_name?: string;
  layout_type?: string;
  layout_area?: string;
};

async function resolveD1Database(): Promise<D1Database | undefined> {
  // 1. Check process.env.DB (Nitro aliases env vars onto process.env per request)
  if ((process.env as any)?.DB) {
    return (process.env as any).DB;
  }
  // 2. Check globalThis bindings (Cloudflare Workers / Nitro globals)
  if ((globalThis as any)?.DB) {
    return (globalThis as any).DB;
  }
  if ((globalThis as any)?.env?.DB) {
    return (globalThis as any).env.DB;
  }
  if ((globalThis as any)?.__env__?.DB) {
    return (globalThis as any).__env__.DB;
  }
  // 3. Try AsyncLocalStorage store if set
  const cfStore = getCfEnv();
  if (cfStore?.DB) {
    return cfStore.DB;
  }
  // 4. Try reading from cloudflare:workers module
  try {
    const { env } = await import("cloudflare:workers");
    if ((env as any)?.DB) {
      return (env as any).DB;
    }
  } catch {
    // cloudflare:workers is not available in non-worker environments
  }

  return undefined;
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: EnquiryPayload) => data)
  .handler(async ({ data }) => {
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    const db = await resolveD1Database();

    if (db) {
      try {
        await db
          .prepare(
            `INSERT INTO enquiries (id, type, name, phone, email, budget, buyer_type, visit_date, message, layout_name, layout_type, layout_area)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          )
          .bind(
            id,
            data.type,
            data.name,
            data.phone,
            data.email,
            data.budget || null,
            data.buyer_type || null,
            data.visit_date || null,
            data.message || null,
            data.layout_name || null,
            data.layout_type || null,
            data.layout_area || null,
          )
          .run();
        console.log(`[D1 DB] Enquiry saved to Cloudflare D1: ${id} (${data.type})`);
      } catch (err) {
        console.error(`[D1 DB] Failed to save enquiry to D1:`, err);
        throw err;
      }
    } else {
      console.warn(
        `[D1 DB] Cloudflare D1 binding DB is not attached. Lead record:`,
        data,
      );
    }

    return { success: true, id };
  });
