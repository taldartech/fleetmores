/* ==========================================================================
   FLEETMORES — SASSY HOME-3 INTERACTIVE CONTROLLER
   Handles: Header Scroll, Mobile Nav, Modal Booking, FAQ Accordions, Tabs
   ========================================================================== */

// Lead submission — every enquiry is processed centrally by truckbill.in/submit.php
const LEAD_SUBMIT_URL = window.location.hostname.endsWith('.test')
  ? 'https://truckbill.test/submit.php'
  : 'https://www.truckbill.in/submit.php';
const LEAD_TRACKING_KEY = 'fleetmores_lead_tracking';
const LEAD_SUBMIT_ERROR = 'We could not submit your request right now. Please try again or call +91 97844 51256.';

const getLeadTracking = () => {
  try {
    const stored = sessionStorage.getItem(LEAD_TRACKING_KEY);
    if (stored) return JSON.parse(stored);
  } catch (err) {}

  const params = new URLSearchParams(window.location.search);
  const data = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    landing_url: window.location.href,
    referrer: document.referrer || ''
  };

  try {
    sessionStorage.setItem(LEAD_TRACKING_KEY, JSON.stringify(data));
  } catch (err) {}

  return data;
};

const submitLead = (form, formName) => {
  const body = new URLSearchParams(new FormData(form));
  body.set('userType', 'Demo Request');
  body.set('form_name', formName);
  body.set('page_url', window.location.href);

  const tracking = getLeadTracking();
  Object.keys(tracking).forEach((key) => {
    if (tracking[key]) body.set(key, tracking[key]);
  });

  return fetch(LEAD_SUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  })
    .then((response) => response.json().catch(() => ({})), () => ({}))
    .then((result) => {
      if (result && result.success) return result;
      throw new Error((result && result.message) || LEAD_SUBMIT_ERROR);
    });
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (ch) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
));

getLeadTracking();

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
    if (e && e.preventDefault) e.preventDefault();
    const form = e ? (e.target || e.srcElement) : document.getElementById('demoBookingForm');
    if (!form) return false;
    
    const getVal = (id, nameAttr) => {
      if (form) {
        const el = form.querySelector(`[name="${nameAttr}"]`) || form.querySelector(`#${id}`);
        if (el) return el.value.trim();
      }
      const el = document.getElementById(id);
      return el ? el.value.trim() : '';
    };

    const name = getVal('demoName', 'name') || getVal('contactName', 'name') || 'Guest';
    const email = getVal('demoEmail', 'email') || getVal('contactEmail', 'email');
    const phone = getVal('demoPhone', 'phone') || getVal('contactPhone', 'phone');
    const company = getVal('demoCompany', 'company') || getVal('contactCompany', 'company') || 'Your Transport Company';
    const city = getVal('demoCity', 'city') || getVal('contactCity', 'city');
    const state = getVal('demoState', 'state') || getVal('contactState', 'state');
    const remark = getVal('demoRemark', 'remark') || getVal('contactRemark', 'remark') || '';

    if (!name || !email || !phone || !company || !city || !state) {
      alert('Please fill in all required fields (Name, Email, Mobile, Company, City, State).');
      return false;
    }

    const btn = form ? form.querySelector('button[type="submit"]') : document.getElementById('demoSubmitBtn');
    const btnHtml = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span>Scheduling Your Live Demo...</span>';
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      company: escapeHtml(company),
      city: escapeHtml(city),
      state: escapeHtml(state)
    };

    submitLead(form, form.id === 'contactPageForm' ? 'contact_page' : 'demo_modal').then(() => {
      const modalOverlay = document.getElementById('demoModal');
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        const modalBody = modalOverlay.querySelector('.modal-body');
        if (modalBody) {
          modalBody.innerHTML = `
            <div style="text-align: center; padding: 30px 10px;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background: #F3F6FE; color: #0025E9; font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 2px solid #DCE4FD;">✓</div>
              <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Demo Confirmed, ${safe.name}!</h3>
              <p style="color: #5A5A5A; margin-bottom: 24px;">Our TruckBill specialist will connect with you on <strong>${safe.phone}</strong> and <strong>${safe.email}</strong> for <strong>${safe.company}</strong> (${safe.city}, ${safe.state}).</p>
              <div style="margin-bottom: 20px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                <a href="https://wa.me/919784451256?text=Hi%20FleetMores%20Team%2C%20I%20requested%20a%20TruckBill%20demo%20for%20${encodeURIComponent(company)}" target="_blank" rel="noopener" class="btn-sassy btn-sassy-primary" style="padding: 0.6rem 1.4rem;"><span>WhatsApp Us</span></a>
                <button class="btn-sassy btn-sassy-outline" onclick="location.reload()" style="padding: 0.6rem 1.4rem;"><span>Close</span></button>
              </div>
              <div style="font-size: 0.85rem; color: #6B7280;">Need immediate assistance? Call <a href="tel:+919784451256" style="color: #0025E9; font-weight: 700;">+91 97844 51256</a> / <a href="tel:+919001010007" style="color: #0025E9; font-weight: 700;">+91 9001010007</a></div>
            </div>
          `;
          return;
        }
      }

      if (form) {
        form.innerHTML = `
          <div style="text-align: center; padding: 36px 20px; background: #F8FAFC; border-radius: 16px; border: 1.5px solid #E2E8F0;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: #EEF2FF; color: #0025E9; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">✓</div>
            <h3 style="font-size: 1.4rem; margin-bottom: 8px;">Thank You, ${safe.name}!</h3>
            <p style="color: #4B5563; margin-bottom: 20px;">Your TruckBill demo request has been received for <strong>${safe.company}</strong>. Our specialist will call you on <strong>${safe.phone}</strong>.</p>
            <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
              <a href="https://wa.me/919784451256?text=Hi%20FleetMores%20Team%2C%20I%20requested%20a%20demo%20for%20${encodeURIComponent(company)}" target="_blank" rel="noopener" class="btn-sassy btn-sassy-primary py-2 px-4" style="font-size: 0.9rem;"><span>WhatsApp Us Now</span></a>
              <a href="tel:+919784451256" class="btn-sassy btn-sassy-outline py-2 px-4" style="font-size: 0.9rem;"><span>Call +91 97844 51256</span></a>
            </div>
          </div>
        `;
      }
    }).catch((err) => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = btnHtml;
      }
      alert(err.message || LEAD_SUBMIT_ERROR);
    });

    return false;
  };
});
