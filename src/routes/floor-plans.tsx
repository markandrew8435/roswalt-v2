import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { Residences, Price } from "@/routes/index";

export const Route = createFileRoute("/floor-plans")({
  head: () => ({
    meta: [
      { title: "Floor Plans — Roswalt Ryla 3 BHK Residences" },
      { name: "description", content: "Roswalt Ryla floor plans — boutique 3 BHK residences with 1,068 sq.ft and 1,245 sq.ft carpet area. Zoom, download PDF and request the detailed layout." },
      { property: "og:title", content: "Floor Plans — Roswalt Ryla" },
      { property: "og:description", content: "Two carefully composed 3 BHK layouts from the official Ryla brochure." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Residences />
      <Price />
    </SectionPage>
  ),
});
