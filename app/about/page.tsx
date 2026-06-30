import Link from "next/link";
import type { Metadata } from "next";
import {
  TopBar,
  Footer,
  SectionLabel,
  ArrowSmall,
} from "../_components/Chrome";

export const metadata: Metadata = {
  title: "About Launchpad",
  description:
    "The high school product development network. We teach students to build, ship, sell, and scale products that reach real people.",
};

const COMPARISON: { traditional: string; launchpad: string }[] = [
  { traditional: "Learn to code", launchpad: "Build complete products" },
  { traditional: "Pitch ideas", launchpad: "Launch real products" },
  { traditional: "Win competitions", launchpad: "Grow users and impact" },
  { traditional: "Finish projects", launchpad: "Continue improving them" },
  {
    traditional: "Learn one discipline",
    launchpad: "Learn the full product lifecycle",
  },
];

const FRAMEWORK: { n: string; word: string; lede: string; body: string }[] = [
  {
    n: "01",
    word: "Build",
    lede: "Identify meaningful problems and create thoughtful solutions.",
    body: "Whether software, hardware, AI, consumer products, or services, every great company begins with building.",
  },
  {
    n: "02",
    word: "Ship",
    lede: "Ideas don't change the world. Launched products do.",
    body: "Students learn how to publish, launch, gather feedback, and iterate quickly.",
  },
  {
    n: "03",
    word: "Sell",
    lede: "A great product nobody knows about isn't enough.",
    body: "Launchpad teaches branding, storytelling, marketing, customer discovery, and distribution so products reach the people they're meant to help.",
  },
  {
    n: "04",
    word: "Scale",
    lede: "Launching isn't the finish line.",
    body: "Students learn how to improve products through user feedback, analytics, iteration, partnerships, and long-term thinking.",
  },
];

const PROGRAMS: { n: string; title: string; body: string }[] = [
  {
    n: "01",
    title: "Chapters",
    body: "Student-led communities where builders collaborate on products, host workshops, invite founders, and learn together.",
  },
  {
    n: "02",
    title: "Shipathons",
    body: "Launchpad's flagship event. Instead of building prototypes for judges alone, teams create products designed to be used by real people — building, validating, launching, and presenting products that continue beyond the competition.",
  },
  {
    n: "03",
    title: "Founder Sessions",
    body: "Hear directly from founders, engineers, designers, marketers, investors, and creators about what it actually takes to build products that matter.",
  },
  {
    n: "04",
    title: "Builder Resources",
    body: "Members gain access to guides, playbooks, workshops, templates, and open-source curriculum covering every stage of product development.",
  },
];

const LONG_TERM = [
  "A nationwide chapter network",
  "Annual Shipathons",
  "Global initiatives that create lasting impact",
  "Open-source product development curriculum",
  "Thousands of student-built products",
  "A generation of builders creating companies, nonprofits, open-source software, and technology that improves people's lives",
];

