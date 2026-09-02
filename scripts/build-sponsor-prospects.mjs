import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "/Users/rishaanjain/Launchpad/launchpadweb/outputs/launchpad-sponsors";
const firstReport = "https://www.firstinspires.org/hubfs/web/about/report/annual_report_2025.pdf?hsLang=en";

const special = {
  "Wolfram Research": {
    evidence: "Public event sponsorship request form explicitly includes high-school events",
    route: "Open application",
    source: "https://www.wolfram.com/hackathons/sponsor-request/",
    ask: "$2,500 or software/in-kind",
    fit: 5, access: 5, local: 2,
  },
  Itron: {
    evidence: "Corporate funding application supports STEM education, event sponsorship, and in-kind support",
    route: "Open application / eligibility assessment",
    source: "https://emea.itron.com/apply-for-funding",
    ask: "$2,500–$10,000",
    fit: 5, access: 4, local: 2,
  },
  onsemi: {
    evidence: "Giving Now prioritizes STEAM education for underserved youth; also a 2024–25 FIRST contributor",
    route: "Grant application",
    source: "https://www.onsemi.com/company/environmental-social-and-governance/giving-now-program/giving-priorities",
    ask: "$5,000–$10,000",
    fit: 5, access: 4, local: 3,
  },
  Walmart: {
    evidence: "Spark Good Local Grants are open to eligible nonprofits and schools; $250–$5,000",
    route: "Open local grant application",
    source: "https://www.walmart.org/how-we-give/program-guidelines/spark-good-local-grants-guidelines",
    ask: "$2,500–$5,000",
    fit: 3, access: 5, local: 5,
  },
  Costco: {
    evidence: "Rolling charitable requests for 501(c)(3)s supporting children or education",
    route: "Rolling application",
    source: "https://www.costco.com/charitable-giving-faq.html",
    ask: "$2,500–$5,000",
    fit: 4, access: 5, local: 5,
  },
  Target: {
    evidence: "Local stores accept GiftCard donation requests from 501(c)(3)s and accredited schools",
    route: "In-store request / local giving",
    source: "https://corporate.target.com/about/purpose-history/communities/grants-corporate-giving",
    ask: "$500–$2,500 or gift cards",
    fit: 3, access: 5, local: 5,
  },
  "Best Buy": {
    evidence: "Best Buy Foundation funds teen technology access and career training; 2024–25 FIRST contributor",
    route: "Foundation partnership pitch",
    source: "https://www.bestbuy.com/site/misc/best-buy-foundation-faqs/pcmcat1715784042252.c?id=pcmcat1715784042252",
    ask: "$5,000–$10,000 or equipment",
    fit: 5, access: 3, local: 4,
  },
};

