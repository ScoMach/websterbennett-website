/* ============================================================
   Shared components: nav, footer, and utilities
   ============================================================ */

/* ── Path helper ──
   Pages in subdirectories (guides/, parts/) need "../" prefix
   to reach root-level pages. This detects the depth automatically. */
function getBase() {
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length - 1;
  // For file:// protocol or single-level paths, check if we're in a subdir
  if (path.includes('/guides/') || path.includes('/parts/')) return '../';
  return '';
}

function fixLinks(html) {
  const base = getBase();
  if (!base) return html;
  // Prefix relative hrefs and srcs (skip absolute, mailto, tel, #, javascript)
  return html.replace(/(href|src)="(?!https?:|mailto:|tel:|#|javascript:|\/\/)([^"]+)"/g,
    (match, attr, url) => `${attr}="${base}${url}"`);
}

const NAV_HTML = `
<div class="top-bar">
  <div class="container">
    <div class="top-bar-left">
      <div class="top-bar-item">📞 <a href="tel:8474279360">+1-847-427-9360</a></div>
      <div class="top-bar-item">✉ <a href="mailto:websterbennett@scofieldmachine.com">websterbennett@scofieldmachine.com</a></div>
    </div>
    <div class="top-bar-right">
      The Americas' Genuine Webster &amp; Bennett Source
    </div>
  </div>
</div>
<nav class="navbar">
  <div class="container">
    <a href="index.html" class="nav-brand">
      <img src="assets/logo.png" alt="Webster &amp; Bennett USA" class="nav-logo" onerror="this.style.display='none'">
      <div class="nav-brand-text">
        <span class="nav-brand-name">Webster &amp; Bennett Genuine Parts &amp; Tooling</span>
        <span class="nav-brand-sub">Authorized Reseller | Operated by Scofield Machine Sales &amp; Service, Inc.</span>
      </div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html">Home</a>
      <a href="spares.html">Spares</a>
      <a href="services.html">Service</a>

      <a href="machines.html">Machines</a>
      <a href="register.html">Register</a>
      <a href="faq.html">FAQ</a>
      <a href="contact.html">Contact</a>
    </div>
    <a href="contact.html" class="btn btn-primary btn-sm nav-cta">Request a Quote</a>
    <button class="nav-toggle" onclick="toggleNav()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo-row">
            <img src="assets/logo.png" alt="Webster &amp; Bennett USA" class="footer-logo" onerror="this.style.display='none'">
            <div>
              <div class="footer-brand-name">Webster &amp; Bennett USA</div>
              <div class="footer-brand-sub">Scofield Machine Sales &amp; Service, Inc.</div>
            </div>
          </div>
          <p class="footer-desc">The exclusive authorized source for genuine Webster &amp; Bennett spare parts in the Americas. Sourced directly from Webster &amp; Bennett UK since 1993.</p>
          <div class="footer-phone">📞 +1-847-427-9360</div>
          <div class="footer-email">websterbennett@scofieldmachine.com</div>
        </div>
        <div class="footer-col">
          <h4>Parts &amp; Service</h4>
          <ul>
            <li><a href="spares.html">Spare Parts Catalog</a></li>
            <li><a href="spares.html#top-sellers">Top Sellers</a></li>
            <li><a href="spares.html#categories">Browse Categories</a></li>
            <li><a href="services.html">Service Coordination</a></li>
            <li><a href="contact.html">Request a Quote</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources &amp; Guides</h4>
          <ul>
            <li><a href="clutch-lookup.html">Clutch Plate Lookup</a></li>
            <li><a href="manual-lookup.html">Manual Lookup by Serial</a></li>
            <li><a href="guides/identify-your-series.html">Machine &amp; Series Identification Guide</a></li>
            <li><a href="faq.html">Parts FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="mailto:websterbennett@scofieldmachine.com">Email Us</a></li>
            <li><a href="https://www.linkedin.com/company/scofield-machine-sales-service-inc" target="_blank" rel="noopener" class="footer-social" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <p>&copy;2026 Webster &amp; Bennett USA | Operated by Scofield Machine Sales &amp; Service, Inc. | All rights reserved.</p>
      <p>Exclusive authorized Webster &amp; Bennett parts distributor for the Americas</p>
    </div>
  </div>
</footer>`;

function renderNav(activePage) {
  const el = document.getElementById('site-nav');
  if (el) {
    el.innerHTML = fixLinks(NAV_HTML);
    const links = el.querySelectorAll('.nav-links a');
    links.forEach(l => {
      const href = l.getAttribute('href');
      if (href && (href === activePage || href.endsWith('/' + activePage) || href.endsWith(activePage))) {
        l.classList.add('active');
      }
    });
  }
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (el) el.innerHTML = fixLinks(FOOTER_HTML);
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

function initForm(formId, successId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const origText = btn.textContent;
    btn.textContent = 'Sending\u2026'; btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        const success = document.getElementById(successId);
        if (success) { success.style.display = 'block'; }
        btn.textContent = 'Sent \u2713';
      } else {
        btn.textContent = 'Error \u2014 please try again';
        setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
      }
    } catch {
      btn.textContent = 'Error \u2014 call us directly';
      setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
    }
  });
}

/* ── Google Analytics ── */
(function() {
  const GA_ID = 'G-XH682HYYG2';
  if (GA_ID === 'GA_MEASUREMENT_ID') return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
