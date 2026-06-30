import Image from "next/image";
import Link from "next/link";
import { Dithering } from "@paper-design/shaders-react";
import { PixelCluster } from "./_components/PixelCluster";
import { Highlighter } from "@/components/ui/highlighter"
import {
  HeroDitheringRoot,
  HeroDitheringContent,
  HeroDitheringHeading,
  HeroDitheringDescription,
  HeroDitheringActions,
  HeroDitheringBadges,
} from "@/components/ui/hero-dithering";
import { TopBar, Footer, SectionLabel, ArrowSmall } from "./_components/Chrome";
import { PARTNERS, PARTNER_SLOT_COUNT } from "@/lib/partners";

const VERBS: { n: string; word: string; body: string }[] = [
  {
    n: "01",
    word: "Build",
    body: "Real products, not class projects. The work that turns an idea into something people can actually use.",
  },
  {
    n: "02",
    word: "Ship",
    body: "Done beats perfect. Every cycle ends with something live, in front of real users, on a deadline that doesn't move.",
  },
  {
    n: "03",
    word: "Sell",
    body: "Distribution is the product. Marketing, monetization, and putting the thing where its audience already is.",
  },
  {
    n: "04",
    word: "Scale",
    body: "From a dorm-room product to a real org. Hire your friends. Raise the bar. Treat the work like it matters because it does.",
  },
];

const TRACKS: { n: string; name: string; body: string }[] = [
  { n: "01", name: "Digital", body: "Apps, websites, tools. Real users by demo day." },
  { n: "02", name: "Physical", body: "Hardware, wearables, anything you can hold." },
  { n: "03", name: "Service", body: "An offer, a process, a thing people pay for." },
  { n: "04", name: "Social impact", body: "Built for a community that actually needs it." },
  { n: "05", name: "Open", body: "Doesn't fit a box. Pitch it. We'll figure it out together." },
];

const CHAPTER_GETS = [
  "The full playbook + hosting kit.",
  "Brand and identity assets.",
  "Direct line to the founders + chapter network.",
];

const CHAPTER_EXPECTS = [
  "Monthly public meetings, 20+ attendees.",
  "A selective internal operating team.",
  "One chapter-led event in year one.",
];

const TIERS: {
  name: string;
  amount: string;
  line: string;
  perks: string[];
  featured?: boolean;
}[] = [
  {
    name: "Friend",
    amount: "$500",
    line: "Back the mission.",
    perks: [
      "Listed on launchpad.org and chapter materials",
      "Quarterly impact email from the founding team",
    ],
  },
  {
    name: "Builder",
    amount: "$2,500",
    line: "Mentor the next generation.",
    perks: [
      "Brand at one Shipathon event",
      "Mentor slot for the host chapter",
      "Listed on launchpad.org and event materials",
    ],
  },
  {
    name: "Operator",
    amount: "$10,000",
    line: "Show up across the network.",
    perks: [
      "Brand across all chapters and Shipathons",
      "Recruiting access to the selective team",
      "Year-round mentor commitment",
      "Quarterly progress reports",
    ],
  },
  {
    name: "Title",
    amount: "$30,000+",
    line: "Own the moment.",
    perks: [
      "Naming partner of the year's Shipathon",
      "Founder-talk slot at every chapter",
      "Executive advisory seat with the founding team",
      "Custom partnership scope",
    ],
    featured: true,
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="relative bg-paper text-ink">
      <TopBar />
      <Hero />
      <AboutSection />
      {/* ShipathonSection — kept as a component, intentionally not rendered until the winter announcement */}
      {/* ChaptershipSection — kept as a component, intentionally not rendered until chapter expansion is announced */}
      <PartnersSection />
      <SponsorsSection />
      <Footer year={year} />
    </div>
  );
}

const VERB_BADGES = [
  { name: "Build", version: "01" },
  { name: "Ship", version: "02" },
  { name: "Sell", version: "03" },
  { name: "Scale", version: "04" },
];

