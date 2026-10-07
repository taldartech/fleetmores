<?php
if (!isset()) {
     = 'home';
}
?>
<header class="fm-header" id="mainHeader">
  <div class="container-fm">
    <div class="header-inner">
      <a href="index.html" class="header-brand-group" aria-label="FleetMores Home">
        <img src="assets/images/fleetmores-logo.svg" alt="FLEETMORES" width="180" height="28">
        <span class="header-brand-divider"></span>
        <span class="header-product-badge">
          <img src="assets/images/truckbill-logo.png" alt="TruckBill" height="14" style="vertical-align: middle;">
          <span>TRUCKBILL</span>
        </span>
      </a>

      <nav aria-label="Primary Navigation">
        <ul class="nav-desktop-links">
          <li><a href="index.html" class="<?php echo  === 'home' ? 'active' : ''; ?>">Overview</a></li>
          <li><a href="features.html" class="<?php echo  === 'features' ? 'active' : ''; ?>">Features</a></li>
          <li><a href="solutions.html" class="<?php echo  === 'solutions' ? 'active' : ''; ?>">Solutions</a></li>
          <li><a href="how-it-works.html" class="<?php echo  === 'how-it-works' ? 'active' : ''; ?>">How It Works</a></li>
          <li><a href="pricing.html" class="<?php echo  === 'pricing' ? 'active' : ''; ?>">Pricing</a></li>
          <li><a href="faq.html" class="<?php echo  === 'faq' ? 'active' : ''; ?>">FAQ</a></li>
          <li><a href="contact.html" class="<?php echo  === 'contact' ? 'active' : ''; ?>">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-desktop-cta">
        <button class="btn-sassy btn-sassy-primary btn-sassy-sm" data-open-demo data-demo-source="header_desktop">
          <span>Book a Demo</span> <span class="btn-arrow">→</span>
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

<!-- Mobile Nav Drawer -->
<div class="mobile-nav-overlay" id="mobileOverlay"></div>
<div class="mobile-nav-drawer" id="mobileDrawer">
  <div>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <img src="assets/images/fleetmores-logo.svg" alt="FLEETMORES" width="150" height="24">
      <button class="modal-close-btn" id="mobileCloseBtn" aria-label="Close Menu">✕</button>
    </div>
    <ul class="mobile-nav-links">
      <li><a href="index.html" class="<?php echo  === 'home' ? 'active' : ''; ?>"><span>Overview</span> <span>→</span></a></li>
      <li><a href="features.html" class="<?php echo  === 'features' ? 'active' : ''; ?>"><span>Features (12 Engines)</span> <span>→</span></a></li>
      <li><a href="solutions.html" class="<?php echo  === 'solutions' ? 'active' : ''; ?>"><span>Solutions by Segment</span> <span>→</span></a></li>
      <li><a href="how-it-works.html" class="<?php echo  === 'how-it-works' ? 'active' : ''; ?>"><span>How It Works</span> <span>→</span></a></li>
      <li><a href="pricing.html" class="<?php echo  === 'pricing' ? 'active' : ''; ?>"><span>Pricing Plans</span> <span>→</span></a></li>
      <li><a href="faq.html" class="<?php echo  === 'faq' ? 'active' : ''; ?>"><span>FAQs</span> <span>→</span></a></li>
      <li><a href="contact.html" class="<?php echo  === 'contact' ? 'active' : ''; ?>"><span>Contact & Schedule</span> <span>→</span></a></li>
    </ul>
  </div>
  <div>
    <button class="btn-sassy btn-sassy-primary w-100 py-3" data-open-demo data-demo-source="mobile_drawer">
      <span>Book a Demo</span> <span class="btn-arrow">→</span>
    </button>
  </div>
</div>
