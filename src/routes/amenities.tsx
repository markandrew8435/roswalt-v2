import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/SectionPage";
import { Amenities } from "@/routes/index";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Roswalt Ryla, Bandra West" },
      { name: "description", content: "Sky Yoga Deck, Zen Garden, Fitness Centre, Sky Lounge, Party Deck, Juice Bar, Kids Play Area and more — curated wellness, lifestyle and family amenities at Roswalt Ryla." },
      { property: "og:title", content: "Amenities — Roswalt Ryla" },
      { property: "og:description", content: "A curated lifestyle layered across wellness, gathering and family at Roswalt Ryla, Bandra West." },
    ],
  }),
  component: () => (
    <SectionPage>
      <Amenities />
    </SectionPage>
  ),
});