const companies = [
  ["Wolfram Research", "Developer tools / education"],
  ["Itron", "Energy technology"],
  ["onsemi", "Semiconductors"],
  ["Walmart", "Retail"],
  ["Costco", "Retail"],
  ["Target", "Retail"],
  ["Best Buy", "Retail / technology"],
  ["Apple", "Consumer technology"],
  ["Google.org / Google", "Technology / philanthropy"],
  ["Microsoft", "Cloud / developer tools"],
  ["GitHub", "Developer tools"],
  ["Salesforce", "Enterprise software"],
  ["Medtronic", "Medical technology"],
  ["Intel", "Semiconductors"],
  ["AMD", "Semiconductors"],
  ["Cisco", "Networking / security"],
  ["Motorola Solutions", "Communications technology"],
  ["Novelis", "Advanced manufacturing"],
  ["3D Systems", "3D printing / manufacturing"],
  ["Qualcomm", "Semiconductors / wireless"],
  ["Palo Alto Networks", "Cybersecurity"],
  ["Okta", "Identity software"],
  ["Abbott", "Health technology"],
  ["Arconic", "Advanced manufacturing"],
  ["Dell Technologies", "Enterprise technology"],
  ["Hewlett-Packard / HP", "Computing"],
  ["IBM", "Enterprise technology"],
  ["Oracle", "Enterprise software"],
  ["F5", "Cloud / security"],
  ["Stripe", "Financial technology"],
  ["PayPal", "Financial technology"],
  ["Arrow Electronics", "Electronics distribution"],
  ["Ball Corporation", "Advanced manufacturing"],
  ["Baxter International", "Medical technology"],
  ["Boston Scientific", "Medical technology"],
  ["Corning", "Materials science"],
  ["GE HealthCare", "Medical technology"],
  ["Pfizer", "Life sciences"],
  ["Panasonic", "Electronics"],
  ["PTC", "Engineering software"],
  ["Arm", "Semiconductors"],
  ["Analog Devices", "Semiconductors"],
  ["KLA", "Semiconductor equipment"],
  ["ASML", "Semiconductor equipment"],
  ["Texas Instruments", "Semiconductors / education"],
  ["GlobalFoundries", "Semiconductor manufacturing"],
  ["Mouser Electronics", "Electronics distribution"],
  ["DigiKey", "Electronics distribution"],
  ["TE Connectivity", "Electronics / connectivity"],
  ["Molex", "Electronics / connectivity"],
  ["Rockwell Automation", "Industrial automation"],
  ["Schneider Electric", "Energy management"],
  ["ABB", "Industrial automation"],
  ["3M", "Manufacturing / science"],
  ["Boeing", "Aerospace"],
  ["Lockheed Martin", "Aerospace / defense"],
  ["Northrop Grumman", "Aerospace / defense"],
  ["RTX", "Aerospace / defense"],
  ["BAE Systems", "Aerospace / defense"],
  ["Blue Origin", "Aerospace"],
  ["SpaceX", "Aerospace"],
  ["GE Aerospace", "Aerospace"],
  ["General Atomics", "Aerospace / engineering"],
  ["General Dynamics IT", "Technology / defense"],
  ["L3Harris Technologies", "Aerospace / communications"],
  ["Leidos", "Technology / engineering"],
  ["The Aerospace Corporation", "Aerospace research"],
  ["Ford", "Automotive"],
  ["General Motors", "Automotive"],
  ["John Deere", "Agricultural technology"],
  ["Caterpillar", "Industrial equipment"],
  ["Aptiv", "Automotive technology"],
  ["International Motors", "Transportation"],
  ["Cruise", "Autonomous vehicles"],
  ["Bosch", "Engineering / mobility"],
  ["Honeywell", "Industrial technology"],
  ["Carrier", "Building technology"],
  ["Johnson Controls", "Building technology"],
  ["Emerson", "Industrial technology"],
  ["Bechtel", "Engineering / construction"],
  ["AECOM", "Engineering / infrastructure"],
  ["Chevron", "Energy"],
  ["PG&E", "Energy / utility"],
  ["NextEra Energy", "Energy / utility"],
  ["DTE Energy", "Energy / utility"],
  ["Xcel Energy", "Energy / utility"],
  ["Comcast NBCUniversal", "Media / connectivity"],
  ["Verizon", "Telecommunications"],
  ["AT&T", "Telecommunications"],
  ["Twitch", "Creator / technology"],
  ["Disney", "Media / technology"],
  ["Coca-Cola", "Consumer products"],
  ["FedEx", "Logistics"],
  ["UPS", "Logistics"],
  ["Bank of America", "Financial services"],
  ["JPMorgan Chase", "Financial services"],
  ["American Express", "Financial services"],
  ["Fidelity Investments", "Financial services"],
  ["BNY Mellon", "Financial services"],
  ["Charles Schwab", "Financial services"],
];

if (companies.length !== 100) throw new Error(`Expected 100 companies, got ${companies.length}`);

const bayArea = new Set([
  "Apple", "Google.org / Google", "Salesforce", "Intel", "AMD",
  "Qualcomm", "Palo Alto Networks", "Okta",
  "Stripe", "PayPal", "Arm", "Analog Devices", "KLA", "ASML", "GlobalFoundries", "Cruise",
  "Chevron", "PG&E", "GitHub",
]);

const veryHighFit = new Set([
  "Apple", "Google.org / Google", "Microsoft", "GitHub", "Salesforce",
  "Intel", "AMD", "Cisco", "Qualcomm",
  "Palo Alto Networks", "Dell Technologies", "IBM",
  "Oracle", "PTC", "Texas Instruments", "Mouser Electronics",
  "DigiKey", "Rockwell Automation",
]);

const likelyEmployeeRoute = new Set([
  "Apple", "Google.org / Google", "Microsoft", "GitHub", "Salesforce",
  "Intel", "AMD", "Cisco", "Qualcomm",
  "Palo Alto Networks", "Okta", "Dell Technologies", "IBM", "Oracle", "Ford",
  "General Motors", "Boeing", "Lockheed Martin", "Northrop Grumman", "RTX",
  "BAE Systems", "Chevron", "PG&E", "Comcast NBCUniversal", "Verizon", "AT&T",
  "Bank of America", "JPMorgan Chase", "American Express", "Fidelity Investments",
]);

const notInFirst = new Set(["Wolfram Research", "Itron", "Walmart"]);

