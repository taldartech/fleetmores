/**
 * FLEETMORES — Interactive Engine & Demo Lead Capture
 * Controls Demo Modal, Mobile Navigation, UI Switchers & ROI Calculator
 */

(function () {
  'use strict';

  // 1. Sticky Header State
  const header = document.getElementById('mainHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 2. Mobile Drawer Navigation
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close when clicking mobile links
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Demo Modal System
  const demoModal = document.getElementById('demoModal');
  const closeDemoModal = document.getElementById('closeDemoModal');
  const demoForm = document.getElementById('fleetmoresDemoForm');
  const demoFormContainer = document.getElementById('demoFormContainer');
  const demoSuccessState = document.getElementById('demoSuccessState');
  const instantWhatsAppCta = document.getElementById('instantWhatsAppCta');

  function openModal(source = 'general') {
    if (!demoModal) return;
    demoModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    if (window.FleetMoresAnalytics) {
      window.FleetMoresAnalytics.track('demo_modal_opened', { source: source });
    }
  }

  function closeModal() {
    if (!demoModal) return;
    demoModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-demo]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const source = btn.getAttribute('data-demo-source') || 'cta_button';
      openModal(source);
    });
  });

  if (closeDemoModal) {
    closeDemoModal.addEventListener('click', closeModal);
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && demoModal.classList.contains('is-active')) {
        closeModal();
      }
    });
  }

  // Demo Form Submission
  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = demoForm.name ? demoForm.name.value.trim() : '';
      const company = demoForm.company ? demoForm.company.value.trim() : '';
      const mobile = demoForm.mobile ? demoForm.mobile.value.trim() : '';
      const email = demoForm.email ? demoForm.email.value.trim() : '';
      const vehicleCount = demoForm.vehicleCount ? demoForm.vehicleCount.value : '1-5';
      const businessType = demoForm.businessType ? demoForm.businessType.value : 'Transporter';

      if (!name || !mobile) {
        alert('Please provide your name and mobile number to proceed.');
        return;
      }

      const submitBtn = demoForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Scheduling Walkthrough...';
      }

      // Track lead
      if (window.FleetMoresAnalytics) {
        window.FleetMoresAnalytics.track('demo_form_submitted', {
          name, company, mobile, email, vehicleCount, businessType
        });
      }

      // Prepare WhatsApp link
      const waText = encodeURIComponent(
        `Hello FleetMores Team, I am ${name} from ${company || 'our transport company'} (${vehicleCount} vehicles, ${businessType}). I would like to schedule a TruckBill demo.`
      );
      if (instantWhatsAppCta) {
        instantWhatsAppCta.href = `https://wa.me/919820000000?text=${waText}`;
      }

      setTimeout(() => {
        if (demoFormContainer) demoFormContainer.style.display = 'none';
        if (demoSuccessState) demoSuccessState.style.display = 'block';
      }, 600);
    });
  }

  // 4. Interactive UI Showcase Switcher
  const tabBtns = document.querySelectorAll('.ui-tab-btn');
  const uiPanels = document.querySelectorAll('.ui-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      tabBtns.forEach(b => b.classList.remove('active'));
      uiPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      if (window.FleetMoresAnalytics) {
        window.FleetMoresAnalytics.track('ui_showcase_tab_switched', { tab: targetId });
      }
    });
  });

  // 5. Interactive ROI Calculator
  const fleetRange = document.getElementById('fleetRange');
  const fleetValDisplay = document.getElementById('fleetValDisplay');
  const tripRange = document.getElementById('tripRange');
  const tripValDisplay = document.getElementById('tripValDisplay');
  const savingsDisplay = document.getElementById('savingsDisplay');
  const hoursDisplay = document.getElementById('hoursDisplay');

  function updateCalculator() {
    if (!fleetRange || !tripRange) return;
    const fleetCount = parseInt(fleetRange.value, 10);
    const tripsCount = parseInt(tripRange.value, 10);

    if (fleetValDisplay) fleetValDisplay.textContent = `${fleetCount} Vehicles`;
    if (tripValDisplay) tripValDisplay.textContent = `${tripsCount} Trips / mo`;

    // Formula: Leakage recovery ~ ₹1,850 per vehicle per month + ₹250 per trip billing accuracy
    const monthlyLeakage = (fleetCount * 1850) + (tripsCount * 250);
    const annualSavings = monthlyLeakage * 12;
    const hoursSaved = Math.round((tripsCount * 1.5) + (fleetCount * 4));

    if (savingsDisplay) {
      savingsDisplay.textContent = `₹${(annualSavings / 100000).toFixed(1)} Lakhs / yr`;
    }
    if (hoursDisplay) {
      hoursDisplay.textContent = `${hoursSaved} hrs saved / mo`;
    }
  }

  if (fleetRange && tripRange) {
    fleetRange.addEventListener('input', updateCalculator);
    tripRange.addEventListener('input', updateCalculator);
    updateCalculator();
  }

})();
