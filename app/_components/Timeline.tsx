"use client";

import { motion, useScroll, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

export type TimelineItem = {
  phase: string;
  year: string;
  title: string;
  body: string;
};

export function InteractiveTimeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={containerRef} className="relative mt-16">
      {/* Track — full hairline */}
      <div
        aria-hidden
        className="absolute left-[14px] top-3 bottom-3 w-px bg-rule sm:left-[22px]"
      />
      {/* Track — filled progress, scales as you scroll the section */}
      <motion.div
        aria-hidden
        className="absolute left-[14px] top-3 bottom-3 w-px origin-top bg-ink sm:left-[22px]"
        style={{ scaleY: prefersReduced ? 1 : scrollYProgress }}
      />

      <ol className="relative space-y-12 sm:space-y-16">
        {items.map((item, i) => (
          <TimelineRow key={item.title} item={item} index={i} total={items.length} />
        ))}
      </ol>
    </div>
  );
}

function TimelineRow({
  item,
  index,
  total,
}: {
  item: TimelineItem;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
    once: false,
  });
  const [hovering, setHovering] = useState(false);
  const active = isInView || hovering;

  return (
    <li
      ref={ref}
      className="relative pl-12 sm:pl-20"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Marker dot — sits on the timeline track */}
      <motion.div
        aria-hidden
        className="absolute left-[6px] top-3 grid h-[18px] w-[18px] place-items-center rounded-full sm:left-[14px] sm:h-[20px] sm:w-[20px]"
        animate={{
          backgroundColor: active ? "var(--ink)" : "var(--paper-2)",
          borderColor: active ? "var(--ink)" : "var(--rule)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ borderWidth: 2, borderStyle: "solid" }}
      >
        {active ? (
          <motion.span
            aria-hidden
            className="h-[6px] w-[6px] rounded-full bg-accent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : null}
      </motion.div>

      {/* Phase / year kicker */}
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          {String(index + 1).padStart(2, "0")} / {total.toString().padStart(2, "0")}
        </span>
        <span aria-hidden className="h-px w-6 bg-rule" />
        <motion.span
          animate={{ color: active ? "var(--ink)" : "var(--ink-mute)" }}
          transition={{ duration: 0.3 }}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.22em]"
        >
          {item.phase} · {item.year}
        </motion.span>
      </div>

      {/* Title */}
      <motion.h3
        animate={{
          color: active ? "var(--ink)" : "var(--ink-soft)",
        }}
        transition={{ duration: 0.35 }}
        className="mt-4 max-w-[24ch] font-sans font-semibold leading-[1.05] tracking-[-0.025em]"
        style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.125rem)" }}
      >
        {item.title}
      </motion.h3>

      {/* Body */}
      <p className="mt-3 max-w-[58ch] text-[15.5px] leading-relaxed text-ink-soft sm:text-[16px]">
        {item.body}
      </p>
    </li>
  );
}
