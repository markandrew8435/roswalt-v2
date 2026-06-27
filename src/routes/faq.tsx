import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { FAQ } from "@/routes/index";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Roswalt Ryla, Bandra West Residences" },
      { name: "description", content: "Answers to questions about Roswalt Ryla — pricing, possession, configurations, sea views, NRI buying, home loans and the booking process." },
      { property: "og:title", content: "Roswalt Ryla — FAQ" },
      { property: "og:description", content: "Considered questions about Bandra West's boutique 3 BHK residences." },
    ],
  }),
  component: () => (
    <SectionPage>
      <FAQ />
    </SectionPage>
  ),
});
