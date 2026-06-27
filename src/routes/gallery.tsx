import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { Gallery } from "@/routes/index";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Roswalt Ryla, Bandra West" },
      { name: "description", content: "Explore exteriors, interiors, amenities and the Bandra West neighbourhood at Roswalt Ryla. Click any image to view full screen." },
      { property: "og:title", content: "Gallery — Roswalt Ryla" },
      { property: "og:description", content: "An elevated world — explore exteriors, interiors and amenities at Roswalt Ryla." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Gallery />
    </SectionPage>
  ),
});
