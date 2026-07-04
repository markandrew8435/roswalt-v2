import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { submitEnquiry } from "@/lib/submit-enquiry";

const STORAGE_KEY = "ryla_lead_v1";
const POPUP_INTERVAL_MS = 300000; // 5 minutes

type Mode = "brochure" | "popup";

export function LeadGate() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("popup");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const pendingHref = useRef<string | null>(null);

  // Open popup immediately on load if lead is not yet captured
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
      setMode("popup");
      setOpen(true);
    }
  }, []);

  // Intercept brochure clicks site-wide
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>("[data-brochure]");
      if (!el) return;
      if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) {
        return; // already unlocked, allow native download
      }
      e.preventDefault();
      const href = (el as HTMLAnchorElement).href || el.getAttribute("data-href") || null;
      pendingHref.current = href;
      setMode("brochure");
      setDone(false);
      setOpen(true);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Auto-popup every 5 mins until lead is captured
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const id = window.setInterval(() => {
      if (localStorage.getItem(STORAGE_KEY)) {
        window.clearInterval(id);
        return;
      }
      setMode((m) => (open ? m : "popup"));
      setOpen((o) => o || true);
    }, POPUP_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [open]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const lead = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      ts: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
    } catch {
      // ignore storage error if quota full or private mode
    }

    try {
      await submitEnquiry({
        data: {
          type: "lead_gate",
          name: lead.name,
          phone: lead.phone,
          email: lead.email,
        },
      });
    } catch (err) {
      console.error("Failed to submit lead to D1:", err);
    }

    setSubmitting(false);
    setDone(true);

    if (mode === "brochure" && pendingHref.current) {
      const href = pendingHref.current;
      // Trigger download in new tab
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener";
        a.download = "Roswalt-Ryla-Brochure.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }, 400);
    }
    setTimeout(() => setOpen(false), 1600);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border border-gold/30 bg-[oklch(0.16_0.005_60)] text-foreground">
        <DialogTitle className="font-serif text-2xl text-gold">
          {mode === "brochure" ? "Unlock the e-Brochure" : "Private Preview Access"}
        </DialogTitle>
        <p className="mt-1 text-sm text-foreground/70">
          {mode === "brochure"
            ? "Share a few details to receive the official Roswalt Ryla brochure instantly."
            : "Get the price sheet, floor plans and a private viewing invitation for Roswalt Ryla."}
        </p>

        {done ? (
          <div className="mt-6 rounded-md border border-gold/30 bg-gold/5 p-5 text-center">
            <p className="font-serif text-xl text-gold">Thank you</p>
            <p className="mt-2 text-sm text-foreground/70">
              {mode === "brochure"
                ? "Your brochure is downloading. A relationship manager will reach out shortly."
                : "A relationship manager will reach out within 24 hours."}
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-5 space-y-3">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              name="phone"
              required
              type="tel"
              pattern="[0-9+\s\-]{8,}"
              placeholder="Phone Number"
              className="w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="Email Address"
              className="w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={submitting}
              className="btn-gold mt-2 w-full disabled:opacity-60"
            >
              {submitting
                ? "Submitting…"
                : mode === "brochure"
                  ? "Download Brochure"
                  : "Request Details"}
            </button>
            <p className="text-[11px] text-foreground/50">
              By submitting, you agree to be contacted about Roswalt Ryla. MahaRERA PR1180002600645.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
