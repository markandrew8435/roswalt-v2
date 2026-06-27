import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { Location } from "@/routes/index";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Roswalt Ryla, Bandra West, Mumbai" },
      {
        name: "description",
        content:
          "Minutes from BKC, Bandra-Worli Sea Link, Hill Road, Linking Road, Carter Road and Lilavati Hospital. Explore the Roswalt Ryla neighbourhood.",
      },
      { property: "og:title", content: "Location — Roswalt Ryla, Bandra West" },
      {
        property: "og:description",
        content: "An address precisely placed along Bandra West's most enduring stretch.",
      },
    ],
  }),
  component: () => (
    <SectionPage>
      <Location />
    </SectionPage>
  ),
});
