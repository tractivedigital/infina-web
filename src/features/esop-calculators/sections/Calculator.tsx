export function Calculator() {
  return (
    <section className="ec-sec" id="calculator" aria-label="ESOP funding calculator">
      <div id="esopcalc">
        <div className="ec-wrap">
          <div className="grid">
            <div>
              <div className="ec-card">
                <div className="ec-field">
                  <label>Current Market Price (CMP)</label>
                  <div className="input-row">
                    <span className="prefix">₹</span>
                    <input id="cmp" type="number" defaultValue="200" min="0" />
                  </div>
                </div>
                <div className="ec-field">
                  <label>Exercise Price</label>
                  <div className="input-row">
                    <span className="prefix">₹</span>
                    <input id="ex" type="number" defaultValue="100" min="0" />
                  </div>
                </div>
                <div className="ec-field">
                  <label>Exercise Quantity</label>
                  <div className="input-row">
                    <span className="prefix">#</span>
                    <input id="qty" type="number" defaultValue="1000" min="1" />
                  </div>
                </div>
                <div className="ec-field">
                  <label>
                    Loan Tenure{' '}
                    <span className="num-box">
                      <input id="holdNum" type="number" min="1" max="365" step="1" defaultValue="180" />
                      <span className="num-box-suffix">days</span>
                    </span>
                  </label>
                  <div className="slider-block">
                    <input id="hold" type="range" min="1" max="365" defaultValue="180" step="1" />
                    <div className="range-caption">
                      <span>1 day</span>
                      <span>365 days</span>
                    </div>
                  </div>
                </div>
                <div className="ec-field">
                  <label>
                    Tax Rate{' '}
                    <span className="num-box">
                      <input id="taxNum" type="number" min="30" max="39" step="1" defaultValue="30" />
                      <span className="num-box-suffix">%</span>
                    </span>
                  </label>
                  <div className="subnote">
                    Select your tax rate based on your income slab under the New Tax Regime.
                  </div>
                  <div className="slider-block">
                    <input id="tax" type="range" min="30" max="39" defaultValue="30" />
                    <div className="range-caption">
                      <span>30%</span>
                      <span>39%</span>
                    </div>
                  </div>
                </div>
                <div className="divider-lbl">Key Details</div>
                <div className="kv-list key-details">
                  <div className="kv">
                    <span className="k-main">Infina Funding</span>{' '}
                    <span className="k-def">Lower of 50% CMP or employer payable</span>
                  </div>
                  <div className="kv">
                    <span className="k-main">Documentation Charges</span> <span className="k-def">Rs 999+18% GST</span>
                  </div>
                  <div className="kv proc-row" id="proc-left">
                    <span className="k-main">Processing Fees</span>{' '}
                    <span className="k-def">0.25% of funding + 18% GST</span>
                  </div>
                  <div className="kv">
                    <span className="k-main">Brokerage*</span> <span className="k-def">0.08% + applicable taxes</span>
                  </div>
                </div>
                <div className="divider-lbl">Interest Rate Slabs</div>
                <div className="kv-list">
                  <div className="kv slab-mini active" id="s1">
                    <span>0 – 30 days</span>
                    <b>8.50% p.a.</b>
                  </div>
                  <div className="kv slab-mini active" id="s2">
                    <span>31 – 90 days</span>
                    <b>9.00% p.a.</b>
                  </div>
                  <div className="kv slab-mini active" id="s3">
                    <span>91 – 180 days</span>
                    <b>9.50% p.a.</b>
                  </div>
                  <div className="kv slab-mini" id="s4">
                    <span>181 – 365 days</span>
                    <b>10.50% p.a.</b>
                  </div>
                </div>
                <div className="slab-disclaimer">
                  Please note that the above-mentioned processing fee and rate of interest are for calculation purposes
                  only. The actual rates and fees may vary from one corporate to another.
                </div>
                <div className="slab-disclaimer" style={{ marginTop: '8px' }}>
                  Infina Finance is not a broker, sale of shares is executed through our empanelled brokers.
                </div>
              </div>
            </div>
            <div>
              <div className="ec-card" id="cost-breakup-card">
                <div className="section-title">Cost Breakup</div>
                <div className="formula-row">
                  <span className="lbl">
                    A. Exercise Cost
                    <span className="f">Exercise Price × Qty</span>
                  </span>{' '}
                  <span className="val" id="o-a" data-raw="100000">
                    ₹1,00,000
                  </span>
                </div>
                <div className="formula-row">
                  <span className="lbl">
                    B. Perquisite Tax
                    <span className="f">(CMP - Exercise Price) × Qty × Tax%</span>
                  </span>{' '}
                  <span className="val" id="o-b" data-raw="30000">
                    ₹30,000
                  </span>
                </div>
                <div className="formula-row hero-row" style={{ marginBottom: '8px' }}>
                  <span className="lbl">
                    C. Total Payable to Employer
                    <span className="f">A + B</span>
                  </span>{' '}
                  <span className="val" id="o-c" data-raw="130000">
                    ₹1,30,000
                  </span>
                </div>
                <div className="formula-row hero-row" style={{ marginBottom: '8px' }}>
                  <span className="lbl">
                    D. Infina Funding
                    <span className="f">Lower of 50% CMP or employer payable</span>
                  </span>{' '}
                  <span className="val" id="o-d" data-raw="100000">
                    ₹1,00,000
                  </span>
                </div>
                <div className="formula-row hero-row">
                  <span className="lbl">
                    E. Employee Contribution
                    <span className="f">C - D</span>
                  </span>{' '}
                  <span className="val" id="o-e" data-raw="30000">
                    ₹30,000
                  </span>
                </div>
              </div>
              <div className="ec-card" id="estimated-funding-card">
                <div className="section-title">Estimated Funding Breakup</div>
                <span id="tenure-lbl" style={{ display: 'none' }}>
                  180
                </span>
                <div className="formula-row">
                  <span className="lbl">
                    Estimated Interest
                    <span className="f">Sum of tiered slab interest below</span>
                  </span>{' '}
                  <span className="val" id="o-int" data-raw="4520.54794520548">
                    ₹4,521
                  </span>
                </div>
                <div className="formula-row proc-row" id="proc-right">
                  <span className="lbl">
                    Processing Fees
                    <span className="f">(0.25% x Infina Funding) + 18% GST</span>
                  </span>{' '}
                  <span className="val" id="o-proc" data-raw="295">
                    ₹295
                  </span>
                </div>
                <div className="formula-row">
                  <span className="lbl">
                    Documentation Charges
                    <span className="f">Rs 999+18% GST</span>
                  </span>{' '}
                  <span className="val" id="o-doc">
                    ₹1,179
                  </span>
                </div>
                <div className="formula-row hero-row" style={{ marginBottom: '0' }}>
                  <span className="lbl">Estimated Cost of Funding</span>{' '}
                  <span className="val" id="o-net" data-raw="5994.54794520548">
                    ₹5,995
                  </span>
                </div>
                <div className="divider-lbl" style={{ marginTop: '22px' }}>
                  Interest Cost Breakup
                  <span id="tenure-lbl-2" style={{ display: 'none' }}>
                    180
                  </span>
                </div>
                <table className="slab-table">
                  <thead>
                    <tr>
                      <th>Slab</th>
                      <th>Rate</th>
                      <th>Days</th>
                      <th>Interest</th>
                    </tr>
                  </thead>
                  <tbody id="slab-body">
                    <tr className="active">
                      <td>0–30 days</td>
                      <td>8.50%</td>
                      <td>30</td>
                      <td>₹699</td>
                    </tr>
                    <tr className="active">
                      <td>31–90 days</td>
                      <td>9.00%</td>
                      <td>60</td>
                      <td>₹1,479</td>
                    </tr>
                    <tr className="active">
                      <td>91–180 days</td>
                      <td>9.50%</td>
                      <td>90</td>
                      <td>₹2,342</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cta-row">
                  <button className="cta">Apply Now</button>{' '}
                  <button className="cta ghost" id="export-btn">
                    ⬇ Export to Excel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="notes">
            <div className="notes-title">Important Notes</div>
            <div className="notes-grid">
              <div className="note-item">
                <h4>Infina Funding</h4>
                <p>Infina provides funding of up to 50% of the Current Market Price (CMP) of the eligible security.</p>
              </div>
              <div className="note-item">
                <h4>Exercise Price</h4>
                <p>
                  The fixed price at which you can purchase shares when you exercise your ESOPs. This price is set when
                  the ESOPs are granted and is typically lower than the share&apos;s current Fair Market Value (FMV).
                </p>
              </div>
              <div className="note-item">
                <h4>Employee Contribution</h4>
                <p>
                  Any amount exceeding 50% of the Current Market Price (CMP) and payable to the employer will be treated
                  as the employee&apos;s contribution, payable either in cash or by pledging additional securities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
