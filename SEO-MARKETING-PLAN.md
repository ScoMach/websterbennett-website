# Webster Bennett USA — SEO & Marketing Plan

Prepared March 2026 for Scofield Machine Sales & Service, Inc.

---

## What's Already Done (Technical SEO)

These items were just implemented on the custom site:

| Item | Status | Details |
|------|--------|---------|
| Title tags | ✅ Done | Unique, keyword-rich titles on all 9 pages |
| Meta descriptions | ✅ Done | Unique, compelling descriptions on all 9 pages |
| Open Graph tags | ✅ Done | Full OG + Twitter Card tags on all 9 pages |
| Canonical URLs | ✅ Done | Self-referencing canonicals on all 9 pages |
| sitemap.xml | ✅ Done | All 9 pages, priority-weighted |
| robots.txt | ✅ Done | Open crawl policy + sitemap reference |
| Schema: LocalBusiness | ✅ Done | JSON-LD on homepage |
| Schema: FAQPage | ✅ Done | JSON-LD on FAQ page (11 Q&As) |
| Clean URLs | ✅ Done | `/spares` not `/spares.html` via Vercel config |
| Mobile responsive | ✅ Done | Full responsive design (960px / 700px breakpoints) |
| Fast loading | ✅ Done | Static HTML, no framework, ~50KB per page |
| Semantic HTML | ✅ Done | Proper heading hierarchy (h1 → h2 → h3) on all pages |
| Alt text on images | ✅ Done | All images have descriptive alt attributes |
| Internal linking | ✅ Done | Strong cross-linking between pages (nav, CTAs, footer) |

---

## What You Need to Do After Deploying

### Immediate (Week 1)

**1. Google Search Console**
- Go to https://search.google.com/search-console
- Add property for `websterbennett.com`
- Verify ownership (Vercel makes this easy — DNS TXT record or HTML file)
- Submit the sitemap: `https://www.websterbennett.com/sitemap.xml`
- This tells Google the new site exists and to start indexing it

**2. Google Business Profile**
- If you don't have one: create at https://business.google.com
- If you do: update the website URL to the new site
- Add photos of machines, parts, your facility
- This helps you appear in Google Maps and local searches

**3. Google Analytics**
- Follow the deploy guide (replace `GA_MEASUREMENT_ID` in components.js)
- This gives you visitor data — who's finding you, what pages they visit, where they drop off

### First Month

**4. Request Backlinks**
- Email W&B UK (jo@webster-bennett.co.uk) and ask them to link to your site as their Americas distributor — this is the single highest-value backlink you can get
- If T.R. Wigglesworth or other dealers link to you, those help too
- Any industry directories (ThomasNet, MachineTools.com, Surplus Record) where you can list your URL — update them

**5. Bing Webmaster Tools**
- https://www.bing.com/webmasters — same process as Google Search Console
- Bing still drives ~5-10% of search traffic, and industrial buyers sometimes use it (corporate IT defaults)

---

## Your Keyword Strategy

This is a niche industrial market. You're not competing with Amazon — you're competing with maybe 2-3 other sites for a very specific set of searches. That's actually great for SEO because you can own the top spots without a huge budget.

### Primary Keywords (highest intent — these searchers want to buy)

| Keyword | Monthly Volume (est.) | Competition | Your Position |
|---------|----------------------|-------------|---------------|
| webster bennett spare parts | Very low but high intent | Very low | Should be #1-2 |
| webster bennett parts | Same audience | Very low | Should be #1-2 |
| webster & bennett USA | Branded | None — you own this | Should be #1 |
| webster bennett clutch plates | Very low / high intent | Very low | Should be #1 |
| webster bennett vertical boring mill parts | Low | Very low | Should be #1-2 |
| webster bennett service | Low | Very low | Should be #1-2 |
| webster bennett manuals | Low | Very low | Should be #1-2 |

### Secondary Keywords (machine seekers — potential parts buyers)

| Keyword | Monthly Volume (est.) | Notes |
|---------|----------------------|-------|
| vertical boring mill parts | Low-medium | Broader — captures all VBM owners |
| VTL spare parts | Low-medium | Industry abbreviation |
| vertical turret lathe parts | Low | Captures both terms |
| webster bennett for sale | Low | Captures machine buyers who'll need parts later |
| webster bennett DH / EM / EV | Very low | Series-specific searches from existing owners |

### Long-Tail Keywords (specific problems — very high conversion)

These are the searches people type when something is broken and they need a part now:

- "webster bennett shear pin"
- "webster bennett clutch slipping"
- "webster bennett brake shoes"
- "webster bennett serial number location"
- "webster bennett table not rotating"
- "webster bennett saddle nut"
- "webster bennett thrust bearing"

**Your FAQ page and parts catalog page already target many of these.** The custom site's content is far richer than the old Wix site, which gives you a major advantage.

---

## Content Marketing Strategy

### Why Content Works for This Business

Your buyers are maintenance managers and machine operators at steel mills, shipyards, and manufacturing plants. When something breaks, they Google the problem. If your site has the answer, they call you. This is the entire strategy — be the answer.

### Content You Should Add Over Time

**Blog / Resource Articles (add as you have time — even 1 per month helps):**

