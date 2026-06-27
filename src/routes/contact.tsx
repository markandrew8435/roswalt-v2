import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { Contact } from "@/routes/index";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Private Viewing at Roswalt Ryla" },
      { name: "description", content: "Reserve a private viewing of Roswalt Ryla, Bandra West. Call +91 88793 96591, WhatsApp or send an enquiry. All enquiries are handled with absolute discretion." },
      { property: "og:title", content: "Contact — Roswalt Ryla" },
      { property: "og:description", content: "Arrive above the ordinary — book a private viewing in Bandra West." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Contact />
    </SectionPage>
  ),
});
