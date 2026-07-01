import Image from "next/image";
import Link from "next/link";

export const NAV: { label: string; href: string }[] = [
  { label: "About", href: "/#about" },
  { label: "Partners", href: "/#partners" },
  { label: "Sponsors", href: "/#sponsors" },
];

type ArrowSmallProps = {
  className?: string;
  direction?: "left" | "right";
};

export function ArrowSmall({
  className = "",
  direction = "right",
}: ArrowSmallProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out ${
        direction === "right"
          ? "group-hover:translate-x-0.5"
          : "group-hover:-translate-x-0.5"
      } ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "right" ? (
        <>
          <path d="M3 8h10" />
          <path d="M9 4l4 4-4 4" />
        </>
      ) : (
        <>
          <path d="M13 8H3" />
          <path d="M7 4 3 8l4 4" />
        </>
      )}
    </svg>
  );
}

export function SectionLabel({label }: {label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute">
      <span>{label}</span>
    </div>
  );
}

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule-soft bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Launchpad — home" className="flex items-center gap-3">
          <Image
            src="/Icon.png"
            alt="Launchpad"
            width={45}
            height={45}
            priority
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: 45,
            }}
          />
        </Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-1 rounded-full border border-rule bg-paper-2 p-1">
            {NAV.map((item) => {
              const isInternal = item.href.startsWith("/") && !item.href.startsWith("/#");
              const className =
                "rounded-full px-4 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:bg-paper hover:text-ink";
              return (
                <li key={item.label}>
                  {isInternal ? (
                    <Link href={item.href} className={className}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={className}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <a
          href="/#apply"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-transform duration-300 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          Apply
          <ArrowSmall />
        </a>
      </div>
    </header>
  );
}

export function Footer({ year }: { year: number }) {
  return (
    <footer className="relative border-t border-rule bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="font-sans font-bold leading-[0.84] tracking-[-0.045em]"
              style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            >
              Launchpad<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-[44ch] font-sans text-[16px] leading-relaxed text-paper/70">
              A student-led nonprofit teaching high schoolers to build real
              products, launch them into real markets, and run real organizations.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
              Get on the list
            </p>
            <a
              href="mailto:hello@launchpad.example"
              className="group inline-flex items-center gap-2 rounded-full border border-paper/25 bg-transparent px-5 py-3 font-sans text-[15px] font-medium text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              hello@launchpad.example
              <ArrowSmall />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/15 pt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Launchpad · 501(c)(3) pending</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <a className="transition-colors hover:text-paper" href="#instagram">
                Instagram
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-paper" href="#linkedin">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-paper" href="#press">
                Press
              </a>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-paper"
                href="/initiative"
              >
                Initiative
              </Link>
            </li>
            <li>
              <a
                className="transition-colors hover:text-paper"
                href="mailto:hello@launchpad.example"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
