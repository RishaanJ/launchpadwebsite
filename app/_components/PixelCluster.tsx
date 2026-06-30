"use client";

import { useEffect, useState } from "react";

type Props = {
  cols?: number;
  rows?: number;
  density?: number;
  cell?: number;
  gap?: number;
  className?: string;
  seed?: number;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function PixelCluster({
  cols = 12,
  rows = 8,
  density = 0.42,
  cell = 12,
  gap = 2,
  className = "",
  seed = 7,
}: Props) {
  const rand = mulberry32(seed);
  const cells: { x: number; y: number; on: boolean; weight: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const horizontalFalloff = 1 - c / cols;
      const verticalFalloff = 1 - r / rows;
      const p = density * (0.4 + 0.7 * horizontalFalloff * verticalFalloff);
      const on = rand() < p;
      cells.push({
        x: c,
        y: r,
        on,
        weight: rand(),
      });
    }
  }

  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(id);
  }, []);

  const flickerSet = new Set<number>();
  if (tick > 0) {
    const flickerRand = mulberry32(seed + tick * 13);
    for (let i = 0; i < 3; i++) {
      flickerSet.add(Math.floor(flickerRand() * cells.length));
    }
  }

  const width = cols * (cell + gap) - gap;
  const height = rows * (cell + gap) - gap;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ display: "block" }}
    >
      {cells.map((c, i) => {
        const on = c.on;
        if (!on) return null;
        const flickering = flickerSet.has(i);
        const opacity = flickering ? 0.15 : 0.45 + c.weight * 0.55;
        return (
          <rect
            key={i}
            x={c.x * (cell + gap)}
            y={c.y * (cell + gap)}
            width={cell}
            height={cell}
            fill="currentColor"
            opacity={opacity}
            style={{ transition: "opacity 320ms ease-out" }}
          />
        );
      })}
    </svg>
  );
}
