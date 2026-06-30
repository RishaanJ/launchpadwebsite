import Link from "next/link";
import type { Metadata } from "next";
import {
  TopBar,
  Footer,
  SectionLabel,
  ArrowSmall,
} from "../_components/Chrome";
import {
  PARTNERS,
  TIER_ORDER,
  TIER_AMOUNTS,
  type PartnerTier,
} from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners — Launchpad",
  description:
    "Companies and individuals backing Launchpad. Title, Operator, Builder, and Friend tiers — the people putting weight behind the next generation of high school builders.",
};

export default function PartnersPage() {
  const year = new Date().getFullYear();
  const grouped = groupByTier(PARTNERS);
  const total = PARTNERS.length;

  return (
    <div className="relative bg-paper text-ink">
      <TopBar />

      <main>
        <Hero total={total} />
        {total === 0 ? <EmptyState /> : <Roster grouped={grouped} />}
        <CtaBlock />
      </main>

      <Footer year={year} />
    </div>
  );
}

function groupByTier(partners: typeof PARTNERS) {
  const groups: Record<PartnerTier, typeof PARTNERS> = {
    Title: [],
    Operator: [],
    Builder: [],
    Friend: [],
  };
  for (const p of partners) {
    groups[p.tier].push(p);
  }
  return groups;
}

function Hero({ total }: { total: number }) {
  return (
    <section className="relative overflow-hidden border-b border-rule-soft bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
        <div className="flex flex-col gap-4">
          <SectionLabel n="00" label="Partners" />
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
          {total === 0
            ? <>Founding partner cohort opens here<span className="text-accent">.</span></>
            : <>The people backing Launchpad<span className="text-accent">.</span></>}
        </h1>

        <p
          className="mt-10 max-w-[58ch] font-sans font-medium leading-[1.25] tracking-[-0.015em] text-ink"
          style={{
            fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)",
            textWrap: "balance",
          }}
        >
          {total === 0 ? (
            <>
              Title, Operator, Builder, and Friend tiers are all open. Every
              partner shapes what the first cohort becomes — and gets credited on
              every chapter, every Shipathon, every shipped product.
            </>
          ) : (
            <>
              Companies and people who chose to back high school builders before
              the easy proof points existed.
            </>
          )}
        </p>
      </div>
    </section>
  );
}

function EmptyState() {
  const tiers = TIER_ORDER.map((tier) => ({
    tier,
    amount: TIER_AMOUNTS[tier],
  }));

  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="01" label="Tiers" />

        <h2
          className="mt-8 max-w-[16ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            textWrap: "balance",
          }}
        >
          Pick a seat. We&rsquo;ll put your name on it<span className="text-accent">.</span>
        </h2>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <li
              key={t.tier}
              className="flex min-h-[260px] flex-col justify-between gap-6 bg-paper p-7 sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  Tier 0{TIER_ORDER.length - i}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  Open
                </span>
              </div>
              <div>
                <h3
                  className="font-sans font-bold leading-none tracking-[-0.03em] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)" }}
                >
                  {t.tier}
                </h3>
                <div className="mt-2 font-sans text-[18px] font-medium text-ink-soft">
                  {t.amount}
                </div>
              </div>
              <Link
                href="/#sponsors"
                className="group inline-flex items-center gap-2 self-start font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
                  Take this seat
                </span>
                <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Roster({
  grouped,
}: {
  grouped: ReturnType<typeof groupByTier>;
}) {
  return (
    <section className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel n="01" label="Roster" />

        <div className="mt-12 flex flex-col gap-20">
          {TIER_ORDER.map((tier, idx) => {
            const members = grouped[tier];
            if (members.length === 0) return null;
            return (
              <TierGroup
                key={tier}
                tier={tier}
                index={idx}
                members={members}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TierGroup({
  tier,
  index,
  members,
}: {
  tier: PartnerTier;
  index: number;
  members: typeof PARTNERS;
}) {
  return (
    <div>
      <div className="flex flex-col items-start gap-3 border-b border-rule pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
            0{TIER_ORDER.length - index} · {tier}
          </span>
          <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-mute">
            {TIER_AMOUNTS[tier]}+
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          {members.length} {members.length === 1 ? "partner" : "partners"}
        </span>
      </div>

      <ul className="mt-px grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {members.map((p) => {
          const inner = (
            <>
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-14 w-auto self-start"
                />
              ) : null}
              <h3
                className="font-sans font-bold leading-[0.95] tracking-[-0.025em] text-ink"
                style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
              >
                {p.name}
              </h3>
              {p.blurb ? (
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>
              ) : null}
              {p.since ? (
                <span className="mt-auto font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                  Since {p.since}
                </span>
              ) : null}
            </>
          );
          return (
            <li
              key={p.name}
              className="flex min-h-[220px] flex-col gap-4 bg-paper p-7 sm:p-8"
            >
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col gap-4 transition-colors hover:text-ink"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CtaBlock() {
  return (
    <section className="relative border-t border-rule bg-paper">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionLabel n="02" label="Join" />
            <h2
              className="mt-6 max-w-[18ch] font-sans font-bold leading-[0.92] tracking-[-0.035em] text-ink"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                textWrap: "balance",
              }}
            >
              Put your name next to the work<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-[56ch] text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
              Tier overview, benefits, and the contact path all live on the home
              page.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/#sponsors"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-[15px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              See the tiers
              <ArrowSmall />
            </Link>
            <a
              href="mailto:hello@launchpad.example?subject=Partnership"
              className="group inline-flex items-center justify-center gap-2 font-sans text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <span className="border-b border-rule pb-px transition-colors group-hover:border-ink">
                hello@launchpad.example
              </span>
              <ArrowSmall className="text-ink-mute transition-colors group-hover:text-ink" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