function Hero() {
  const ditherShape = "warp" as const;

  return (
    <HeroDitheringRoot
      id="top"
      className="relative isolate min-h-[92svh] overflow-hidden border-b border-rule-soft bg-paper pt-24 pb-20 sm:pt-32 sm:pb-28"
      srTitle="Launchpad — The high school product development network."
      techStack={VERB_BADGES}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 opacity-55">
        <Dithering
          width={1920}
          height={1080}
          colorBack="#fafafa"
          colorFront="#1f1f1f"
          shape={ditherShape}
          type="4x4"
          size={1.35}
          speed={0.5}
          scale={0.7}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 68% 55% at 50% 46%, var(--paper) 0%, color-mix(in oklab, var(--paper) 96%, transparent) 30%, color-mix(in oklab, var(--paper) 78%, transparent) 60%, color-mix(in oklab, var(--paper) 40%, transparent) 85%, transparent 100%)",
        }}
      />

      <div aria-hidden className="lp-grid-bg lp-grid-bg-fade absolute inset-0 -z-10 opacity-50" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-6 px-5 text-center sm:gap-7 sm:px-8 lg:gap-8">
        <HeroDitheringContent className="items-center text-center lg:items-center lg:px-0 lg:pl-0 lg:text-center">
          <a
            href="#apply"
            className="lp-fade group inline-flex w-fit items-center gap-2.5 self-center rounded-full border border-rule bg-paper py-1.5 pl-2.5 pr-3.5 text-ink-soft transition-colors hover:border-ink hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-paper">
              Fall &rsquo;26
            </span>
            <span className="font-sans text-[13px] font-medium tracking-[-0.005em]">
              Applications open for the AHS chapter
            </span>
            <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
          </a>

          <HeroDitheringHeading
            className="pt-0 text-center lg:text-center"
            title={
              <span className="lp-rise block w-full">
                <Image
                  src="/BigLogo2.png"
                  alt="Launchpad"
                  width={1326}
                  height={300}
                  priority
                  sizes="(max-width: 1024px) 90vw, 70vw"
                  className="mx-auto"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "clamp(64px, 14vw, 240px)",
                  }}
                />
              </span>
            }
            subtitle={
              <span
                className="lp-rise mt-5 block font-sans text-[clamp(1.5rem,3vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-ink"
                style={{ animationDelay: "140ms", textWrap: "balance" }}
              >
                The <span className="font-bold"><Highlighter action="underline" color="#FF0000">high school</Highlighter></span> product
                development network.
              </span>
            }
            headingClassName="font-sans font-bold leading-[0.86] tracking-[-0.045em]"
          />

          <HeroDitheringDescription
            className="lp-fade mx-auto max-w-[62ch] lg:mx-auto lg:max-w-[62ch] lg:text-center"
            descriptionClassName="font-sans text-ink-soft text-lg sm:text-xl lg:text-[1.3rem] xl:text-[1.4rem] leading-[1.35] tracking-[-0.01em]"
            description={
              <>
                <span className="block text-balance">
                  Hackathons end at the demo. Pitch contests end at the deck.
                </span>
                <span className="mt-2 block text-balance font-medium text-ink">
                  Launchpad ends when something you built has users.
                </span>
              </>
            }
            style={{ animationDelay: "300ms" }}
          />

          <HeroDitheringActions
            className="lp-fade mt-2 flex-col items-center justify-center gap-x-6 gap-y-3 sm:flex-row sm:gap-x-8 lg:justify-center"
            style={{ animationDelay: "440ms" }}
          >
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Apply for Fall &rsquo;26
              <ArrowSmall />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
                See what we&rsquo;re building
              </span>
              <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
            </a>
          </HeroDitheringActions>
        </HeroDitheringContent>
      </div>
    </HeroDitheringRoot>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="01" label="What we are" />

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <h2
              className="max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                textWrap: "balance",
              }}
            >
              We teach the whole loop.
            </h2>
            <p className="mt-7 max-w-[56ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
              Most high school programs pick a side. Engineering through hackathons. Business through pitch contests.{" "}
              <span className="font-medium text-ink">Launchpad teaches all four.</span>{" "}
              The whole motion from idea to org — real users at the end, real revenue if it works.
            </p>
          </div>

          <div className="lg:pt-2">
            <p
              className="font-sans font-medium leading-[1.1] tracking-[-0.025em] text-ink"
              style={{
                fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)",
                textWrap: "balance",
              }}
            >
              Four words. <span className="text-ink-soft">Run in order.</span> Until something you built has a real audience and a real bank account.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-rule sm:grid-cols-2 sm:border-l">
          {VERBS.map((v, i) => (
            <article
              key={v.word}
              className={`group relative flex flex-col gap-4 border-b border-rule p-7 transition-colors hover:bg-paper-2 sm:p-10 ${
                i % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-ink-mute">
                  {v.n} / 04
                </span>
                <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-ink-mute">
                  {i === 0
                    ? "Make"
                    : i === 1
                    ? "Launch"
                    : i === 2
                    ? "Grow"
                    : "Compound"}
                </span>
              </div>
              <h3
                className="font-sans font-bold leading-none tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
              >
                {v.word}
                <span className="text-accent">.</span>
              </h3>
              <p className="max-w-[44ch] text-[15.5px] leading-relaxed text-ink-soft">
                {v.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] font-sans text-[15px] leading-relaxed text-ink-soft">
            Beyond the network, we&rsquo;re building a global initiative for teen
            founders who don&rsquo;t have one nearby.
          </p>
          <Link
            href="/initiative"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Our global initiative
            <ArrowSmall />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ShipathonSection() {
  return (
    <section
      id="shipathon"
      className="relative overflow-hidden border-t border-rule bg-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -left-8 hidden bg-ink opacity-10 sm:block lg:-bottom-20 lg:-left-12 xl:-bottom-24 xl:-left-16"
        style={{
          width: "min(640px, 48vw)",
          aspectRatio: "1 / 1",
          maskImage: "url(/ship.svg)",
          WebkitMaskImage: "url(/ship.svg)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          transform: "scaleX(-1)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <SectionLabel n="01" label="Shipathon" />
          <div className="inline-flex items-center gap-3 rounded-full border border-rule bg-paper-2 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            1st annual · Spring 2027 · Bay Area
          </div>
        </div>

        <h2
          className="mt-10 font-sans font-bold leading-[0.86] tracking-[-0.045em] text-ink"
          style={{ fontSize: "clamp(2.75rem, 8.5vw, 6.5rem)", textWrap: "balance" }}
        >
          <span className="block">The Bay Area</span>
          <span className="block">
            Shipathon<span className="text-accent">.</span>
          </span>
        </h2>

        <p
          className="mt-12 max-w-[26ch] font-sans font-medium leading-[1.1] tracking-[-0.03em] text-ink"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
            textWrap: "balance",
          }}
        >
          Not a hackathon.{" "}
          <span className="text-ink-soft">Not a pitch contest.</span>{" "}
          A real product launch.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[1fr_minmax(320px,460px)] lg:items-start">
          <div className="lg:pl-[20%] xl:pl-[24%]">
            <p className="max-w-[48ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
              48 hours from idea to something live. Five tracks. Teams present in
              person to working founders, operators, and investors. Everyone
              leaves with{" "}
              <span className="font-medium text-ink">
                something they actually shipped
              </span>{" "}
              — not a slide deck, not a GitHub repo. A product with users.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="#shipathon-apply"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                Apply as a team
                <ArrowSmall />
              </a>
              <a
                href="#shipathon-brief"
                className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
                  Read the event brief
                </span>
                <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between border-y border-rule py-3">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-ink">
                Manifest
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-mute">
                5 tracks · pick one
              </span>
            </div>
            <ol className="divide-y divide-rule border-b border-rule">
              {TRACKS.map((t) => (
                <li
                  key={t.n}
                  className="group grid grid-cols-[44px_1fr] items-baseline gap-4 py-5 transition-colors hover:bg-paper-2/60"
                >
                  <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
                    {t.n}
                  </span>
                  <div>
                    <h3 className="font-sans text-[19px] font-semibold tracking-[-0.015em] text-ink">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">
                      {t.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChaptershipSection() {
  return (
    <section id="chapters" className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="02" label="Chaptership" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
        >
          Start one at your school.
        </h2>

        <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          We give you the playbook.{" "}
          <span className="font-medium text-ink">You expand the web.</span>
        </p>

        <div className="mt-12 flex flex-col items-start gap-5 border-y border-rule py-6 sm:flex-row sm:items-center sm:gap-10 sm:py-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            Currently
          </span>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className="font-sans font-bold tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
            >
              1
            </span>
            <span className="font-sans text-[15px] text-ink-soft">
              active chapter (AHS, Fremont).
            </span>
          </div>
          <span aria-hidden className="hidden h-6 w-px bg-rule sm:block" />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              Target EOY 2026
            </span>
            <span
              className="font-sans font-bold tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}
            >
              3&ndash;5
            </span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              What you get
            </h3>
            <ol className="mt-6 space-y-5 border-t border-rule pt-6">
              {CHAPTER_GETS.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[36px_1fr] items-baseline gap-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15.5px] leading-relaxed text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
              What we expect
            </h3>
            <ol className="mt-6 space-y-5 border-t border-rule pt-6">
              {CHAPTER_EXPECTS.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[36px_1fr] items-baseline gap-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15.5px] leading-relaxed text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="#chapter-apply"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Apply to start a chapter
            <ArrowSmall />
          </a>
          <a
            href="mailto:hello@launchpad.example"
            className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
              Talk to a founder
            </span>
            <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const filled = PARTNERS.length;
  const empty = Math.max(0, PARTNER_SLOT_COUNT - filled);
  const isEmpty = filled === 0;

  return (
    <section id="partners" className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <SectionLabel n="02" label="Partners" />
          <a
            href="#sponsors"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-ink"
          >
            <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
              Become a partner
            </span>
            <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
          </a>
        </div>

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          {isEmpty ? "First six seats are open." : "Currently backed by."}
        </h2>

        <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          {isEmpty ? (
            <>
              We&rsquo;re building the founding partner cohort right now. Title,
              Operator, Builder, and Friend tiers are all open.{" "}
              <span className="font-medium text-ink">
                Be the first name on the page.
              </span>
            </>
          ) : (
            <>
              Companies and individuals already backing the work. Their names sit
              next to every chapter we run and every Shipathon we ship.
            </>
          )}
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p, i) => {
            const PartnerInner = (
              <>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  {p.tier}
                </span>
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="mt-4 max-h-12 w-auto self-start"
                  />
                ) : null}
                <span
                  className="mt-auto font-sans font-bold leading-[1] tracking-[-0.025em] text-ink"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.875rem)" }}
                >
                  {p.name}
                </span>
              </>
            );
            return (
              <li
                key={`${p.name}-${i}`}
                className="flex min-h-[180px] flex-col gap-3 bg-paper p-7 sm:p-8"
              >
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-3 transition-colors hover:text-ink"
                  >
                    {PartnerInner}
                  </a>
                ) : (
                  PartnerInner
                )}
              </li>
            );
          })}
          {Array.from({ length: empty }).map((_, i) => {
            const slotIdx = filled + i + 1;
            return (
              <li
                key={`empty-${i}`}
                className="group flex min-h-[180px] flex-col justify-between gap-3 bg-paper p-7 sm:p-8"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  Slot {String(slotIdx).padStart(2, "0")} · open
                </span>
                <a
                  href="#sponsors"
                  className="font-sans text-[16px] font-medium leading-snug text-ink-soft transition-colors group-hover:text-ink"
                >
                  Your name here.
                  <span aria-hidden className="ml-1 text-ink-mute">
                    &rarr;
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            {filled} of {PARTNER_SLOT_COUNT} founding seats filled
          </p>
          <Link
            href="/partners"
            className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
              View all partners
            </span>
            <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section id="sponsors" className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="03" label="Sponsors" />

        <h2
          className="mt-8 max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
        >
          Sponsor the next generation.
        </h2>

        <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          Year-one goal:{" "}
          <span className="font-medium text-ink">$30&ndash;40K raised</span>. The Shipathon, the chapter playbook, the global initiatives &mdash; none of it scales without partners. Sponsorship is structured to fit the support you can offer.
        </p>

        <div className="mt-14 divide-y divide-rule border-y border-rule">
          {TIERS.map((tier, i) => (
            <article
              key={tier.name}
              className={`grid grid-cols-1 items-start gap-x-12 gap-y-6 px-2 py-10 transition-colors sm:grid-cols-[220px_1fr_auto] sm:px-4 sm:py-12 ${
                tier.featured ? "bg-paper-2/60" : ""
              }`}
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  Tier {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="mt-3 font-sans font-bold tracking-[-0.03em] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)" }}
                >
                  {tier.name}
                </h3>
                <div className="mt-1 font-sans text-[20px] font-medium text-ink-soft">
                  {tier.amount}
                </div>
              </div>

              <div>
                <p className="font-sans text-[17px] font-medium leading-snug text-ink">
                  {tier.line}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.perks.map((p, j) => (
                    <li
                      key={j}
                      className="grid grid-cols-[16px_1fr] items-baseline gap-3 text-[15px] leading-relaxed text-ink-soft"
                    >
                      <span aria-hidden className="font-mono text-ink-mute">
                        /
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:pt-2">
                <a
                  href="#sponsor-contact"
                  className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
                    Start at {tier.name}
                  </span>
                  <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="#sponsor-deck"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Get the sponsor deck
            <ArrowSmall />
          </a>
          <a
            href="mailto:hello@launchpad.example"
            className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
              hello@launchpad.example
            </span>
            <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
          </a>
        </div>
      </div>
    </section>
  );
}

