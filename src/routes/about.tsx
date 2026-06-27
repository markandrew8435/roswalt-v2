import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { About, ProjectInfo, Why } from "@/routes/index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Project Overview — Roswalt Ryla, Bandra West" },
      {
        name: "description",
        content:
          "Boutique 3 BHK luxury residences in Bandra West by Roswalt Realty. Architecture by Ar. Shantanoo V. Rane. MahaRERA PR1180002600645.",
      },
      { property: "og:title", content: "Project Overview — Roswalt Ryla" },
      {
        property: "og:description",
        content:
          "An editorial sense of place, privacy and presence. A limited collection of 3 BHK boutique residences in Bandra West.",
      },
    ],
  }),
  component: () => (
    <SectionPage>
      <About />
      <ProjectInfo />
      <Why />
    </SectionPage>
  ),
});
