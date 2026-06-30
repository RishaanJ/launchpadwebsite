import Link from "next/link";
import type { Metadata } from "next";
import {
  TopBar,
  Footer,
  SectionLabel,
  ArrowSmall,
} from "../_components/Chrome";
import {
  Reveal,
  Stagger,
  ParallaxImage,
  ScaleOnScroll,
  ScrollPopIn,
  WordReveal,
  PhotoSlot,
  Annotation,
} from "../_components/Motion";
import { InteractiveTimeline } from "../_components/Timeline";
const FADE_LINES = [
  "The project gets pushed to GitHub.",
  "The presentation ends.",
  "The users never come.",
  "The product never grows.",
];

const TRUTH_LINES = [
  "It’s finding users.",
  "It’s talking to customers.",
  "It’s improving after launch.",
  "It’s learning why people buy, share, recommend, or ignore what you create.",
];

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

const FRAMEWORK: {
  n: string;
  word: string;
  lede: string;
  body: string;
  fileName: string;
  label: string;
}[] = [
  {
    n: "01",
    word: "Build",
    lede: "Identify meaningful problems and create thoughtful solutions.",
    body: "Whether software, hardware, AI, consumer products, or services, every great company begins with building.",
    fileName: "build.jpg",
    label: "Build night",
  },
  {
    n: "02",
    word: "Ship",
    lede: "Ideas don't change the world. Launched products do.",
    body: "Students learn how to publish, launch, gather feedback, and iterate quickly.",
    fileName: "ship.jpg",
    label: "First launch",
  },
  {
    n: "03",
    word: "Sell",
    lede: "A great product nobody knows about isn't enough.",
    body: "Launchpad teaches branding, storytelling, marketing, customer discovery, and distribution so products reach the people they're meant to help.",
    fileName: "sell.jpg",
    label: "Customer demo",
  },
  {
    n: "04",
    word: "Scale",
    lede: "Launching isn't the finish line.",
    body: "Students learn how to improve products through user feedback, analytics, iteration, partnerships, and long-term thinking.",
    fileName: "scale.jpg",
    label: "Growth review",
  },
];

const PROGRAMS: {
  n: string;
  title: string;
  body: string;
  fileName: string;
  label: string;
}[] = [
  {
    n: "01",
    title: "Chapters",
    body: "Student-led communities where builders collaborate on products, host workshops, invite founders, and learn together.",
    fileName: "chapter.jpg",
    label: "First AHS chapter meeting",
  },
  {
    n: "02",
    title: "Shipathons",
    body: "Launchpad's flagship event. Instead of building prototypes for judges alone, teams create products designed to be used by real people — building, validating, launching, and presenting products that continue beyond the competition.",
    fileName: "shipathon.jpg",
    label: "Shipathon teams in build mode",
  },
  {
    n: "03",
    title: "Founder Sessions",
    body: "Hear directly from founders, engineers, designers, marketers, investors, and creators about what it actually takes to build products that matter.",
    fileName: "founder-session.jpg",
    label: "Founder talk · Q&A",
  },
  {
    n: "04",
    title: "Builder Resources",
    body: "Members gain access to guides, playbooks, workshops, templates, and open-source curriculum covering every stage of product development.",
    fileName: "resources.jpg",
    label: "Playbook spread",
  },
];

const LONG_TERM: {
  phase: string;
  year: string;
  title: string;
  body: string;
}[] = [
  {
    phase: "Now",
    year: "FALL 2026",
    title: "Roots in the Bay Area",
    body: "AHS chapter plus the founding cohort, monthly meetings, founder talks, the first chapter-led builds.",
  },
  {
    phase: "Soon",
    year: "SPRING 2027",
    title: "Annual Shipathons",
    body: "The first Bay Area Shipathon. Teams ship real products in 2 weeks, in front of working founders and operators. Hybrid Event",
  },
  {
    phase: "Year 2",
    year: "WINTER 2027",
    title: "A nationwide chapter network",
    body: "4+ chapters across the country, each running monthly meetings, founder sessions, and chapter-led events.",
  },
  {
    phase: "Year 3",
    year: "SPRING 2028",
    title: "Open-source curriculum",
    body: "The full Launchpad playbook published freely. Educators, clubs, and partner orgs adopt and translate it.",
  },
  {
    phase: "Year 3",
    year: "SUMMER 2028",
    title: "Launchpad Atlas",
    body: "Launchpad Atlas operating in multiple regions outside the US, putting builder tools in underserved hands.",
  },
  {
    phase: "Long-term",
    year: "∞",
    title: "A generation of builders",
    body: "Launchpad alumni founding companies, nonprofits, open-source projects, and technology that improves people's lives.",
  },
];

