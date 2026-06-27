import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { Investment } from "@/routes/index";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Why Bandra West Defines Luxury Living" },
      { name: "description", content: "Bandra West offers limited land, cultural cachet and consistent capital appreciation — making Roswalt Ryla a long-term luxury asset." },
      { property: "og:title", content: "Investment — Roswalt Ryla" },
      { property: "og:description", content: "Why Bandra West continues to define luxury living and long-term value." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Investment />
    </SectionPage>
  ),
});