export default function AboutPage() {
  const year = new Date().getFullYear();
  return (
    <div className="relative bg-paper text-ink">
      <TopBar />
      <main>
        <Hero />
        <Mission />
        <Different />
        <Framework />
        <WhatWeDo />
        <Vision />
        <Atlas />
        <LongTerm />
        <Join />
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
          <SectionLabel n="00" label="About" />
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-ink"
          >
            <span aria-hidden>&larr;</span>
            <span>Back to Launchpad</span>
          </Link>
        </div>

        <h1
          className="mt-10 max-w-[20ch] font-sans font-bold leading-[0.88] tracking-[-0.04em] text-ink"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            textWrap: "balance",
          }}
        >
          Our story.
        </h1>

        <p
          className="mt-10 max-w-[58ch] font-sans font-medium leading-[1.25] tracking-[-0.015em] text-ink"
          style={{
            fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)",
            textWrap: "balance",
          }}
        >
          Every year, thousands of high school students spend weekends building
          incredible projects at hackathons, coding clubs, robotics
          competitions, and personal projects. Then Monday comes.
        </p>

        <div className="mt-10 max-w-[58ch] space-y-3 font-sans text-[18px] leading-relaxed text-ink-soft">
          <p>The project gets pushed to GitHub.</p>
          <p>The presentation ends.</p>
          <p>The users never come.</p>
          <p>The product never grows.</p>
        </div>

        <p className="mt-10 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          We believe learning shouldn&rsquo;t stop once the prototype works. The
          hardest — and most valuable — part of building something isn&rsquo;t
          writing the first line of code.
        </p>

        <div className="mt-10 max-w-[60ch] space-y-3 font-sans text-[18px] leading-relaxed text-ink">
          <p>It&rsquo;s finding users.</p>
          <p>It&rsquo;s talking to customers.</p>
          <p>It&rsquo;s improving after launch.</p>
          <p>
            It&rsquo;s learning why people buy, share, recommend, or ignore what
            you create.
          </p>
        </div>

        <p
          className="mt-12 max-w-[28ch] font-sans font-bold leading-[1.05] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", textWrap: "balance" }}
        >
          Launchpad exists to teach that missing half.
        </p>

        <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          We&rsquo;re building a community where students don&rsquo;t just learn
          how to build products — they learn how to launch them into the world.
        </p>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="01" label="Mission" />

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <h2
            className="max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            Build the next generation of builders.
          </h2>

          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            <p>
              Our mission is to build the next generation of builders by giving
              high school students the community, mentorship, and opportunities
              to create products that solve real problems.
            </p>
            <p>
              We believe students are capable of far more than classroom
              assignments, hypothetical business plans, or one-weekend hackathon
              projects.
            </p>
            <p className="font-medium text-ink">
              They deserve the opportunity to build something that lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Different() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="02" label="What makes us different" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Most organizations focus on one piece of the puzzle.
        </h2>

        <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          Launchpad combines engineering, design, product thinking, marketing,
          and entrepreneurship into one experience —{" "}
          <span className="font-medium text-ink">
            because building something people love requires all of them.
          </span>
        </p>

        <div className="mt-14 overflow-hidden border border-rule">
          <div className="grid grid-cols-2 gap-px bg-rule">
            <div className="bg-paper-2 px-5 py-4 sm:px-8 sm:py-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                Traditional programs
              </span>
            </div>
            <div className="bg-paper-2 px-5 py-4 sm:px-8 sm:py-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                Launchpad
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-rule border-t border-rule">
            {COMPARISON.flatMap((row, i) => [
              <div
                key={`t-${i}`}
                className="bg-paper px-5 py-5 text-[15.5px] leading-relaxed text-ink-soft sm:px-8 sm:py-6 sm:text-[16px]"
              >
                {row.traditional}
              </div>,
              <div
                key={`l-${i}`}
                className="bg-paper px-5 py-5 font-medium text-[15.5px] leading-relaxed text-ink sm:px-8 sm:py-6 sm:text-[16px]"
              >
                {row.launchpad}
              </div>,
            ])}
          </div>
        </div>
      </div>
    </section>
  );
}

