/* ==========================================================================
   FLEETMORES — SASSY HOME-3 INTERACTIVE CONTROLLER
   Handles: Header Scroll, Mobile Nav, Modal Booking, FAQ Accordions, Tabs
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.getElementById('mainHeader');
  if (header) {
    const checkScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // 2. Mobile Navigation Drawer
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  const openDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);

  // Close drawer on clicking link
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. Demo Modal System
  const modalOverlay = document.getElementById('demoModalOverlay');
  const openDemoBtns = document.querySelectorAll('[data-open-demo]');
  const closeDemoBtns = document.querySelectorAll('[data-close-demo]');

  const openDemoModal = (source = 'direct') => {
    closeDrawer();
    if (modalOverlay) {
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      const firstInput = modalOverlay.querySelector('input');
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }
  };

  const closeDemoModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  openDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const source = btn.getAttribute('data-demo-source') || 'general';
      openDemoModal(source);
    });
  });

  closeDemoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDemoModal();
    });
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeDemoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDemoModal();
      closeDrawer();
    }
  });

  // 4. Sassy FAQ Accordion
  const faqItems = document.querySelectorAll('.sassy-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.sassy-faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });

  // 5. Interactive Demo Booking Handler
  window.handleDemoSubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById('demoSubmitBtn');
    const name = document.getElementById('demoName')?.value || 'Guest';
    const phone = document.getElementById('demoPhone')?.value || '';
    const company = document.getElementById('demoCompany')?.value || '';

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span>Reserving Your Slot...</span>';
    }

    setTimeout(() => {
      if (modalOverlay) {
        const modalBody = modalOverlay.querySelector('.modal-body');
        if (modalBody) {
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 30px 10px;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background: #F3F6FE; color: #0025E9; font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 2px solid #DCE4FD;">✓</div>
              <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Demo Confirmed, ${name}!</h3>
              <p style="color: #5A5A5A; margin-bottom: 24px;">Our TruckBill product specialist will contact you on <strong>${phone}</strong> via WhatsApp with your personal demo room link.</p>
              <button class="btn-sassy btn-sassy-primary" onclick="location.reload()"><span>Close</span></button>
            </div>
          `;
        }
      }
    }, 800);

    return false;
  };
});
