import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "public/ShipNoBGLowQuality.png");
const OUT = path.join(ROOT, "public/ship.svg");

const ALPHA_THRESHOLD = 80;
const LUMINANCE_MAX = 200;

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const lit = new Uint8Array(width * height);
let litCount = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a < ALPHA_THRESHOLD) continue;
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum > LUMINANCE_MAX) continue;
    lit[y * width + x] = 1;
    litCount++;
  }
}

const runs = [];
for (let y = 0; y < height; y++) {
  let runStart = -1;
  for (let x = 0; x <= width; x++) {
    const on = x < width && lit[y * width + x] === 1;
    if (on && runStart < 0) {
      runStart = x;
    } else if (!on && runStart >= 0) {
      runs.push([runStart, y, x - runStart]);
      runStart = -1;
    }
  }
}

const parts = runs.map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="1"/>`);

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges" fill="currentColor">
${parts.join("\n")}
</svg>`;

fs.writeFileSync(OUT, svg);

console.log(`wrote ${OUT}`);
console.log(`  source dimensions: ${width}x${height}`);
console.log(`  lit cells: ${litCount}`);
console.log(`  runs (rects): ${runs.length}`);
console.log(`  compression: ${(litCount / runs.length).toFixed(1)}x`);
console.log(`  svg size: ${(svg.length / 1024).toFixed(1)} KB`);