function Framework() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="03" label="The Launchpad Framework" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Four stages. In order. Always.
        </h2>

        <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          Everything we do revolves around four stages of building a real
          product that reaches real people.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
          {FRAMEWORK.map((f) => (
            <article
              key={f.word}
              className="flex flex-col gap-5 bg-paper p-7 sm:p-10"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.24em] text-ink-mute">
                {f.n} / 04
              </span>
              <h3
                className="font-sans font-bold leading-none tracking-[-0.04em] text-ink"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
              >
                {f.word}
                <span className="text-accent">.</span>
              </h3>
              <p className="font-sans text-[17px] font-medium leading-snug text-ink">
                {f.lede}
              </p>
              <p className="text-[15.5px] leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="04" label="What we do" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Four programs. One mission.
        </h2>

        <ol className="mt-14 divide-y divide-rule border-y border-rule">
          {PROGRAMS.map((p) => (
            <li
              key={p.n}
              className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-10 sm:py-9"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
                {p.n}
              </span>
              <h3
                className="font-sans font-bold leading-[1] tracking-[-0.025em] text-ink"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.875rem)" }}
              >
                {p.title}
              </h3>
              <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-ink-soft sm:text-[16px]">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="05" label="Vision" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Talent is everywhere. Opportunity isn&rsquo;t.
        </h2>

        <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          <p>
            We imagine a future where every ambitious student has access to
            opportunities that currently exist only in a handful of schools and
            communities.
          </p>
          <p className="font-medium text-ink">
            Launchpad is working to change that.
          </p>
          <p>
            Through local chapters, online resources, mentorship, and global
            initiatives, we&rsquo;re building an ecosystem where students can
            learn, collaborate, and launch products regardless of where they
            live.
          </p>
        </div>
      </div>
    </section>
  );
}

function Atlas() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="06" label="Launchpad Atlas" />

        <h2
          className="mt-8 max-w-[20ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Expanding opportunity beyond geography.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:items-start">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            <p>
              Some students grow up surrounded by startup founders, engineering
              clubs, hackathons, and mentors. Others have none of those
              opportunities.{" "}
              <span className="font-medium text-ink">
                Launchpad Atlas exists to close that gap.
              </span>
            </p>
            <p>
              Atlas is our long-term initiative dedicated to bringing product
              education to underserved students around the world. Talent
              shouldn&rsquo;t depend on your ZIP code.
            </p>
          </div>

          <ul className="space-y-3 border-y border-rule py-6 font-sans text-[15.5px] text-ink-soft">
            {[
              "Open-source curriculum",
              "Remote mentorship",
              "Regional partnerships",
              "Micro-grants",
              "Community-led chapters",
            ].map((line, i) => (
              <li key={line} className="grid grid-cols-[36px_1fr] items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  0{i + 1}
                </span>
                <span className="text-ink">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Link
            href="/initiative"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Read the full Atlas brief
            <ArrowSmall />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LongTerm() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="07" label="Long-term vision" />

        <h2
          className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          We&rsquo;re just getting started.
        </h2>

        <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          Over the coming years, we&rsquo;re working toward:
        </p>

        <ol className="mt-12 divide-y divide-rule border-y border-rule">
          {LONG_TERM.map((item, i) => (
            <li
              key={item}
              className="grid grid-cols-[44px_1fr] items-baseline gap-4 py-5 sm:py-6"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="font-sans font-medium leading-snug tracking-[-0.015em] text-ink"
                style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)" }}
              >
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="08" label="Join the movement" />

        <h2
          className="mt-8 max-w-[20ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Launchpad isn&rsquo;t a club you attend once a month.
        </h2>

        <p className="mt-8 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
          It&rsquo;s a community for students who want to build things that
          matter. Whether you&rsquo;re an engineer, designer, marketer, founder,
          writer, artist, or simply someone with ideas worth pursuing,{" "}
          <span className="font-medium text-ink">
            there&rsquo;s a place for you here.
          </span>
        </p>

        <div className="mt-14 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-sans font-bold tracking-[-0.04em] text-ink">
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Build.</span>
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Ship.</span>
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Sell.</span>
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Scale<span className="text-accent">.</span>
          </span>
        </div>

        <p
          className="mt-8 max-w-[28ch] font-sans font-bold leading-[1.05] tracking-[-0.03em] text-ink"
          style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.5rem)", textWrap: "balance" }}
        >
          The next generation of builders starts here.
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a
            href="#apply"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Apply to Launchpad
            <ArrowSmall />
          </a>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
              Back to the homepage
            </span>
            <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
          </Link>
        </div>
      </div>
    </section>
  );
}