1. **"How to Identify Your Webster Bennett Series by Serial Number"**
   - You already have this knowledge. Turn it into a page.
   - Targets: "webster bennett serial number", "webster bennett DH vs EM"

2. **"Webster Bennett Clutch Plate Guide: Which Parts Fit Your Machine"**
   - Walk through the clutch selection by series and table size
   - Targets: all clutch-related searches

3. **"Webster Bennett Table Won't Rotate? Check the Shear Pin First"**
   - Troubleshooting article — the #1 call you get
   - Targets: "webster bennett table stuck", "vertical boring mill table not turning"

4. **"Complete Guide to Webster Bennett Brake System Parts"**
   - Brake cylinder, brake shoes, symptoms, replacement
   - Targets: brake-related searches

5. **"What to Know Before Buying a Used Webster Bennett"**
   - For machine buyers — establishes you as the authority, and they'll need parts
   - Targets: "used webster bennett", "webster bennett for sale"

**Each article doesn't need to be long — 500-800 words with the actual useful information is better than 2,000 words of fluff.**

### Where to Put Blog Content

Two options:
- Add a `/resources` or `/guides` page to the site — I can build this
- Or just add individual pages linked from the relevant existing pages (e.g., link the clutch guide from the Spares page)

---

## Competitive Landscape

Based on research, your competition for "Webster Bennett parts" searches is:

| Competitor | Strengths | Weaknesses |
|-----------|-----------|------------|
| **Webster Bennett UK** (webster-bennett.co.uk) | Original manufacturer, strong authority | Not targeting Americas market specifically |
| **T.R. Wigglesworth** (wigglesworth.com) | Lists WB parts, has machine listings | They're a reseller, not the authorized source |
| **Practical Machinist forums** | High domain authority, WB discussion threads | Not a supplier — just discussions |
| **lathes.co.uk** | Detailed WB machine history | UK-focused, informational only |

**Your advantage:** You are the only authorized Americas distributor with direct W&B UK sourcing. No one else can claim that. The new site makes this clear on every page.

**Key differentiator in search results:** Your meta descriptions and titles all emphasize "genuine," "authorized," "OEM," and "Americas." This is exactly what a machine owner wants to see when deciding who to call.

---

## What NOT to Spend Money On

For a business like yours, some common marketing advice doesn't apply:

- **Don't pay for Google Ads yet.** Your search volume is low enough that organic SEO should capture most of it. Revisit in 6 months if you're not ranking #1-2.
- **Don't worry about social media.** Your buyers aren't finding VTL parts on Instagram. LinkedIn is the only platform worth considering, and even then it's optional.
- **Don't buy SEO services from agencies.** For a niche this specific, you'll get better results from the organic content strategy above than from any generic SEO agency.
- **Don't obsess over monthly traffic numbers.** You might get 50-200 visitors/month. That's fine — every one of them is a potential $5,000+ parts order. Quality over quantity.

---

## Tracking Success

After Google Analytics is running, watch these metrics monthly:

| Metric | What It Tells You | Target |
|--------|-------------------|--------|
| Organic search traffic | Are people finding you on Google? | Growing month over month |
| Top landing pages | Which pages drive the most visits? | Spares and Contact should be top |
| Form submissions | How many quote requests come through? | Any increase over Wix baseline (which was 0) |
| Search Console: impressions | How often you appear in search results | Growing as Google indexes new content |
| Search Console: avg position | Where you rank for your keywords | Top 3 for branded terms within 2-3 months |
| Bounce rate by page | Are visitors engaging or leaving? | Below 60% on key pages |

---

## Timeline Summary

| When | What | Effort |
|------|------|--------|
| Deploy day | Formspree, GA4, Vercel, DNS | 30 min (per deploy guide) |
| Week 1 | Google Search Console + submit sitemap | 15 min |
| Week 1 | Google Business Profile (create or update) | 20 min |
| Week 2 | Bing Webmaster Tools | 10 min |
| Week 2 | Email W&B UK for backlink | 5 min |
| Month 1-2 | Update any industry directory listings | 30 min total |
| Ongoing | Add 1 resource article per month | 1-2 hrs each |
| Month 3 | Review Search Console data, adjust | 30 min |
| Month 6 | Full SEO review — rankings, traffic, conversions | 1 hr |

---

## Files Added / Modified for SEO

| File | What Changed |
|------|-------------|
| `sitemap.xml` | **NEW** — all 9 pages, priority-weighted |
| `robots.txt` | **NEW** — open crawl + sitemap reference |
| `index.html` | Added OG tags, Twitter Card, canonical, LocalBusiness schema |
| `spares.html` | Added OG tags, Twitter Card, canonical |
| `services.html` | Added OG tags, Twitter Card, canonical |
| `manuals.html` | Added OG tags, Twitter Card, canonical |
| `machines.html` | Added OG tags, Twitter Card, canonical |
| `register.html` | Added OG tags, Twitter Card, canonical |
| `faq.html` | Added OG tags, Twitter Card, canonical, FAQPage schema |
| `contact.html` | Added OG tags, Twitter Card, canonical |
| `about.html` | Added OG tags, Twitter Card, canonical |
