"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, type CSSProperties, type ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Reveal — fade + rise into view once                                        */
/* -------------------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "p" | "h2" | "h3" | "span";
}) {
  const prefersReduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={prefersReduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/* Stagger — fade up each child with a stagger                                */
/* -------------------------------------------------------------------------- */

export function Stagger({
  children,
  className = "",
  step = 0.08,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  y?: number;
}) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: prefersReduced ? 0 : step } },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: prefersReduced ? {} : { opacity: 0, y },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* ParallaxImage — image whose Y position drifts with scroll                  */
/* -------------------------------------------------------------------------- */

export function ParallaxImage({
  children,
  range = 80,
  className = "",
  style,
}: {
  children: ReactNode;
  range?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div style={{ y: prefersReduced ? 0 : y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* ScaleOnScroll — element scales up as it enters view                        */
/* -------------------------------------------------------------------------- */

export function ScaleOnScroll({
  children,
  from = 0.9,
  to = 1,
  className = "",
}: {
  children: ReactNode;
  from?: number;
  to?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [from, to]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? undefined : { scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* WordReveal — splits string into words that fade up with stagger            */
/* -------------------------------------------------------------------------- */

export function WordReveal({
  text,
  className = "",
  step = 0.04,
}: {
  text: string;
  className?: string;
  step?: number;
}) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: prefersReduced ? 0 : step } },
      }}
      className={className}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block whitespace-pre"
          variants={{
            hidden: prefersReduced ? {} : { opacity: 0, y: "0.4em" },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* ScrollPopIn — multi-transform entry tied to scroll progress                */
/* -------------------------------------------------------------------------- */

type Direction = "left" | "right" | "bottom" | "top";

export function ScrollPopIn({
  children,
  from = "right",
  distance = 160,
  rotate = [6, -3],
  scale = [0.9, 1],
  className = "",
}: {
  children: ReactNode;
  from?: Direction;
  distance?: number;
  rotate?: [number, number];
  scale?: [number, number];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 55%"],
  });

  const xStart =
    from === "right" ? distance : from === "left" ? -distance : 0;
  const yStart =
    from === "bottom" ? distance : from === "top" ? -distance : 0;

  const x = useTransform(scrollYProgress, [0, 1], [xStart, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [yStart, 0]);
  const rotateV = useTransform(scrollYProgress, [0, 1], rotate);
  const scaleV = useTransform(scrollYProgress, [0, 1], scale);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.25, 1]);

  return (
    <motion.div
      ref={ref}
      style={
        prefersReduced
          ? undefined
          : { x, y, rotate: rotateV, scale: scaleV, opacity }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* HandDrawnArrow — slightly imperfect SVG arrow with several curve variants  */
/* -------------------------------------------------------------------------- */

type ArrowVariant =
  | "up-right"
  | "up-left"
  | "down-right"
  | "down-left"
  | "right"
  | "left";

const ARROW_PATHS: Record<ArrowVariant, { d: string; head: string }> = {
  // Curve sweeps UP and to the RIGHT, head pointing up-right.
  "up-right": {
    d: "M 8 92 C 22 78, 18 60, 36 50 S 70 34, 92 12",
    head: "M 92 12 L 84 14 M 92 12 L 90 22",
  },
  // Sweeps UP and LEFT, head pointing up-left.
  "up-left": {
    d: "M 92 92 C 78 78, 82 60, 64 50 S 30 34, 8 12",
    head: "M 8 12 L 16 14 M 8 12 L 10 22",
  },
  // Sweeps DOWN and RIGHT.
  "down-right": {
    d: "M 8 12 C 22 28, 18 48, 36 58 S 70 78, 92 92",
    head: "M 92 92 L 84 92 M 92 92 L 90 84",
  },
  // Sweeps DOWN and LEFT.
  "down-left": {
    d: "M 92 12 C 78 28, 82 48, 64 58 S 30 78, 8 92",
    head: "M 8 92 L 16 92 M 8 92 L 10 84",
  },
  right: {
    d: "M 6 50 C 28 38, 50 62, 92 50",
    head: "M 92 50 L 84 46 M 92 50 L 84 56",
  },
  left: {
    d: "M 94 50 C 72 38, 50 62, 8 50",
    head: "M 8 50 L 16 46 M 8 50 L 16 56",
  },
};

export function HandDrawnArrow({
  variant = "up-right",
  className = "",
  size = 120,
  strokeWidth = 2.4,
}: {
  variant?: ArrowVariant;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const { d, head } = ARROW_PATHS[variant];
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} pathLength={1} />
      <path d={head} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Annotation — handwritten-feel caption + drawn arrow, reveals on scroll     */
/* -------------------------------------------------------------------------- */

export function Annotation({
  text,
  variant = "up-right",
  className = "",
  side = "below",
  arrowSize = 140,
  strokeWidth = 2.6,
  delay = 0.15,
}: {
  text: ReactNode;
  variant?: ArrowVariant;
  className?: string;
  side?: "below" | "above" | "left" | "right";
  arrowSize?: number;
  strokeWidth?: number;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  // Direction of the small label entrance — opposite of where the arrow points
  const labelEnter = (() => {
    if (variant === "up-right" || variant === "right") return { x: -18, y: 10 };
    if (variant === "up-left" || variant === "left") return { x: 18, y: 10 };
    if (variant === "down-right") return { x: -18, y: -10 };
    return { x: 18, y: -10 };
  })();

  const arrowEl = (
    <motion.div
      key="arrow"
      initial={prefersReduced ? false : { opacity: 0, scale: 0.8, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "block", transformOrigin: "50% 50%" }}
      className="text-accent"
    >
      <HandDrawnArrow
        variant={variant}
        size={arrowSize}
        strokeWidth={strokeWidth}
      />
    </motion.div>
  );

  const captionEl = (
    <motion.p
      key="caption"
      initial={prefersReduced ? false : { opacity: 0, ...labelEnter }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: delay + 0.55 }}
      className="font-sans font-semibold leading-[1.1] tracking-[-0.015em] max-w-[20ch]"
      style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)" }}
    >
      {text}
    </motion.p>
  );

  return (
    <motion.div
      className={`pointer-events-none flex flex-col items-start gap-2 ${className}`}
      initial={prefersReduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay }}
    >
      {side === "above" ? captionEl : arrowEl}
      {side === "above" ? arrowEl : captionEl}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* InfinityGlyph — inline SVG so the lemniscate renders identically across    */
/* fonts. Inherits stroke color via currentColor.                             */
/* -------------------------------------------------------------------------- */

export function InfinityGlyph({
  className = "",
  size,
  strokeWidth = 2,
}: {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}) {
  return (
    <svg
      role="img"
      aria-label="Infinity"
      viewBox="0 0 24 12"
      width={size ?? "1.6em"}
      height={size ? Math.round((typeof size === "number" ? size : 0) / 2) || size : "0.8em"}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block align-[-0.05em] ${className}`}
    >
      <path d="M12 6c-1.7-2.2-3.3-3.3-5-3.3a3.3 3.3 0 1 0 0 6.6c1.7 0 3.3-1.1 5-3.3Zm0 0c1.7 2.2 3.3 3.3 5 3.3a3.3 3.3 0 0 0 0-6.6c-1.7 0-3.3 1.1-5 3.3Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* PhotoSlot — real <img> when src provided, dashed placeholder otherwise     */
/* -------------------------------------------------------------------------- */

export function PhotoSlot({
  src,
  alt,
  caption,
  label,
  fileName,
  aspectRatio = "4 / 5",
  className = "",
  priority = false,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  label?: string;
  fileName?: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div
        className="relative w-full overflow-hidden border border-rule bg-paper-2"
        style={{ aspectRatio }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? ""}
            loading={priority ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,transparent_0_18px,color-mix(in_oklab,var(--ink),transparent_94%)_18px_19px)] p-6">
            <div className="flex max-w-[80%] flex-col items-center gap-2 text-center">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                Photo slot
              </span>
              {label ? (
                <span className="font-sans text-[15px] font-medium text-ink">
                  {label}
                </span>
              ) : null}
              {fileName ? (
                <span className="font-mono text-[11px] text-ink-soft">
                  /public/photos/{fileName}
                </span>
              ) : null}
            </div>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
