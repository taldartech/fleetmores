<div class="fm-modal-backdrop" id="demoModal" role="dialog" aria-modal="true">
  <div class="fm-modal-card">
    <button class="fm-modal-close" id="closeDemoModal" aria-label="Close modal">✕</button>
    <div id="demoFormContainer">
      <span class="eyebrow mb-1">SCHEDULE WALKTHROUGH</span>
      <h3 class="h4 text-white mb-2">See TruckBill in Action</h3>
      <p class="text-muted-dark small mb-4">
        Tell us a little about your transport business and we'll demonstrate how TruckBill fits your exact dispatch, billing, and settlement workflows.
      </p>

      <form id="fleetmoresDemoForm" novalidate>
        <div class="fm-form-row">
          <div class="fm-form-group">
            <label class="fm-label">Your Name *</label>
            <input type="text" class="fm-input" name="name" required placeholder="Full Name">
          </div>
          <div class="fm-form-group">
            <label class="fm-label">Transport / Company Name *</label>
            <input type="text" class="fm-input" name="company" required placeholder="Company Name">
          </div>
        </div>

        <div class="fm-form-row">
          <div class="fm-form-group">
            <label class="fm-label">Mobile Number *</label>
            <input type="tel" class="fm-input" name="mobile" required placeholder="10-digit Mobile">
          </div>
          <div class="fm-form-group">
            <label class="fm-label">Work Email</label>
            <input type="email" class="fm-input" name="email" placeholder="name@company.com">
          </div>
        </div>

        <div class="fm-form-row">
          <div class="fm-form-group">
            <label class="fm-label">Business Type</label>
            <select class="fm-select" name="businessType">
              <option value="Transporter">Transporter (Fleet + Market Hires)</option>
              <option value="Fleet Owner">Fleet Owner (Dedicated Trucks)</option>
              <option value="Broker / Agent">Freight Broker / Transport Agent</option>
              <option value="PTL / Parchun">PTL / Parchun (Part-Load)</option>
              <option value="Logistics">Logistics Enterprise / 3PL</option>
            </select>
          </div>
          <div class="fm-form-group">
            <label class="fm-label">Fleet Size / Monthly Trips</label>
            <select class="fm-select" name="vehicleCount">
              <option value="1-5 Vehicles">1 - 5 Vehicles</option>
              <option value="6-20 Vehicles">6 - 20 Vehicles</option>
              <option value="21-50 Vehicles">21 - 50 Vehicles</option>
              <option value="50+ Vehicles">50+ Vehicles</option>
              <option value="Asset-Light Broker">Asset-Light / Broker (Zero Owned)</option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn-fm btn-fm-teal w-100 py-3 mt-3">
          BOOK MY DEMO
        </button>
        <p class="text-center font-monospace text-muted-dark small mt-2 mb-0" style="font-size: 0.72rem;">
          🔒 Response within 2 business hours. Zero spam guarantee.
        </p>
      </form>
    </div>

    <div id="demoSuccessState" style="display: none; text-align: center; padding: 1.5rem 0;">
      <div style="width: 58px; height: 58px; border-radius: 50%; background: rgba(58, 166, 140, 0.15); border: 2px solid var(--fm-teal); color: var(--fm-teal); display: inline-flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 1rem;">
        ✓
      </div>
      <h3 class="h4 text-white mb-2">Demo Request Confirmed!</h3>
      <p class="text-muted-dark small mb-4">
        Our transportation solutions specialist will connect with you shortly. For immediate assistance, message us directly on WhatsApp.
      </p>
      <a href="#" id="instantWhatsAppCta" target="_blank" rel="noopener" class="btn-fm btn-fm-teal w-100 py-3">
        Chat on WhatsApp Now
      </a>
    </div>
  </div>
</div>
