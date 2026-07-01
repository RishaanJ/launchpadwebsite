import Link from "next/link";
import type { Metadata } from "next";
import {
  TopBar,
  Footer,
  SectionLabel,
  ArrowSmall,
} from "../_components/Chrome";

// Intentionally omitted from SEO / sitemap / robots — this route stays
// reachable via direct link, but is not surfaced for crawling until launch.
export const metadata: Metadata = {
  title: "Initiative — Launchpad",
  robots: { index: false, follow: false },
};

const PILLARS = [
  {
    n: "01",
    title: "Open-source curriculum",
    body: "The full Launchpad playbook — meeting structures, founder-talk frameworks, build-cycle templates — published free and translated.",
  },
  {
    n: "02",
    title: "Remote mentorship",
    body: "Pair teen builders with operators and founders for monthly 1:1s. Async-first so timezones don't block access.",
  },
  {
    n: "03",
    title: "Regional partners",
    body: "Work through existing youth orgs and community spaces in target regions so the program lives where the students already are.",
  },
  {
    n: "04",
    title: "Micro-grants",
    body: "Small unrestricted grants ($100–$1,000) for hosting fees, hardware, and travel so cost never decides who gets to ship.",
  },
];

const PHASES = [
  { n: "01", label: "Now", body: "Recruiting first regional partners + mentor cohort." },
  { n: "02", label: "Spring '27", body: "Pilot in 2 regions outside the Bay Area." },
  { n: "03", label: "EOY '27", body: "First wave of student-built products from the pilot, evaluated and shared." },
  { n: "04", label: "Long-term", body: "3+ active global initiatives. Funded through Title-tier sponsors and grants." },
];

export default function InitiativePage() {
  const year = new Date().getFullYear();

  return (
    <div className="relative bg-paper text-ink">
      <TopBar />

      <main>
        <Hero />
        <Why />
        <Pillars />
        <Roadmap />
        <Cta />
      </main>

      <Footer year={year} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule-soft bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="flex flex-col gap-4">
          <SectionLabel label="Global initiative" />
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-ink"
          >
            <span aria-hidden>&larr;</span>
            <span>Back to Launchpad</span>
          </Link>
        </div>

        <h1
          className="mt-10 max-w-[18ch] font-sans font-bold leading-[0.88] tracking-[-0.04em] text-ink"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            textWrap: "balance",
          }}
        >
          Most teen builders don&rsquo;t have a Launchpad nearby<span className="text-accent">.</span>
        </h1>

        <p
          className="mt-10 max-w-[58ch] font-sans font-medium leading-[1.25] tracking-[-0.015em] text-ink"
          style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)", textWrap: "balance" }}
        >
          So we&rsquo;re building one that travels — open curriculum, remote
          mentorship, and small grants for teen founders anywhere in the world.
        </p>

        <p className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          Bay Area students get product clubs, founder talks, and a culture of
          shipping by walking into the right hallway. Most don&rsquo;t.{" "}
          <span className="font-medium text-ink">
            Geography shouldn&rsquo;t decide whether a 16-year-old gets to start
            something.
          </span>{" "}
          The initiative is how we close the gap.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel label="Why" />

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <h2
            className="max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
          >
            The infrastructure isn&rsquo;t evenly distributed<span className="text-accent">.</span>
          </h2>

          <div>
            <p className="text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
              In one town, a high schooler can join three product clubs, attend a
              founder talk on a Tuesday, and apply to a hackathon every weekend.
              In another, the closest equivalent is a 4-hour drive — or
              doesn&rsquo;t exist at all.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
              Talent is everywhere. Permission to build isn&rsquo;t. The Launchpad
              chapter model handles the first problem; this initiative handles the
              one chapters can&rsquo;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel label="What we ship" />

        <h2
          className="mt-8 max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
        >
          Four pieces. Each useful on its own<span className="text-accent">.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-rule sm:grid-cols-2 sm:border-l">
          {PILLARS.map((p, i) => (
            <article
              key={p.n}
              className={`flex flex-col gap-4 border-b border-rule p-7 sm:p-10 ${
                i % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-ink-mute">
                {p.n} / 04
              </span>
              <h3
                className="font-sans font-bold leading-[1] tracking-[-0.03em] text-ink"
                style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
              >
                {p.title}
              </h3>
              <p className="max-w-[42ch] text-[15.5px] leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel label="Roadmap" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
        >
          What&rsquo;s next, in order<span className="text-accent">.</span>
        </h2>

        <ol className="mt-12 divide-y divide-rule border-y border-rule">
          {PHASES.map((phase) => (
            <li
              key={phase.n}
              className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[80px_180px_1fr] sm:items-baseline sm:gap-10 sm:py-7"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
                {phase.n}
              </span>
              <span className="font-sans text-[18px] font-semibold tracking-[-0.015em] text-ink">
                {phase.label}
              </span>
              <span className="text-[15.5px] leading-relaxed text-ink-soft">
                {phase.body}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel label="Get involved" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", textWrap: "balance" }}
        >
          Three ways in<span className="text-accent">.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-rule lg:grid-cols-3 lg:border-l">
          {[
            {
              kicker: "For founders & operators",
              title: "Mentor a teen builder.",
              body: "1 hour a month. Async-friendly. We pair you with a student in the pilot region.",
              cta: "Mentor",
              href: "mailto:hello@launchpad.example?subject=Initiative%20mentor",
            },
            {
              kicker: "For partners",
              title: "Bring it to your region.",
              body: "If you run a youth org or community space outside the Bay Area, we want to talk.",
              cta: "Partner with us",
              href: "mailto:hello@launchpad.example?subject=Initiative%20partner",
            },
            {
              kicker: "For funders",
              title: "Underwrite a micro-grant pool.",
              body: "Even $5K stretches across dozens of teen-built projects. Sponsor a region or a track.",
              cta: "Fund a region",
              href: "/#sponsors",
            },
          ].map((door, i, arr) => (
            <article
              key={door.title}
              className={`flex flex-col gap-6 border-b border-rule p-8 sm:p-10 ${
                i < arr.length - 1 ? "lg:border-r" : ""
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
                {door.kicker}
              </span>
              <h3
                className="font-sans font-bold leading-[0.95] tracking-[-0.035em] text-ink"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)" }}
              >
                {door.title}
              </h3>
              <p className="max-w-[40ch] text-[15.5px] leading-relaxed text-ink-soft">
                {door.body}
              </p>
              <div className="mt-auto pt-2">
                {door.href.startsWith("/") ? (
                  <Link
                    href={door.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-sans text-[14px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px"
                  >
                    {door.cta}
                    <ArrowSmall />
                  </Link>
                ) : (
                  <a
                    href={door.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-sans text-[14px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px"
                  >
                    {door.cta}
                    <ArrowSmall />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
