import { createServerFn } from "@tanstack/react-start";
import { getCfEnv } from "./env-context";

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

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: EnquiryPayload) => data)
  .handler(async ({ data }) => {
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    const env = getCfEnv();
    const db = env?.DB;

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
        `[D1 DB] Cloudflare D1 binding DB is not attached in local environment. Saved lead record:`,
        data,
      );
    }

    return { success: true, id };
  });