function defaultRecord(name) {
  const fit = veryHighFit.has(name) ? 5 : name.match(/Aerospace|SpaceX|Boeing/) ? 4 : 4;
  const local = bayArea.has(name) ? 5 : 2;
  const access = likelyEmployeeRoute.has(name) ? 3 : 2;
  const evidence = notInFirst.has(name)
    ? "Relevant education/STEM prospect; verify current grant or event-sponsorship window before outreach"
    : "Listed as a 2024–25 FIRST corporate/foundation contributor supporting youth STEM";
  return {
    evidence,
    route: likelyEmployeeRoute.has(name) ? "Employee introduction / community-impact team" : "Direct partnership pitch",
    source: notInFirst.has(name) ? `https://www.google.com/search?q=${encodeURIComponent(name + " education grants nonprofit")}` : firstReport,
    ask: fit === 5 ? "$2,500–$10,000" : "$500–$5,000",
    fit, access, local,
  };
}

const rows = companies.map(([name, industry], idx) => {
  const d = { ...defaultRecord(name), ...(special[name] || {}) };
  const total = d.fit * 3 + d.access * 2 + d.local;
  const geography = d.local === 5 ? "Bay Area / strong local angle" : d.local >= 4 ? "Local-store route" : "National";
  const targetRole = d.route.includes("Open") || d.route.includes("Rolling")
    ? "Grants/community giving"
    : d.route.includes("Employee")
      ? "CSR/community impact + warm employee"
      : "Community impact, partnerships, or DevRel";
  return [
    idx + 1, "", name, industry, d.evidence, d.route, d.ask,
    d.fit, d.access, d.local, "", geography, targetRole, d.source,
    "Not contacted", "", "", "Research named contact", "",
  ];
});

const wb = Workbook.create();
const prospects = wb.worksheets.add("Sponsor Prospects");
const guide = wb.worksheets.add("How to Use");

prospects.showGridLines = false;
guide.showGridLines = false;

const headers = [
  "Seed Rank", "Priority", "Company", "Industry", "Evidence / Program",
  "Best Access Route", "Suggested Ask", "Mission Fit (1–5)", "Access (1–5)",
  "Local Angle (1–5)", "Score", "Geography", "Target Role", "Source URL",
  "Status", "Owner", "Last Contact", "Next Step", "Notes",
];

prospects.getRange("A1:G1").merge();
prospects.getRange("A1").values = [["Launchpad Sponsor Prospect List — 100 Companies"]];
prospects.getRange("A2:N2").merge();
prospects.getRange("A2").values = [[
  "Researched 2026-07-27 • “Open application” means a public route was verified; “proven sponsor” means documented youth-STEM support but usually requires a direct pitch or introduction."
]];
prospects.getRange("A4:S4").values = [headers];
prospects.getRange(`A5:S${rows.length + 4}`).values = rows;
prospects.getRange("K5").formulas = [["=H5*3+I5*2+J5"]];
prospects.getRange(`K5:K${rows.length + 4}`).fillDown();
prospects.getRange("B5").formulas = [['=IF(K5>=24,"A",IF(K5>=19,"B","C"))']];
prospects.getRange(`B5:B${rows.length + 4}`).fillDown();
prospects.tables.add(`A4:S${rows.length + 4}`, true, "SponsorProspectsTable");

const title = prospects.getRange("A1:S1");
title.format.fill = "#101828";
title.format.font = { bold: true, color: "#FFFFFF", size: 18 };
title.format.rowHeight = 34;
title.format.verticalAlignment = "center";

const subtitle = prospects.getRange("A2:S2");
subtitle.format.fill = "#E8EEF7";
subtitle.format.font = { color: "#344054", italic: true, size: 10 };
subtitle.format.wrapText = true;
subtitle.format.rowHeight = 34;

const header = prospects.getRange("A4:S4");
header.format.fill = "#155EEF";
header.format.font = { bold: true, color: "#FFFFFF", size: 10 };
header.format.wrapText = true;
header.format.rowHeight = 34;
header.format.verticalAlignment = "center";

const body = prospects.getRange(`A5:S${rows.length + 4}`);
body.format.font = { color: "#101828", size: 10 };
body.format.verticalAlignment = "top";
body.format.borders = { insideHorizontal: { style: "thin", color: "#E4E7EC" } };
prospects.getRange(`D5:G${rows.length + 4}`).format.wrapText = true;
prospects.getRange(`L5:S${rows.length + 4}`).format.wrapText = true;
prospects.getRange(`H5:K${rows.length + 4}`).format.horizontalAlignment = "center";

const widths = {
  A: 10, B: 9, C: 24, D: 22, E: 46, F: 31, G: 20, H: 14, I: 12, J: 16,
  K: 10, L: 25, M: 34, N: 45, O: 17, P: 14, Q: 14, R: 23, S: 30,
};
for (const [col, width] of Object.entries(widths)) {
  prospects.getRange(`${col}:${col}`).format.columnWidth = width;
}
prospects.getRange(`A5:S${rows.length + 4}`).format.rowHeight = 54;
prospects.freezePanes.freezeRows(4);
prospects.freezePanes.freezeColumns(3);

