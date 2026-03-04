/* ============================================================
   PARTS CATALOG DATA
   To add/update parts, ask Claude to edit this file.
   ============================================================ */

const PARTS = {

  topSellers: [
    // ── USA STOCK — Ships immediately from Illinois ──
    {
      id: "wb-us-001",
      name: "Clutch Plates",
      category: "Clutch & Brake",
      description: "Genuine OEM friction and drive clutch plates for W&B spindle drive and feed clutch assemblies. Held in USA stock for immediate shipment — no international lead time.",
      compatible: ["All models"],
      partNumber: "",
      featured: true,
      inStockUSA: true
    },
    {
      id: "wb-us-002",
      name: "Saddle Nuts",
      category: "Feedscrew & Saddle",
      description: "Precision-machined saddle nuts for cross-rail and turret slide feedscrew assemblies. Genuine OEM material and thread form. In stock in the USA for fast turnaround.",
      compatible: ["All models"],
      partNumber: "",
      featured: true,
      inStockUSA: true
    },
    {
      id: "wb-us-003",
      name: "Jaw Screws",
      category: "Tooling & Workholding",
      description: "Genuine OEM jaw screws for W&B independent and universal chuck assemblies. High-tensile material to original specification. Available from USA stock.",
      compatible: ["All models"],
      partNumber: "",
      featured: true,
      inStockUSA: true
    },
    {
      id: "wb-us-004",
      name: "Shear Pins",
      category: "Clutch & Brake",
      description: "OEM shear pins for overload protection on W&B spindle and feed drive trains. Critical safety consumable — we keep these in USA stock so a machine-down event doesn't become a weeks-long wait.",
      compatible: ["All models"],
      partNumber: "",
      featured: true,
      inStockUSA: true
    },
    {
      id: "wb-us-005",
      name: "Brake Parts",
      category: "Clutch & Brake",
      description: "Genuine brake linings, brake bands, and brake hardware for W&B rotary table and spindle braking systems. Held in USA inventory — contact us to confirm availability for your model.",
      compatible: ["All models"],
      partNumber: "",
      featured: true,
      inStockUSA: true
    },
  ],

  categories: [
    { id: "spindle",   icon: "⚙️",  name: "Spindle & Bearing",          desc: "Spindle bearings, thrust bearings, sleeves" },
    { id: "hydraulic", icon: "🔧",  name: "Hydraulic & Lubrication",    desc: "Pumps, cylinders, seals, lubrication lines" },
    { id: "electrical",icon: "⚡",  name: "Electrical & Controls",      desc: "Relays, contactors, limit switches, panels" },
    { id: "gearbox",   icon: "🔩",  name: "Gearbox & Drive",            desc: "Gears, shafts, clutches, belts, brakes" },
    { id: "tooling",   icon: "🪛",  name: "Tooling & Workholding",      desc: "Chuck jaws, tool holders, turret tooling" },
    { id: "seals",     icon: "🛡️",  name: "Seals, Gaskets & Wear Parts", desc: "Oil seals, O-rings, gaskets, way wipers" }
  ]
};
