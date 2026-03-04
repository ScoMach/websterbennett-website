# Webster Bennett USA — Deployment Guide

Everything is built and tested. Follow these steps to go live.

---

## Step 1: Formspree (5 minutes)

All 4 forms (Contact, Parts Quote, Service Request, Register Machine) use a single Formspree endpoint. Each form has a hidden `_subject` field so you can tell which form a submission came from.

1. Go to **https://formspree.io** and sign up (free — 50 submissions/month)
2. Create a new form, set the email recipient to **websterbennett@scofieldmachine.com**
3. Copy your form ID (looks like `xyzABCDE`)
4. Find-and-replace `FORMSPREE_ID` with your actual form ID across these 4 files:
   - `contact.html`
   - `spares.html`
   - `services.html`
   - `register.html`

Test: Submit a test message on the contact page after deploying — you should get an email with the subject "Contact Form — Webster Bennett USA".

---

## Step 2: Google Analytics (5 minutes, optional)

1. Go to **https://analytics.google.com** and create a GA4 property for websterbennett.com
2. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Open `js/components.js` and replace `GA_MEASUREMENT_ID` with your actual ID

The analytics code loads automatically on every page via the shared component. If you skip this step, the code safely does nothing (it checks for the placeholder and exits).

---

## Step 3: Deploy to Vercel (10 minutes)

### Option A: Via Vercel CLI
```bash
npm i -g vercel
cd website/
vercel
```
Follow the prompts. Vercel will give you a `.vercel.app` URL.

### Option B: Via GitHub
1. Push the `website/` folder to a GitHub repo
2. Go to **https://vercel.com**, sign in with GitHub
3. Import the repo — Vercel auto-detects the static site
4. Deploy

Either way, Vercel gives you a free URL like `webster-bennett.vercel.app` to preview.

---

## Step 4: Connect Your Domain (10 minutes)

1. In Vercel dashboard → your project → Settings → Domains
2. Add `websterbennett.com` and `www.websterbennett.com`
3. Vercel shows you the DNS records to add
4. Go to your domain registrar and update DNS:
   - **Option A (recommended):** Change nameservers to Vercel's nameservers
   - **Option B:** Add a CNAME record pointing `www` to `cname.vercel-dns.com` and an A record for root domain to Vercel's IP
5. SSL is automatic — Vercel provisions a free certificate

**DNS propagation:** Usually 15-60 minutes. The old Wix site will stop resolving once DNS points to Vercel.

**Keep Wix running temporarily:** Don't cancel your Wix plan until you've confirmed the new site is live and forms are working. You can run both in parallel during the DNS switchover.

---

## Step 5: Post-Launch Checklist

- [ ] Submit test on each form (Contact, Spares Quote, Service, Register)
- [ ] Confirm emails arrive at websterbennett@scofieldmachine.com
- [ ] Check site on mobile (iPhone/Android)
- [ ] Verify Google Analytics is receiving data (may take 24hrs)
- [ ] Update Google Search Console with new site verification
- [ ] Submit sitemap to Google (Vercel auto-generates at /sitemap.xml if you add one)

---

## File Summary

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, trust bar, top sellers, how to order |
| `spares.html` | Parts catalog — top sellers, categories, quote form |
| `services.html` | Service coordination — process, service types, request form |
| `manuals.html` | Technical manuals — manual cards with descriptions |
| `machines.html` | Machines for sale + sell your machine |
| `register.html` | Register Your Machine form |
| `faq.html` | FAQ with accordion |
| `contact.html` | Contact info + general contact form |
| `about.html` | About Scofield Machine / W&B history |
| `css/style.css` | Complete design system |
| `js/components.js` | Shared nav, footer, form handler, analytics |
| `data/parts.js` | Parts data for top sellers grid |
| `data/manuals.js` | Manual data for manuals page |
| `vercel.json` | Vercel deployment config (clean URLs) |
| `assets/` | 19 images (logo, machines, parts, serial number) |

---

## Placeholders to Replace Before Going Live

| Placeholder | Replace With | Files |
|-------------|-------------|-------|
| `FORMSPREE_ID` | Your Formspree form ID | contact.html, spares.html, services.html, register.html |
| `GA_MEASUREMENT_ID` | Your GA4 Measurement ID | js/components.js |
