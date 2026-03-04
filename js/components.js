/* ============================================================
   Shared components: nav, footer, and utilities
   ============================================================ */

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
      <a href="manuals.html">Manuals</a>
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
            <li><a href="manuals.html">Technical Manuals</a></li>
            <li><a href="manual-lookup.html">Manual Lookup Tool</a></li>
            <li><a href="clutch-lookup.html">Clutch Plate Lookup</a></li>
            <li><a href="guides/identify-your-series.html">Identify Your Series</a></li>
            <li><a href="guides/identifying-your-machine.html">Machine Identification Guide</a></li>
            <li><a href="guides/table-wont-rotate.html">Troubleshooting: Table Won't Rotate</a></li>
            <li><a href="guides/clutch-slipping.html">Troubleshooting: Clutch Slipping</a></li>
            <li><a href="guides/brake-not-holding.html">Troubleshooting: Brake Not Holding</a></li>
            <li><a href="guides/saddle-backlash.html">Troubleshooting: Saddle Backlash</a></li>
            <li><a href="faq.html">Parts FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="mailto:websterbennett@scofieldmachine.com">Email Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <p>©2026 Webster &amp; Bennett USA | Operated by Scofield Machine Sales &amp; Service, Inc. | All rights reserved.</p>
      <p>Exclusive authorized Webster &amp; Bennett parts distributor for the Americas</p>
    </div>
  </div>
</footer>`;

function renderNav(activePage) {
  const el = document.getElementById('site-nav');
  if (el) {
    el.innerHTML = NAV_HTML;
    const links = el.querySelectorAll('.nav-links a');
    links.forEach(l => {
      if (l.getAttribute('href') === activePage) l.classList.add('active');
    });
  }
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (el) el.innerHTML = FOOTER_HTML;
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
    btn.textContent = 'Sending…'; btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        const success = document.getElementById(successId);
        if (success) { success.style.display = 'block'; }
        btn.textContent = 'Sent ✓';
      } else {
        btn.textContent = 'Error — please try again';
        setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
      }
    } catch {
      btn.textContent = 'Error — call us directly';
      setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
    }
  });
}

/* ── Google Analytics ── */
/* Replace GA_MEASUREMENT_ID with your Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX) */
(function() {
  const GA_ID = 'G-XH682HYYG2';
  if (GA_ID === 'GA_MEASUREMENT_ID') return; // Skip if placeholder not replaced
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
