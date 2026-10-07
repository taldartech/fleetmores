<!-- DEMO MODAL COMPONENT (Sassy Home-3 Style) -->
<div class="demo-modal-overlay" id="demoModalOverlay" role="dialog" aria-modal="true" aria-labelledby="modalHeading">
  <div class="demo-modal-card">
    <div class="modal-header">
      <div class="sassy-badge-pill mb-2">
        <span class="pill-dot"></span>
        <span>LIVE 1-ON-1 PRODUCT DEMO</span>
      </div>
      <h3 id="modalHeading" style="font-size: 1.45rem; font-weight: 700; margin-bottom: 4px;">Experience TruckBill in Action</h3>
      <p style="font-size: 0.9rem; color: var(--fm-muted-text); margin: 0;">See how 500+ transport hubs cut billing time by 70%.</p>
      <button class="modal-close-btn" data-close-demo aria-label="Close Modal">✕</button>
    </div>

    <div class="modal-body">
      <form id="demoBookingForm" onsubmit="return handleDemoSubmit(event);">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <div class="form-group-fm">
              <label class="form-label-fm" for="demoName">Your Full Name *</label>
              <input type="text" class="form-input-fm" id="demoName" required placeholder="e.g. Rajesh Sharma">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group-fm">
              <label class="form-label-fm" for="demoPhone">Mobile / WhatsApp *</label>
              <input type="tel" class="form-input-fm" id="demoPhone" required placeholder="e.g. 98765 43210">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group-fm">
              <label class="form-label-fm" for="demoCompany">Transport Company Name *</label>
              <input type="text" class="form-input-fm" id="demoCompany" required placeholder="e.g. Sharma Roadways Pvt Ltd">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group-fm">
              <label class="form-label-fm" for="demoFleetSize">Fleet / Operational Volume</label>
              <select class="form-select-fm" id="demoFleetSize">
                <option value="1-10">1 – 10 Trucks / LRs per day</option>
                <option value="11-30">11 – 30 Trucks</option>
                <option value="31-100" selected>31 – 100 Trucks</option>
                <option value="100+">100+ Enterprise Fleet</option>
                <option value="broker">Broker / Agency (Market Vehicles)</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group-fm">
              <label class="form-label-fm" for="demoSlot">Preferred Time Slot</label>
              <select class="form-select-fm" id="demoSlot">
                <option value="today-afternoon">Today Afternoon (2:00 PM – 5:00 PM)</option>
                <option value="tomorrow-morning">Tomorrow Morning (10:30 AM – 1:00 PM)</option>
                <option value="tomorrow-afternoon">Tomorrow Afternoon</option>
                <option value="custom">Custom Time (Our team will call you)</option>
              </select>
            </div>
          </div>
        </div>

        <div style="margin-top: 24px;">
          <button type="submit" class="btn-sassy btn-sassy-primary w-100 py-3" id="demoSubmitBtn">
            <span>Confirm Live Demo Booking</span> <span class="btn-arrow">→</span>
          </button>
        </div>

        <div style="text-align: center; margin-top: 14px;">
          <span style="font-size: 0.8rem; color: var(--fm-muted-text);">
            🔒 100% Free • No Credit Card Required • Instant WhatsApp Confirmation
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