export default function AboutPage() {
  const year = new Date().getFullYear();
  return (
    <div className="relative bg-paper text-ink">
      <TopBar />
      <main>
        <Hero />
        <FoundersNote />
        <Mission />
        <Different />
        <Framework />
        <WhatWeDo />
        <FirstCohort />
        <Vision />
        <Atlas />
        <LongTerm />
        <Join />
      </main>
      <Footer year={year} />
    </div>
  );
}

/* ------------------------------------ Hero ----------------------------------- */

function Hero() {
  return (
    <section className="relative border-b border-rule-soft bg-paper">
      <div className="relative mx-auto w-full max-w-[860px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute transition-colors hover:text-ink"
        >
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:-translate-x-0.5"
          >
            &larr;
          </span>
          <span>Back to Launchpad</span>
        </Link>

        <h1
          className="mt-14 font-sans font-bold leading-[0.86] tracking-[-0.04em] text-ink"
          style={{
            fontSize: "clamp(3rem, 9vw, 6.75rem)",
            textWrap: "balance",
          }}
        >
          <WordReveal text="Our story" /><span className="text-accent">.</span>
        </h1>

        <Reveal delay={0.15}>
          <p
            className="mt-12 max-w-[60ch] font-sans leading-[1.5] text-ink-soft"
            style={{
              fontSize: "clamp(1.0625rem, 1.25vw, 1.25rem)",
            }}
          >
            Every year, thousands of high school students spend weekends
            building incredible projects at hackathons, coding clubs, robotics
            competitions, and personal projects.
          </p>
        </Reveal>

        {/* The turn — one display beat, not gigantic */}
        <Reveal delay={0.25}>
          <p
            className="mt-10 font-sans font-bold leading-[1] tracking-[-0.03em] text-ink"
            style={{
              fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
              textWrap: "balance",
            }}
          >
            Then Monday comes<span className="text-accent">.</span>
          </p>
        </Reveal>

        {/* Fade cadence — italic, drifts in from right with subtle motion */}
        <div className="mt-10 space-y-2">
          {FADE_LINES.map((line, i) => (
            <ScrollPopIn
              key={line}
              from="right"
              distance={40}
              rotate={[0, 0]}
              scale={[1, 1]}
            >
              <p
                className="font-sans italic leading-[1.45] text-ink-soft"
                style={{
                  fontSize: "clamp(1.0625rem, 1.25vw, 1.25rem)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {line}
              </p>
            </ScrollPopIn>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p
            className="mt-16 max-w-[60ch] font-sans leading-[1.5] text-ink"
            style={{
              fontSize: "clamp(1.0625rem, 1.25vw, 1.25rem)",
            }}
          >
            We believe learning shouldn&rsquo;t stop once the prototype works.
            The hardest — and most valuable — part of building something
            isn&rsquo;t writing the first line of code.
          </p>
        </Reveal>

        {/* Truth cadence — bold, drifts in from left, opposite direction */}
        <div className="mt-10 space-y-2">
          {TRUTH_LINES.map((line) => (
            <ScrollPopIn
              key={line}
              from="left"
              distance={50}
              rotate={[0, 0]}
              scale={[1, 1]}
            >
              <p
                className="font-sans font-semibold leading-[1.4] text-ink"
                style={{
                  fontSize: "clamp(1.0625rem, 1.3vw, 1.3rem)",
                }}
              >
                {line}
              </p>
            </ScrollPopIn>
          ))}
        </div>

        {/* Closing — moderate weight, word-revealed for one final dramatic beat */}
        <ScaleOnScroll from={0.95}>
          <p
            className="mt-20 max-w-[20ch] font-sans font-bold leading-[1.02] tracking-[-0.035em] text-ink sm:mt-24"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              textWrap: "balance",
            }}
          >
            <WordReveal text="Launchpad exists to teach that missing half" /><span className="text-accent">.</span>
          </p>
        </ScaleOnScroll>
      </div>
    </section>
  );
}

/* --------------------------------- FoundersNote ------------------------------ */

function FoundersNote() {
  return (
    <section className="relative overflow-hidden border-t border-rule bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-16 gap-y-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        {/* Left: the note copy */}
        <div className="lg:order-1">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
              A note from the founder
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="mt-6 font-sans font-medium leading-[1.2] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                textWrap: "balance",
              }}
            >
              I started Launchpad because the program I wanted in high
              school didn&rsquo;t exist yet. So I&rsquo;m building it.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[58ch] text-[16px] leading-relaxed text-paper/75 sm:text-[17px]">
              You learn to code by writing code. You learn to build a company by
              building one. Every weekend, every chapter meeting, every
              Shipathon — that&rsquo;s the lesson plan.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.22em] text-paper/60">
              — Rishaan · Launchpad · AHS, Fremont
            </p>
          </Reveal>
        </div>

        {/* Right: pop-in photo with hand-drawn annotation */}
        <div className="relative lg:order-2 lg:pl-12">
          <ScrollPopIn
            from="right"
            distance={220}
            rotate={[12, -4]}
            scale={[0.82, 1]}
            className="origin-bottom-left mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]"
          >
            <div className="relative drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
              <div className="overflow-hidden rounded-[18px] ring-1 ring-paper/15">
                <div className="text-paper">
                  <PhotoSlot
                    src="/photos/founder-rishaan.png"
                    alt="Rishaan — Founder of Launchpad"
                    fileName="founder-rishaan.png"
                    label="Founder portrait — Rishaan"
                    aspectRatio="4 / 5"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollPopIn>

          <Annotation
            text={
              <>
                hi, that&rsquo;s me{" "}
                <span className="font-bold">Rishaan</span>
              </>
            }
            variant="up-right"
            side="below"
            arrowSize={160}
            strokeWidth={2.8}
            className="mt-4 ml-2 text-paper sm:ml-6 lg:absolute lg:-bottom-14 lg:left-[-4rem] lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Mission ---------------------------------- */

function Mission() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="01" label="Mission" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal delay={0.05}>
            <h2
              className="max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                textWrap: "balance",
              }}
            >
              Build the next generation of builders<span className="text-accent">.</span>
            </h2>
          </Reveal>

          <Stagger className="space-y-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
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
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Different --------------------------------- */

