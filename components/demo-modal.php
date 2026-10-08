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
                <label class="form-label-fm" for="demoName">Name *</label>
                <input type="text" class="form-input-fm" id="demoName" name="name" required placeholder="e.g. Rajesh Sharma" autocomplete="name">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group-fm">
                <label class="form-label-fm" for="demoEmail">Email *</label>
                <input type="email" class="form-input-fm" id="demoEmail" name="email" required placeholder="e.g. rajesh@company.com" autocomplete="email">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group-fm">
                <label class="form-label-fm" for="demoPhone">Mobile *</label>
                <input type="tel" class="form-input-fm" id="demoPhone" name="phone" required placeholder="e.g. 98765 43210" autocomplete="tel">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group-fm">
                <label class="form-label-fm" for="demoCompany">Company *</label>
                <input type="text" class="form-input-fm" id="demoCompany" name="company" required placeholder="e.g. Sharma Roadways Pvt Ltd" autocomplete="organization">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group-fm">
                <label class="form-label-fm" for="demoCity">City *</label>
                <input type="text" class="form-input-fm" id="demoCity" name="city" required placeholder="e.g. Jaipur, Mumbai, Ahmedabad" autocomplete="address-level2">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group-fm">
                <label class="form-label-fm" for="demoState">State *</label>
                <input type="text" class="form-input-fm" id="demoState" name="state" required placeholder="e.g. Rajasthan, Maharashtra" autocomplete="address-level1">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group-fm">
                <label class="form-label-fm" for="demoRemark">Remark <span style="font-weight: 400; color: var(--fm-muted-text); font-size: 0.85rem;">(Optional)</span></label>
                <textarea class="form-input-fm" id="demoRemark" name="remark" rows="2" placeholder="Any specific requirements or questions (optional)" style="min-height: 70px; resize: vertical;"></textarea>
              </div>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <button type="submit" class="btn-sassy btn-sassy-primary w-100 py-3" id="demoSubmitBtn">
              <span>Schedule Free Demo</span> <span class="btn-arrow">→</span>
            </button>
          </div>

          <div style="text-align: center; margin-top: 14px;">
            <span style="font-size: 0.82rem; color: var(--fm-muted-text);">
              🔒 100% Free • No Credit Card • Call us: <a href="tel:+919784451256" style="color: var(--fm-primary); font-weight: 600;">+91 97844 51256</a> / <a href="tel:+919001010007" style="color: var(--fm-primary); font-weight: 600;">+91 9001010007</a>
            </span>
          </div>
        </form>
    </div>
  </div>
</div>
