<?php
if (!isset($activePage)) {
    $activePage = 'home';
}
?>
<header class="fm-header" id="mainHeader">
  <div class="container-fm">
    <div class="header-inner">
      <a href="index.html" class="header-brand-group" aria-label="FleetMores Home">
        <img src="assets/images/fleetmores-logo.svg" alt="FLEETMORES" width="180" height="26">
        <span class="header-brand-divider"></span>
        <span class="header-product-badge">
          <img src="assets/images/truckbill-logo.png" alt="TruckBill" height="14" style="vertical-align: middle;">
          <span>TRUCKBILL</span>
        </span>
      </a>

      <nav aria-label="Primary Navigation">
        <ul class="nav-desktop-links">
          <li><a href="index.html" class="<?php echo $activePage === 'home' ? 'active' : ''; ?>">Overview</a></li>
          <li><a href="features.html" class="<?php echo $activePage === 'features' ? 'active' : ''; ?>">Features</a></li>
          <li><a href="solutions.html" class="<?php echo $activePage === 'solutions' ? 'active' : ''; ?>">Solutions</a></li>
          <li><a href="how-it-works.html" class="<?php echo $activePage === 'how-it-works' ? 'active' : ''; ?>">How It Works</a></li>
          <li><a href="pricing.html" class="<?php echo $activePage === 'pricing' ? 'active' : ''; ?>">Pricing</a></li>
          <li><a href="faq.html" class="<?php echo $activePage === 'faq' ? 'active' : ''; ?>">FAQ</a></li>
          <li><a href="contact.html" class="<?php echo $activePage === 'contact' ? 'active' : ''; ?>">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-desktop-cta">
        <button class="btn-fm btn-fm-teal btn-fm-sm" data-open-demo data-demo-source="header_desktop">
          BOOK A DEMO
        </button>
      </div>

      <button class="hamburger-toggle" id="hamburgerBtn" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </div>
</header>

<div class="mobile-nav-drawer" id="mobileDrawer">
  <div>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <span class="eyebrow mb-0">NAVIGATION</span>
    </div>
    <ul class="mobile-nav-links">
      <li><a href="index.html"><span>Overview</span> <span>→</span></a></li>
      <li><a href="features.html"><span>Features (12 Engines)</span> <span>→</span></a></li>
      <li><a href="solutions.html"><span>Solutions by Segment</span> <span>→</span></a></li>
      <li><a href="how-it-works.html"><span>How It Works</span> <span>→</span></a></li>
      <li><a href="pricing.html"><span>Pricing Plans</span> <span>→</span></a></li>
      <li><a href="faq.html"><span>FAQs</span> <span>→</span></a></li>
      <li><a href="contact.html"><span>Contact & Schedule</span> <span>→</span></a></li>
    </ul>
  </div>
  <div>
    <button class="btn-fm btn-fm-teal w-100 py-3 mb-2" data-open-demo data-demo-source="mobile_drawer">
      BOOK A DEMO
    </button>
  </div>
</div>
