import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { submitEnquiry } from "@/lib/submit-enquiry";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import heroTowerUrl from "@/assets/hero-tower.jpg";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";
import Url from "@/assets/";

const PHONE = "+918879396591";
const PHONE_DISPLAY = "+91 88793 96591";
const WHATSAPP = "918879396591";
const SITE_URL = "https://ryla-ambiance.lovable.app";
const META_TITLE = "Roswalt Ryla — 3 BHK Sea View Homes, Bandra West";
const META_DESC =
  "Boutique 3 BHK luxury residences in Bandra West by Roswalt Realty. From ₹6.9 Cr* (all inclusive). MahaRERA PR1180002600645.";

const FAQS = [
  {
    q: "Where exactly is Roswalt Ryla located?",
    a: "Roswalt Ryla is positioned along one of Bandra West's most established stretches in Mumbai — moments from Carter Road, Hill Road, Linking Road, the Bandra-Worli Sea Link, and BKC.",
  },
  {
    q: "What configurations are available at Roswalt Ryla?",
    a: "The project offers boutique 3 BHK residences with carpet areas of 1,068 sq.ft and 1,245 sq.ft. Select homes open to uninterrupted sea views.",
  },
  {
    q: "What is the starting price?",
    a: "Residences start from ₹6.9 Cr (all inclusive). The detailed price sheet is shared on private request.",
  },
  {
    q: "Is the project MahaRERA registered?",
    a: "Yes. MahaRERA registration number PR1180002600645.",
  },
  {
    q: "Who is the developer?",
    a: "Roswalt Ryla is developed by Roswalt Realty, a Mumbai-based boutique developer focused on a limited number of premium residential addresses.",
  },
  {
    q: "Who is the architect?",
    a: "The project is designed under the direction of Ar. Shantanoo V. Rane, a UNESCO-recognised architect known for restrained, timeless residential architecture.",
  },
  {
    q: "How many residences are part of the development?",
    a: "Ryla is intentionally low-density — a limited collection of residences designed to preserve privacy, scale and exclusivity.",
  },
  {
    q: "Are sea-view residences available?",
    a: "Yes, select residences open to uninterrupted sea views. Availability is limited and allocated on a first-priority basis.",
  },
  {
    q: "What amenities are offered?",
    a: "Wellness includes a Zen Garden, Sky Yoga Deck and Fitness Centre. Lifestyle includes Sky Lounge, Party Deck, Sky BBQ and Juice Bar. Family amenities include Kids Play Area, Indoor Games and a Senior Citizen Area.",
  },
  {
    q: "What is the possession timeline?",
    a: "Possession timelines are shared during a private consultation and are subject to MahaRERA-approved milestones.",
  },
  {
    q: "What is the current construction status?",
    a: "Construction is progressing as per MahaRERA-approved milestones. Site visits can be arranged for a closer view of current progress.",
  },
  {
    q: "Is home loan assistance available?",
    a: "Yes, our relationship managers can connect you with leading private and nationalised banks pre-approved for the project.",
  },
  {
    q: "Are NRI investors welcome?",
    a: "Absolutely. We assist NRI buyers with documentation, payment plans, FEMA-compliant processes and remote viewings.",
  },
  {
    q: "What is the booking process?",
    a: "After your private viewing, a token amount confirms intent. Allotment is followed by the agreement to sell, fully aligned with MahaRERA disclosures.",
  },
  {
    q: "Is there a sample residence available to view?",
    a: "Yes, we offer guided private viewings of the experience centre and (subject to stage) a sample residence — strictly by appointment.",
  },
  {
    q: "Why invest in Bandra West specifically?",
    a: "Bandra West has limited residential land, deep cultural cachet, established infrastructure and consistent capital appreciation — making it one of Mumbai's most enduring luxury markets.",
  },
  {
    q: "How is Ryla different from other Bandra West projects?",
    a: "Ryla is intentionally boutique — limited inventory, designed under a UNESCO-recognised architect, with sky-borne amenities and an editorial sense of restraint rare to high-rise developments.",
  },
  {
    q: "Is parking included?",
    a: "Each residence is allotted dedicated covered parking. Additional details are confirmed during the private viewing.",
  },
  {
    q: "How can I download the brochure?",
    a: "Use the Download Brochure button anywhere on this page — you will receive the official Roswalt Ryla e-brochure instantly.",
  },
  {
    q: "How do I schedule a private site visit?",
    a:
      "Submit the enquiry form, call us on " +
      PHONE_DISPLAY +
      ", or message on WhatsApp. A relationship manager will arrange a private viewing at your convenience.",
  },
];

const ldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Residence", "Product"],
      name: "Roswalt Ryla",
      description: META_DESC,
      brand: { "@type": "Organization", name: "Roswalt Realty" },
      image: [Url, Url, Url],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bandra West",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
        postalCode: "400050",
      },
      geo: { "@type": "GeoCoordinates", latitude: 19.0596, longitude: 72.8295 },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "80000000",
        availability: "https://schema.org/LimitedAvailability",
        url: SITE_URL,
      },
      identifier: "MahaRERA PR1180002600645",
    },
    {
      "@type": "RealEstateAgent",
      name: "Roswalt Realty",
      url: SITE_URL,
      telephone: PHONE,
      areaServed: "Mumbai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bandra West",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Roswalt Ryla Sales Gallery",
      telephone: PHONE,
      priceRange: "₹₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bandra West",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
        postalCode: "400050",
      },
      openingHours: "Mo-Su 10:00-19:00",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      {
        name: "keywords",
        content:
          "Roswalt Ryla, Bandra West luxury apartments, 3 BHK Bandra West, Bandra sea view residences, Roswalt Realty, luxury flats Mumbai, MahaRERA PR1180002600645, boutique luxury homes Bandra",
      },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: Url },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESC },
      { name: "twitter:image", content: Url },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", as: "image", href: Url, fetchpriority: "high" } as never,
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(ldJson) }],
  }),
  component: Index,
});

/* ---------- shared ---------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);
  return { ref, shown };
}

function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="https://www.roswalt.com/backend/uploads/6231643101045.webp"
        alt="Roswalt"
        className={`h-10 w-auto object-contain ${className}`}
      />
      <div className="leading-tight">
        <div className="font-display text-lg tracking-[0.25em]">RYLA</div>
        <div className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
          by Roswalt Realty
        </div>
      </div>
    </div>
  );
}

export const NAV_ITEMS: { label: string; to: string }[] = [
  { label: "Overview", to: "/about" },
  { label: "Residences", to: "/floor-plans" },
  { label: "Amenities", to: "/amenities" },
  { label: "Location", to: "/location" },
  { label: "Investment", to: "/investment" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background/90 backdrop-blur-md border-b border-border/40" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="text-foreground">
          <Monogram />
        </Link>
        <nav className="hidden gap-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground xl:flex">
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden text-[11px] uppercase tracking-[0.22em] text-gold lg:inline-block"
          >
            Private Viewing →
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center text-foreground"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-1 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6 lg:px-12">
          {NAV_ITEMS.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              onClick={() => setOpen(false)}
              className="border-b border-border/40 py-4 text-sm uppercase tracking-[0.22em] text-foreground hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {it.label}
            </Link>
          ))}
          <a
            href={Url}
            data-brochure
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-6 btn-gold text-center hover:btn-gold-hover"
          >
            Download Brochure
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */

export function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      <img
        src={heroTowerUrl}
        alt="Roswalt Ryla — boutique luxury tower exterior in Bandra West, Mumbai"
        className="absolute inset-0 size-full object-cover animate-kenburns will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.05)` }}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-28 lg:px-12 lg:pb-36">
        <div className="max-w-3xl animate-fade-up">
          <div className="eyebrow mb-6">Bandra West · Mumbai · MahaRERA PR1180002600645</div>
          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] text-foreground">
            Roswalt <span className="italic text-gold-soft">Ryla</span>
          </h1>
          <p className="mt-6 font-display text-2xl italic text-gold-soft md:text-3xl">
            Styling Bandra's Presence.
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A rare collection of boutique luxury residences in Bandra West — offering timeless
            architecture, expansive 3 BHK homes, curated sky amenities and select sea-view
            residences.
          </p>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 border-l border-gold/40 pl-6 md:grid-cols-4">
            {[
              ["From", "₹6.9 Cr*"],
              ["Homes", "3 BHK"],
              ["Carpet", "1068 / 1245"],
              ["MahaRERA", "PR…0645"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  {k}
                </div>
                <div className="mt-1 font-display text-lg text-foreground">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold hover:btn-gold-hover">
              Book Private Site Visit
            </a>
            <a
              href={Url}
              data-brochure
              target="_blank"
              rel="noopener"
              className="btn-outline hover:border-gold hover:text-gold"
            >
              Download Brochure
            </a>
            <a href="#contact" className="btn-outline hover:border-gold hover:text-gold">
              Get Latest Price
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</div>
        <div className="mx-auto mt-2 h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

/* ---------- FACTS ---------- */

export function FactsBar() {
  const facts = [
    ["Configuration", "3 BHK"],
    ["Carpet Area", "1068 / 1245 sq.ft"],
    ["Starting Price", "₹6.9 Cr*"],
    ["MahaRERA", "PR1180002600645"],
  ];
  return (
    <section className="border-y border-border/50 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/40 px-6 lg:grid-cols-4 lg:px-12">
        {facts.map(([k, v]) => (
          <div key={k} className="px-4 py-8 text-center md:py-10">
            <div className="eyebrow text-[10px]">{k}</div>
            <div className="mt-3 font-display text-2xl text-foreground md:text-3xl">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: React.ReactNode;
  kicker?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-6xl">
        {title}
      </h2>
      {kicker && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{kicker}</p>
      )}
      <div className="hairline mx-auto mt-10 w-24" />
    </div>
  );
}

/* ---------- ABOUT ---------- */

export function About() {
  const blocks: {
    img?: string;
    video?: string;
    eyebrow: string;
    title: React.ReactNode;
    body: string;
  }[] = [
    {
      video: "/low-density.mp4",
      eyebrow: "Boutique by Intent",
      title: (
        <>
          A low-density address,{" "}
          <span className="italic text-gold-soft">held back from the crowd.</span>
        </>
      ),
      body: "Ryla is intentionally limited — a small collection of residences shaped to preserve privacy, scale and a sense of authorship. The building does not perform. It withdraws, considered and quiet, into the rhythm of Bandra West.",
    },
    {
      video: "/UNESCO-recognised-hand.mp4",
      eyebrow: "Architecture of Restraint",
      title: (
        <>
          Composed under <span className="italic text-gold-soft">a UNESCO-recognised hand.</span>
        </>
      ),
      body: "Under the direction of Ar. Shantanoo V. Rane, every proportion has been resolved with the discipline of couture — clean planes, honest materials, and a restraint that ages with grace rather than fashion.",
    },
    {
      video: "/compounds-in-value.mp4",
      eyebrow: "A Generational Asset",
      title: (
        <>
          An address that <span className="italic text-gold-soft">compounds in value.</span>
        </>
      ),
      body: "Bandra West carries limited land, deep cultural cachet, and a luxury market that consistently outperforms. Boutique inventory at Ryla deepens that long-term value for those who buy not for now, but for the decade ahead.",
    },
  ];
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl space-y-32 px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Overview"
          title={
            <>
              An editorial sense of{" "}
              <span className="italic text-gold-soft">place, privacy, and presence.</span>
            </>
          }
          kicker="Ryla is a private collection of boutique 3 BHK residences — engineered for those who recognise that true luxury is never performed, only inherent."
        />

        {blocks.map((b, i) => (
          <div
            key={b.eyebrow}
            className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              {b.video ? (
                <video
                  src={b.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <img
                  src={b.img}
                  alt={b.eyebrow}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              )}
              <div className="absolute -bottom-5 -right-5 hidden border border-gold/40 bg-background px-6 py-4 md:block">
                <div className="eyebrow text-[10px]">{b.eyebrow}</div>
              </div>
            </div>
            <div>
              <div className="eyebrow">{b.eyebrow}</div>
              <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">{b.title}</h3>
              <div className="hairline mt-8 w-24" />
              <p className="mt-8 text-base leading-loose text-muted-foreground md:text-lg">
                {b.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- PROJECT INFORMATION ---------- */

export function ProjectInfo() {
  const info = [
    ["Developer", "Roswalt Realty"],
    ["Project Name", "Roswalt Ryla"],
    ["Location", "Bandra West, Mumbai 400050"],
    ["Configuration", "3 BHK"],
    ["Carpet Area", "1068 & 1245 sq.ft"],
    ["Price", "Starting ₹6.9 Cr*"],
    ["Project Type", "Boutique Luxury Residential"],
    ["Inventory", "Limited Collection"],
    ["Sea View Homes", "Select Residences"],
    ["Possession", "On Request"],
    ["Construction Status", "Ongoing · Per MahaRERA"],
    ["MahaRERA", "PR1180002600645"],
  ];
  return (
    <section className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Project Information"
          title={
            <>
              Every essential, <span className="italic text-gold-soft">on record.</span>
            </>
          }
        />
        <div className="mt-20 grid gap-px bg-border/50 md:grid-cols-2 lg:grid-cols-3">
          {info.map(([k, v]) => (
            <div key={k} className="bg-surface px-8 py-7 transition-colors hover:bg-surface-2">
              <div className="eyebrow text-[10px]">{k}</div>
              <div className="mt-3 font-display text-xl text-foreground md:text-2xl">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY (8 cards) ---------- */

export function Why() {
  const pillars = [
    {
      t: "Boutique Living",
      d: "A limited collection — privacy, scale and presence reserved for very few.",
    },
    {
      t: "Prime Bandra Address",
      d: "An enduring stretch of Bandra West that the city has long agreed upon.",
    },
    {
      t: "Large Residences",
      d: "Expansive 1,068 & 1,245 sq.ft carpet 3 BHK homes, cut with clarity.",
    },
    {
      t: "Premium Amenities",
      d: "Sky lounge, party deck, juice bar, yoga deck — composed across the upper floors.",
    },
    {
      t: "Excellent Connectivity",
      d: "BKC, Sea Link, Hill Road, Linking Road — all within minutes.",
    },
    { t: "Select Sea Views", d: "Uninterrupted sea-facing residences for a select few." },
    {
      t: "Investment Potential",
      d: "Bandra West carries a generational premium and consistent appreciation.",
    },
    { t: "Limited Inventory", d: "A deliberately small floor count — scarcity, by design." },
  ];
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Why Roswalt Ryla"
          title={
            <>
              Eight reasons it <span className="italic text-gold-soft">earns its address.</span>
            </>
          }
        />
        <div className="mt-20 grid gap-px bg-border/50 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.t}
              className="group relative bg-background p-10 transition-colors duration-500 hover:bg-surface"
            >
              <div className="font-display text-4xl text-gold/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              <div className="mt-8 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESIDENCES / FLOOR PLANS ---------- */

type Home = {
  name: string;
  area: string;
  type: string;
  rooms: { label: string; value: string }[];
};

const FLOOR_PLAN_SRC: Record<"I" | "II", string> = {
  I: Url,
  II: Url,
};

function FloorPlanImage({
  variant,
  className,
  zoomed = false,
}: {
  variant: "I" | "II";
  className?: string;
  zoomed?: boolean;
}) {
  return (
    <img
      src={FLOOR_PLAN_SRC[variant]}
      alt={`Roswalt Ryla — Residence ${variant} floor plan from the official brochure`}
      loading="lazy"
      decoding="async"
      className={className}
      style={
        zoomed
          ? { objectFit: "contain", background: "oklch(0.98 0.005 80)" }
          : { objectFit: "cover", objectPosition: "center", background: "oklch(0.98 0.005 80)" }
      }
    />
  );
}

export function Residences() {
  const homes: (Home & { variant: "I" | "II" })[] = [
    {
      name: "Residence I",
      area: "1,068 sq.ft",
      type: "3 BHK · Carpet",
      variant: "I",
      rooms: [
        { label: "Living & Dining", value: "Sea-facing*" },
        { label: "Bedrooms", value: "3" },
        { label: "Bathrooms", value: "3" },
        { label: "Deck / Balcony", value: "Yes" },
      ],
    },
    {
      name: "Residence II",
      area: "1,245 sq.ft",
      type: "3 BHK · Carpet",
      variant: "II",
      rooms: [
        { label: "Living & Dining", value: "Sea-facing*" },
        { label: "Bedrooms", value: "3 (Larger)" },
        { label: "Bathrooms", value: "3" },
        { label: "Deck / Balcony", value: "Extended" },
      ],
    },
  ];

  const [zoom, setZoom] = useState<null | (Home & { variant: "I" | "II" })>(null);
  const [request, setRequest] = useState<null | (Home & { variant: "I" | "II" })>(null);
  const [sent, setSent] = useState(false);

  const onRequestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    try {
      await submitEnquiry({
        data: {
          type: "layout_request",
          name,
          phone,
          email,
          layout_name: request?.name,
          layout_type: request?.type,
          layout_area: request?.area,
        },
      });
    } catch (err) {
      console.error("Failed to submit layout request to D1:", err);
    }
    setSent(true);
  };

  const closeRequest = () => {
    setRequest(null);
    setTimeout(() => setSent(false), 250);
  };

  return (
    <section id="residences" className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Residences & Floor Plans"
          title={
            <>
              Expansive 3 BHK homes,{" "}
              <span className="italic text-gold-soft">cut with clarity.</span>
            </>
          }
          kicker="Two carefully composed layouts — finished with restraint, carried with an effortless sense of luxury."
        />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {homes.map((h) => (
            <article
              key={h.name}
              className="group flex flex-col border border-border bg-background transition-all duration-500 hover:border-gold"
            >
              <button
                type="button"
                onClick={() => setZoom(h)}
                aria-label={`Zoom floor plan of ${h.name}`}
                className="relative block overflow-hidden border-b border-border"
              >
                <FloorPlanImage
                  variant={h.variant}
                  className="block h-64 w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 border border-gold/50 bg-background/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur-sm">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                  Zoom
                </span>
              </button>

              <div className="flex flex-1 flex-col p-10">
                <div className="eyebrow text-[10px]">{h.type}</div>
                <h3 className="mt-4 font-display text-4xl text-foreground">{h.name}</h3>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-5xl text-gold">{h.area.split(" ")[0]}</span>
                  <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    sq.ft carpet
                  </span>
                </div>
                <div className="hairline my-8 w-full opacity-50" />
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {h.rooms.map((r) => (
                    <li key={r.label} className="flex justify-between">
                      <span>{r.label}</span>
                      <span className="text-foreground">{r.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setRequest(h)}
                    className="btn-gold hover:btn-gold-hover"
                  >
                    Request Detailed Layout
                  </button>
                  <a
                    href={Url}
                    data-brochure
                    download
                    target="_blank"
                    rel="noopener"
                    className="btn-outline hover:border-gold hover:text-gold"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Zoom dialog */}
      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-5xl border-border bg-surface p-0 sm:rounded-none">
          {zoom && (
            <div>
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div>
                  <div className="eyebrow text-[10px]">
                    {zoom.type} · {zoom.area}
                  </div>
                  <DialogTitle className="mt-1 font-display text-2xl font-normal tracking-tight">
                    {zoom.name} — Floor Plan
                  </DialogTitle>
                </div>
                <a
                  href={Url}
                  data-brochure
                  download
                  target="_blank"
                  rel="noopener"
                  className="hidden sm:inline-flex items-center gap-2 border border-gold/60 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-gold hover:bg-gold hover:text-gold-foreground"
                >
                  Download PDF
                </a>
              </div>
              <div className="bg-background p-6">
                <FloorPlanImage
                  variant={zoom.variant}
                  zoomed
                  className="block h-auto w-full max-h-[80vh] mx-auto"
                />
                <p className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  From the official Roswalt Ryla brochure · MahaRERA PR1180002600645
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Request detailed layout dialog */}
      <Dialog open={!!request} onOpenChange={(o) => !o && closeRequest()}>
        <DialogContent className="max-w-lg border-border bg-surface p-0 sm:rounded-none">
          {request && (
            <div className="p-8 md:p-10">
              {sent ? (
                <div className="py-8 text-center">
                  <div className="eyebrow">Received</div>
                  <DialogTitle className="mt-3 font-display text-3xl font-normal">
                    Layout on its way.
                  </DialogTitle>
                  <p className="mt-4 text-sm text-muted-foreground">
                    A relationship manager will share the detailed layout for {request.name} within
                    one business day.
                  </p>
                  <a
                    href={Url}
                    data-brochure
                    download
                    target="_blank"
                    rel="noopener"
                    className="btn-gold mt-8 hover:btn-gold-hover"
                  >
                    Download Brochure Now
                  </a>
                </div>
              ) : (
                <form onSubmit={onRequestSubmit}>
                  <div className="eyebrow">Request Detailed Layout</div>
                  <DialogTitle className="mt-2 font-display text-3xl font-normal">
                    {request.name}
                  </DialogTitle>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {request.type} · {request.area}
                  </p>
                  <div className="mt-8 grid gap-5">
                    {[
                      ["name", "Full Name", "text"],
                      ["phone", "Phone", "tel"],
                      ["email", "Email", "email"],
                    ].map(([n, l, t]) => (
                      <label key={n} className="block">
                        <span className="eyebrow text-[10px]">{l}</span>
                        <input
                          required
                          name={n}
                          type={t}
                          maxLength={120}
                          className="mt-2 block w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
                        />
                      </label>
                    ))}
                  </div>
                  <button type="submit" className="btn-gold mt-10 w-full hover:btn-gold-hover">
                    Send Request
                  </button>
                  <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Handled with absolute discretion
                  </p>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ---------- AMENITIES (grouped) ---------- */

export function Amenities() {
  const groups = [
    {
      cat: "Wellness",
      items: [
        {
          img: Url,
          title: "Zen Garden",
          desc: "A composed pause in the day — meditative, quiet, distinctly private.",
        },
        {
          img: Url,
          title: "Sky Yoga Deck",
          desc: "A space above the city, thoughtfully composed for you.",
        },
        {
          img: Url,
          title: "Fitness Centre",
          desc: "A disciplined pursuit, carried with precision and intent.",
        },
      ],
    },
    {
      cat: "Lifestyle",
      items: [
        {
          img: Url,
          title: "Sky Lounge",
          desc: "An elevated outlook, framed with quiet authority.",
        },
        {
          img: Url,
          title: "Party Deck & Sky BBQ",
          desc: "An evening shaped with rhythm, presence and allure.",
        },
        {
          img: Url,
          title: "Sky BBQ Deck",
          desc: "A rooftop ritual under the city sky — gathering, but never crowded.",
        },
        {
          img: Url,
          title: "Juice Bar",
          desc: "A refined ritual of freshness and conscious indulgence.",
        },
      ],
    },
    {
      cat: "Family",
      items: [
        {
          img: Url,
          title: "Kids Play Area",
          desc: "A vibrant space, alive with movement and imagination.",
        },
        {
          img: Url,
          title: "Indoor Games",
          desc: "A measured corner of the building, set aside for play.",
        },
        {
          img: Url,
          title: "Senior Citizen Area",
          desc: "A serene retreat for unhurried mornings and shared company.",
        },
      ],
    },
  ];
  return (
    <section id="amenities" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Amenities"
          title={
            <>
              Composed across <span className="italic text-gold-soft">the upper floors.</span>
            </>
          }
          kicker="A curated lifestyle, layered across wellness, gathering and family."
        />
        <div className="mt-20 space-y-24">
          {groups.map((g) => (
            <div key={g.cat}>
              <div className="mb-10 flex items-baseline justify-between">
                <h3 className="font-display text-3xl text-foreground md:text-4xl">{g.cat}</h3>
                <div className="hidden h-px flex-1 bg-border md:ml-10 md:block" />
                <span className="ml-6 text-[10px] uppercase tracking-[0.3em] text-gold">
                  {String(g.items.length).padStart(2, "0")} Spaces
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((a) => (
                  <article key={a.title} className="group relative overflow-hidden bg-surface">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={a.img}
                        alt={`${a.title} at Roswalt Ryla`}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <h4 className="font-display text-2xl text-foreground">{a.title}</h4>
                      <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                        {a.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */

export function Location() {
  const cards = [
    { t: "Bandra Kurla Complex", d: "Mumbai's premier business district", time: "12 min" },
    { t: "Bandra-Worli Sea Link", d: "Gateway to South Mumbai", time: "5 min" },
    { t: "Hill Road", d: "Iconic Bandra retail & cafés", time: "3 min" },
    { t: "Linking Road", d: "Bandra's most celebrated shopping mile", time: "4 min" },
    { t: "Lilavati Hospital", d: "World-class medical care", time: "6 min" },
    { t: "Carter Road Promenade", d: "Sea-side strolls and weekend dining", time: "4 min" },
    { t: "Fine Dining", d: "Bastian, Olive, Indigo, Pali Village Cafe", time: "Nearby" },
    { t: "Luxury Retail", d: "Palladium, Phoenix, Bandra boutiques", time: "10 min" },
    { t: "International Schools", d: "AISM, Dhirubhai Ambani, Oberoi", time: "8 – 15 min" },
  ];
  return (
    <section id="location" className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Address"
          title={
            <>
              Bandra West —{" "}
              <span className="italic text-gold-soft">held to its highest standard.</span>
            </>
          }
          kicker="An address precisely placed along one of Bandra's most enduring stretches, where the city flows with ease."
        />
        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="Roswalt Ryla map · Bandra West, Mumbai"
                src="https://www.google.com/maps?q=Bandra+West,+Mumbai&output=embed"
                className="size-full grayscale-[40%] invert-[0.08]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="eyebrow">Neighbourhood</div>
            <h3 className="mt-4 font-display text-3xl">A short walk to everything that matters.</h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Ryla sits in the middle of Bandra West's most loved triangle — between Hill Road,
              Carter Road and the Sea Link.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-border/50 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.t} className="group bg-surface p-8 transition-colors hover:bg-background">
              <div className="flex items-baseline justify-between">
                <h4 className="font-display text-xl text-foreground">{c.t}</h4>
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">{c.time}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-6 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INVESTMENT ---------- */

export function Investment() {
  const stats = [
    { n: 12, suffix: "%+", label: "Avg. annual luxury appreciation, Bandra West (10-yr)" },
    { n: 1, suffix: "", label: "Of Mumbai's most land-constrained luxury micro-markets" },
    {
      n: 100,
      suffix: "%",
      label: "Established social infrastructure — schools, hospitals, retail",
    },
    { n: 5, suffix: " min", label: "To Bandra-Worli Sea Link · gateway to South Mumbai" },
  ];
  return (
    <section id="investment" className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Investment"
          title={
            <>
              Why Bandra West continues{" "}
              <span className="italic text-gold-soft">to define luxury living.</span>
            </>
          }
          kicker="A market shaped by scarcity, cultural cachet and consistent appreciation — and a development calibrated to deepen it."
        />
        <div className="mt-20 grid gap-px bg-border/50 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-10 text-center">
              <div className="font-display text-6xl text-gold">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <p className="mx-auto mt-5 max-w-[16ch] text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {[
            {
              t: "Limited Land Supply",
              d: "Bandra West is geographically capped — every new luxury address compounds the value of those already standing.",
            },
            {
              t: "Consistent Demand",
              d: "Cultural and professional gravity keeps Bandra West among the most sought-after addresses in Mumbai.",
            },
            {
              t: "Lifestyle Premium",
              d: "Cafes, promenades, designer retail and creative neighbours — a lifestyle that justifies the cost, every day.",
            },
          ].map((b) => (
            <div key={b.t} className="border-l border-gold pl-6">
              <h3 className="font-display text-2xl text-foreground">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */

export function Gallery() {
  const cats = ["All", "Exterior", "Interiors", "Amenities", "Location"] as const;
  type Cat = (typeof cats)[number];
  const imgs: { src: string; alt: string; cat: Exclude<Cat, "All">; span?: string }[] = [
    {
      src: Url,
      alt: "Roswalt Ryla tower exterior at twilight",
      cat: "Exterior",
      span: "lg:col-span-2 lg:row-span-2",
    },
    { src: Url, alt: "Building facade detail", cat: "Exterior" },
    { src: Url, alt: "Sea-facing living room interior", cat: "Interiors" },
    { src: Url, alt: "Refined dining area inside Ryla", cat: "Interiors" },
    { src: Url, alt: "Sky lounge ledge at sunset", cat: "Amenities" },
    { src: Url, alt: "Rooftop party deck overlooking the skyline", cat: "Amenities" },
    { src: Url, alt: "Sky yoga deck at dusk", cat: "Amenities" },
    { src: Url, alt: "Zen garden contemplative area", cat: "Amenities" },
    { src: Url, alt: "Sky deck overlooking Bandra West", cat: "Location" },
    { src: Url, alt: "Kids play area", cat: "Amenities" },
  ];
  const [active, setActive] = useState<Cat>("All");
  const visible = imgs.filter((i) => active === "All" || i.cat === active);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <section id="gallery" className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Gallery"
          title={
            <>
              An <span className="italic text-gold-soft">elevated</span> world.
            </>
          }
        />
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                active === c
                  ? "bg-gold text-gold-foreground"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 grid auto-rows-[18rem] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((g, i) => (
            <button
              type="button"
              key={g.src + i}
              onClick={() => setLightbox(i)}
              aria-label={`Open ${g.alt}`}
              className={`group relative block overflow-hidden cursor-zoom-in ${g.span ?? ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/30" />
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 border border-gold/50 bg-background/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-gold opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
                View
              </span>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/85 p-4 text-left text-xs text-muted-foreground transition-transform duration-500 group-hover:translate-y-0">
                {g.alt}
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && visible[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={visible[lightbox].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-up"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center border border-border text-foreground hover:border-gold hover:text-gold"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-8 inline-flex h-12 w-12 items-center justify-center border border-border text-foreground hover:border-gold hover:text-gold"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-8 inline-flex h-12 w-12 items-center justify-center border border-border text-foreground hover:border-gold hover:text-gold"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <figure className="max-h-[90vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              className="max-h-[82vh] max-w-[92vw] object-contain"
            />
            <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {visible[lightbox].alt} · {lightbox + 1} / {visible.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

/* ---------- PRICE ---------- */

export function Price() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <div className="eyebrow">Price on Application</div>
        <h2 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
          Starting from <span className="italic text-gold">₹6.9 Cr*</span>
        </h2>
        <p className="mt-8 text-muted-foreground">
          All inclusive · Boutique inventory · Private allocation
        </p>
        <div className="hairline mx-auto mt-12 w-32" />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-gold hover:btn-gold-hover">
            Request Latest Price Sheet
          </a>
          <a href="#contact" className="btn-outline hover:border-gold hover:text-gold">
            Book Consultation
          </a>
          <a
            href={Url}
            data-brochure
            target="_blank"
            rel="noopener"
            className="btn-outline hover:border-gold hover:text-gold"
          >
            Download Cost Sheet
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Considered <span className="italic text-gold-soft">questions.</span>
            </>
          }
        />
        <div className="mt-16 divide-y divide-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-7">
              <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                <span className="font-display text-lg text-foreground md:text-xl">{f.q}</span>
                <span className="mt-1 text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    const budget = String(fd.get("budget") || "");
    const buyer = String(fd.get("buyer") || "");
    const visit = String(fd.get("visit") || "");
    const message = String(fd.get("message") || "");
    try {
      await submitEnquiry({
        data: {
          type: "contact",
          name,
          phone,
          email,
          budget,
          buyer_type: buyer,
          visit_date: visit,
          message,
        },
      });
    } catch (err) {
      console.error("Failed to submit contact enquiry to D1:", err);
    }
    setSent(true);
  };
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="eyebrow">Private Viewing</div>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
            Arrive above <span className="italic text-gold-soft">the ordinary.</span>
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground">
            Share your details and a relationship manager will arrange a private viewing at a time
            that suits you. All enquiries are handled with absolute discretion.
          </p>

          <div className="hairline my-12 w-24" />

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="eyebrow text-[10px]">Authorised Channel Partner</dt>
              <dd className="mt-2 text-foreground">Roswalt Ryla Sales Gallery</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Sales Office</dt>
              <dd className="mt-2 text-foreground">Bandra West, Mumbai 400050</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Phone · WhatsApp</dt>
              <dd className="mt-2 text-foreground">
                <a href={`tel:${PHONE}`} className="hover:text-gold">
                  {PHONE_DISPLAY}
                </a>{" "}
                ·{" "}
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold"
                >
                  WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Business Hours</dt>
              <dd className="mt-2 text-foreground">By appointment · 10:00 – 19:00 IST, all days</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">MahaRERA</dt>
              <dd className="mt-2 text-foreground">PR1180002600645</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn-outline hover:border-gold hover:text-gold">
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener"
              className="btn-outline hover:border-gold hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="border border-border bg-surface p-8 md:p-12">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="eyebrow">Thank you</div>
              <h3 className="mt-4 font-display text-3xl">Your request is received.</h3>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                A relationship manager will be in touch within one business day to arrange your
                private viewing.
              </p>
              <a
                href={Url}
                data-brochure
                target="_blank"
                rel="noopener"
                className="btn-gold mt-10 hover:btn-gold-hover"
              >
                Download Brochure
              </a>
            </div>
          ) : (
            <>
              <div className="eyebrow">Enquire</div>
              <h3 className="mt-3 font-display text-3xl">Reserve a viewing</h3>
              <div className="mt-8 grid gap-5">
                {[
                  ["name", "Full Name", "text"],
                  ["phone", "Phone", "tel"],
                  ["email", "Email", "email"],
                ].map(([n, l, t]) => (
                  <label key={n} className="block">
                    <span className="eyebrow text-[10px]">{l}</span>
                    <input
                      required
                      name={n}
                      type={t}
                      maxLength={120}
                      className="mt-2 block w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="eyebrow text-[10px]">Budget</span>
                  <select
                    name="budget"
                    defaultValue=""
                    required
                    className="mt-2 block w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-gold"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>₹8 – 10 Cr</option>
                    <option>₹10 – 12 Cr</option>
                    <option>₹12 Cr+</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow text-[10px]">I am a</span>
                  <select
                    name="buyer"
                    defaultValue=""
                    required
                    className="mt-2 block w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-gold"
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>End User</option>
                    <option>Investor</option>
                    <option>NRI</option>
                    <option>Channel Partner</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow text-[10px]">Preferred Visit Date</span>
                  <input
                    name="visit"
                    type="date"
                    className="mt-2 block w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-gold"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-[10px]">Message</span>
                  <textarea
                    name="message"
                    rows={3}
                    maxLength={500}
                    className="mt-2 block w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-gold"
                  />
                </label>
              </div>
              <button type="submit" className="btn-gold mt-10 w-full hover:btn-gold-hover">
                Submit Enquiry
              </button>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Secure enquiry · Handled with strict confidentiality
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------- TRUST ---------- */

export function Trust() {
  const badges = [
    ["MahaRERA Registered", "PR1180002600645"],
    ["Authorised Channel Partner", "Verified"],
    ["Secure Enquiry", "TLS Encrypted"],
    ["Boutique Developer", "Roswalt Realty"],
  ];
  return (
    <section className="border-t border-border bg-surface py-16">
      <div className="mx-auto grid max-w-7xl gap-px bg-border/50 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {badges.map(([t, s]) => (
          <div key={t} className="bg-surface px-8 py-6 text-center">
            <div className="eyebrow text-[10px]">{t}</div>
            <div className="mt-2 font-display text-lg text-foreground">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-12">
        <div className="lg:col-span-2">
          <Monogram className="text-foreground" />
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Roswalt Ryla — a boutique luxury residential collection by Roswalt Realty, styling
            Bandra's presence.
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            MahaRERA · PR1180002600645
          </p>
        </div>
        <div>
          <div className="eyebrow text-[10px]">Discover</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-gold">
                Overview
              </a>
            </li>
            <li>
              <a href="#residences" className="hover:text-gold">
                Residences
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-gold">
                Amenities
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-gold">
                Location
              </a>
            </li>
            <li>
              <a href="#investment" className="hover:text-gold">
                Investment
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-[10px]">Connect</div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${PHONE}`} className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener"
                className="hover:text-gold"
              >
                WhatsApp Enquiry
              </a>
            </li>
            <li>
              <a
                href={Url}
                data-brochure
                target="_blank"
                rel="noopener"
                className="hover:text-gold"
              >
                Download Brochure
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold">
                Book Private Visit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© {new Date().getFullYear()} Roswalt Realty · All rights reserved</span>
          <span className="text-muted-foreground/70 normal-case tracking-normal">
            *Prices, areas, images and amenities are indicative and subject to MahaRERA-approved
            plans. Disclaimer · Privacy · Terms.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- STICKY MOBILE BAR ---------- */

export function StickyCtas() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-4 divide-x divide-border text-[10px] uppercase tracking-[0.16em]">
        <a href={`tel:${PHONE}`} className="py-3.5 text-center text-foreground">
          Call
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener"
          className="py-3.5 text-center text-foreground"
        >
          WhatsApp
        </a>
        <a href="#contact" className="py-3.5 text-center text-foreground">
          Price
        </a>
        <a href="#contact" className="bg-gold py-3.5 text-center text-gold-foreground">
          Visit
        </a>
      </div>
    </div>
  );
}

/* ---------- FLOATING WA ---------- */

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello, I'd like to know more about Roswalt Ryla.")}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-2xl shadow-black/40 transition-transform hover:scale-110 lg:flex"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 3 17l-1 5 5.2-1.4A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9 9 0 1 1 12 21.5Zm5.2-6.7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1a7.2 7.2 0 0 1-3.6-3.1c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3.5 3.5 0 0 0-1 2.6c0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.3 4.6 2 .8 2.7.7 3.2.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4l-.6-.3Z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Nav />
      <main>
        <Hero />
        <FactsBar />
        <About />
        <ProjectInfo />
        <Why />
        <Residences />
        <Amenities />
        <Location />
        <Investment />
        <Gallery />
        <Price />
        <FAQ />
        <Contact />
        <Trust />
      </main>
      <Footer />
      <StickyCtas />
      <FloatingWhatsApp />
    </div>
  );
}
