/* ============================================================
   MANUALS CATALOG DATA
   To add a manual: add an entry here and upload the PDF to Gumroad,
   then paste the Gumroad product URL as the gumroadUrl.
   ============================================================ */

const MANUALS = [
  // ── PLACEHOLDER: Add your scanned manuals here ──
  // For each manual, provide: model, title, description, pages (approx),
  // and the Gumroad product URL after you create the product.
  {
    id: "man-001",
    model: "36\" VTL",
    title: "Webster & Bennett 36\" Vertical Turret Lathe — Complete Service Manual",
    description: "Full maintenance, parts identification, and service manual for the W&B 36\" VTL. Covers spindle assembly, hydraulic system, electrical diagrams, and recommended maintenance schedules.",
    pages: null,          // Add approximate page count
    gumroadUrl: "contact.html?subject=manual-36-vtl",
    price: 250,
    available: true
  },
  {
    id: "man-002",
    model: "48\" VTL — DH Series",
    title: "Webster & Bennett 48\" DH Series — Service & Parts Manual",
    description: "Comprehensive service manual for the 48\" DH model including parts diagrams, cross-sectional drawings, lubrication guide, and electrical schematics.",
    pages: null,
    gumroadUrl: "contact.html?subject=manual-48-dh",
    price: 250,
    available: true
  },
  {
    id: "man-003",
    model: "60\" VTL",
    title: "Webster & Bennett 60\" Vertical Boring Mill — Operations & Maintenance Manual",
    description: "Operations, maintenance, and parts reference manual for the 60\" vertical boring mill. Includes setup procedures, tooling guidance, and full parts breakdown.",
    pages: null,
    gumroadUrl: "contact.html?subject=manual-60-vtl",
    price: 250,
    available: true
  },
  {
    id: "man-004",
    model: "72\" VTL — EM Series",
    title: "Webster & Bennett 72\" EM Series — Complete Manual",
    description: "Full technical manual for the 72\" EM series vertical turret lathe. Parts lists, assembly drawings, hydraulic circuit diagrams, and electrical schematics.",
    pages: null,
    gumroadUrl: "contact.html?subject=manual-72-em",
    price: 250,
    available: true
  }
  // Add more manuals as needed
];

// Free lead magnet
const FREE_GUIDE = {
  title: "Webster & Bennett Model Identification Guide",
  description: "Not sure which model you have? This free reference guide covers all major W&B VTL and vertical boring mill models — how to read the serial number plate, identify the model series, and find the right parts.",
  gumroadUrl: "#",  // Replace with Gumroad free product URL (set price to $0)
  available: true
};