function Different() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="02" label="What makes us different" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            Most organizations focus on one piece of the puzzle<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            Launchpad combines engineering, design, product thinking, marketing,
            and entrepreneurship into one experience —{" "}
            <span className="font-medium text-ink">
              because building something people love requires all of them.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
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
            <div className="grid grid-cols-2 gap-px border-t border-rule bg-rule">
              {COMPARISON.flatMap((row, i) => [
                <div
                  key={`t-${i}`}
                  className="bg-paper px-5 py-5 text-[15.5px] leading-relaxed text-ink-soft sm:px-8 sm:py-6 sm:text-[16px]"
                >
                  {row.traditional}
                </div>,
                <div
                  key={`l-${i}`}
                  className="bg-paper px-5 py-5 text-[15.5px] font-medium leading-relaxed text-ink sm:px-8 sm:py-6 sm:text-[16px]"
                >
                  {row.launchpad}
                </div>,
              ])}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Framework --------------------------------- */

function Framework() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="03" label="The Launchpad Framework" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            Four stages. In order. Always<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
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
        </Stagger>
      </div>
    </section>
  );
}

/* --------------------------------- WhatWeDo ---------------------------------- */

function WhatWeDo() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="04" label="What we do" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            Four programs. One mission<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-24">
          {PROGRAMS.map((p, i) => (
            <ProgramRow key={p.n} program={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramRow({
  program,
  index,
}: {
  program: (typeof PROGRAMS)[number];
  index: number;
}) {
  const flip = index % 2 === 1;
  const rotateRange: [number, number] = flip ? [-6, 3] : [6, -3];
  return (
    <article
      className={`grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2 lg:items-center ${
        flip ? "lg:[&>:first-child]:order-2" : ""
      }`}
    >
      <ScrollPopIn
        from={flip ? "left" : "right"}
        distance={180}
        rotate={rotateRange}
        scale={[0.9, 1]}
        className={flip ? "origin-bottom-right" : "origin-bottom-left"}
      >
        <div className="overflow-hidden rounded-[14px] ring-1 ring-rule">
          <PhotoSlot
            fileName={program.fileName}
            label={program.label}
            aspectRatio="4 / 3"
          />
        </div>
      </ScrollPopIn>
      <div>
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
            {program.n} · {program.title}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h3
            className="mt-4 font-sans font-bold leading-[1] tracking-[-0.03em] text-ink"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            {program.title}.
          </h3>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
            {program.body}
          </p>
        </Reveal>
      </div>
    </article>
  );
}

/* ------------------------------- FirstCohort -------------------------------- */

function FirstCohort() {
  return (
    <section className="relative border-t border-rule bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
            The first cohort
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-6 max-w-[18ch] font-sans font-bold leading-[0.95] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              textWrap: "balance",
            }}
          >
            The names that will be on the page forever<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <ScrollPopIn
            from="bottom"
            distance={120}
            rotate={[-3, 1.5]}
            scale={[0.94, 1]}
            className="origin-bottom"
          >
            <div className="overflow-hidden rounded-[18px] ring-1 ring-paper/15 drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
              <div className="text-paper">
                <PhotoSlot
                  fileName="first-cohort.jpg"
                  label="First cohort group photo"
                  caption="AHS chapter · Founding cohort · 2026"
                  aspectRatio="16 / 9"
                />
              </div>
            </div>
          </ScrollPopIn>

          <Annotation
            text="the og crew. everything starts here."
            variant="down-left"
            side="above"
            arrowSize={160}
            strokeWidth={2.8}
            className="mt-6 ml-auto mr-2 max-w-[24ch] text-right text-paper sm:mr-8 lg:absolute lg:right-12 lg:top-6 lg:mt-0"
          />
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-4">
          {[
            { value: "12", label: "Founding members" },
            { value: "01", label: "Active chapter" },
            { value: "04", label: "Workshops shipped" },
            { value: "∞", label: "Will-build energy" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 bg-ink p-6 sm:p-8"
            >
              <span
                className="font-sans font-bold leading-none tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-paper/55">
                {stat.label}
              </span>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ----------------------------------- Vision ---------------------------------- */

function Vision() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="05" label="Vision" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            <WordReveal text="Talent is everywhere. Opportunity isn't" /><span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
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
        </Stagger>
      </div>
    </section>
  );
}

/* ----------------------------------- Atlas ---------------------------------- */

function Atlas() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="06" label="Launchpad Atlas" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[20ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            Expanding opportunity beyond geography<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:items-start">
          <Stagger className="space-y-5 text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
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
          </Stagger>

          <Reveal delay={0.15}>
            <ul className="space-y-3 border-y border-rule py-6 font-sans text-[15.5px] text-ink-soft">
              {[
                "Open-source curriculum",
                "Remote mentorship",
                "Regional partnerships",
                "Micro-grants",
                "Community-led chapters",
              ].map((line, i) => (
                <li
                  key={line}
                  className="grid grid-cols-[36px_1fr] items-baseline gap-3"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                    0{i + 1}
                  </span>
                  <span className="text-ink">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <Link
              href="/initiative"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Read the full Atlas brief
              <ArrowSmall />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- LongTerm --------------------------------- */

function LongTerm() {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="07" label="Long-term vision" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            We&rsquo;re just getting started<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            Over the coming years, we&rsquo;re working toward:
          </p>
        </Reveal>

        <InteractiveTimeline items={LONG_TERM} />
      </div>
    </section>
  );
}

/* ------------------------------------ Join ----------------------------------- */

function Join() {
  return (
    <section className="relative overflow-hidden border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionLabel n="08" label="Join the movement" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 max-w-[20ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              textWrap: "balance",
            }}
          >
            Launchpad isn&rsquo;t a club you attend once a month<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            It&rsquo;s a community for students who want to build things that
            matter. Whether you&rsquo;re an engineer, designer, marketer,
            founder, writer, artist, or simply someone with ideas worth
            pursuing,{" "}
            <span className="font-medium text-ink">
              there&rsquo;s a place for you here.
            </span>
          </p>
        </Reveal>

        <Stagger
          className="mt-14 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-sans font-bold tracking-[-0.04em] text-ink"
          step={0.12}
        >
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Build.</span>
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Ship.</span>
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Sell.</span>
          <span style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Scale<span className="text-accent">.</span>
          </span>
        </Stagger>

        <Reveal delay={0.2}>
          <p
            className="mt-8 max-w-[28ch] font-sans font-bold leading-[1.05] tracking-[-0.03em] text-ink"
            style={{
              fontSize: "clamp(1.625rem, 2.6vw, 2.5rem)",
              textWrap: "balance",
            }}
          >
            The next generation of builders starts here<span className="text-accent">.</span>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
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
        </Reveal>
      </div>
    </section>
  );
}