prospects.getRange(`B5:B${rows.length + 4}`).conditionalFormats.add("containsText", {
  text: "A", format: { fill: "#DCFCE7", font: { color: "#166534", bold: true } },
});
prospects.getRange(`B5:B${rows.length + 4}`).conditionalFormats.add("containsText", {
  text: "B", format: { fill: "#FEF3C7", font: { color: "#92400E", bold: true } },
});
prospects.getRange(`B5:B${rows.length + 4}`).conditionalFormats.add("containsText", {
  text: "C", format: { fill: "#F2F4F7", font: { color: "#475467", bold: true } },
});
prospects.getRange(`O5:O${rows.length + 4}`).dataValidation = {
  rule: { type: "list", values: ["Not contacted", "Researching", "Intro requested", "Contacted", "Follow-up", "Meeting booked", "Proposal sent", "Won", "Lost"] },
};

guide.getRange("A1:F1").merge();
guide.getRange("A1").values = [["How to turn this list into $40k"]];
guide.getRange("A1:F1").format.fill = "#101828";
guide.getRange("A1:F1").format.font = { bold: true, color: "#FFFFFF", size: 18 };
guide.getRange("A1:F1").format.rowHeight = 34;

const guideRows = [
  ["Field", "Meaning", "What to do", "", "", ""],
  ["Priority A", "Best combination of Launchpad fit, access, and Bay Area relevance", "Start here; find a named person before sending anything", "", "", ""],
  ["Priority B", "Good fit, but weaker access or location", "Work after the first 20–30 A prospects", "", "", ""],
  ["Priority C", "Proven giving potential but lower near-term odds", "Use only with a warm introduction or highly specific angle", "", "", ""],
  ["Open application", "A public submission path was verified", "Read eligibility closely and apply through Hack Club fiscal sponsorship where allowed", "", "", ""],
  ["Employee introduction", "Giving is commonly relationship- or employee-led", "Ask parents, mentors, alumni, and LinkedIn contacts for an internal referral", "", "", ""],
  ["Direct partnership pitch", "No public open application was verified", "Pitch Community Impact, Partnerships, DevRel, Early Talent, or local site leadership", "", "", ""],
  ["Suggested weekly cadence", "25 researched names • 20 messages • 10 intro asks • 3 calls", "Do this every week until the pipeline reaches at least $150k in asks", "", "", ""],
  ["Target portfolio", "2 × $10k + 6 × $2.5k + 10 × $500", "$40,000 total; seek commitments by February 2027", "", "", ""],
  ["Important caveat", "A historical sponsorship does not guarantee an open 2026–27 application", "Confirm current eligibility and deadlines before applying", "", "", ""],
];
guide.getRange(`A3:F${guideRows.length + 2}`).values = guideRows;
guide.getRange("A3:F3").format.fill = "#155EEF";
guide.getRange("A3:F3").format.font = { bold: true, color: "#FFFFFF" };
guide.getRange(`A4:C${guideRows.length + 2}`).format.wrapText = true;
guide.getRange(`A3:C${guideRows.length + 2}`).format.borders = {
  insideHorizontal: { style: "thin", color: "#E4E7EC" },
};
guide.getRange("A:A").format.columnWidth = 25;
guide.getRange("B:B").format.columnWidth = 52;
guide.getRange("C:C").format.columnWidth = 66;
guide.getRange(`A4:C${guideRows.length + 2}`).format.rowHeight = 44;
guide.freezePanes.freezeRows(3);

await fs.mkdir(outputDir, { recursive: true });
const preview = await wb.render({ sheetName: "Sponsor Prospects", range: "A1:N18", scale: 1 });
await fs.writeFile(path.join(outputDir, "preview.png"), new Uint8Array(await preview.arrayBuffer()));
const guidePreview = await wb.render({ sheetName: "How to Use", range: "A1:F12", scale: 1.4 });
await fs.writeFile(path.join(outputDir, "guide-preview.png"), new Uint8Array(await guidePreview.arrayBuffer()));

const inspect = await wb.inspect({
  kind: "table",
  range: "Sponsor Prospects!A1:S10",
  include: "values,formulas",
  tableMaxRows: 10,
  tableMaxCols: 19,
});
console.log(inspect.ndjson);

const errors = await wb.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(wb);
const outputPath = path.join(outputDir, "launchpad-sponsor-prospects-100.xlsx");
await output.save(outputPath);
console.log(outputPath);
