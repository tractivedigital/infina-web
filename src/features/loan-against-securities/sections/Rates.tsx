export function Rates() {
  return (
    <section className="band" id="rates">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against securities interest rate, fees and <em>charges</em>
          </h2>
          <p className="body">
            Every charge in one place. These are the charges that appear in your loan agreement or sanction letter.
          </p>
        </div>
        <div className="rb">
          <article className="rb-c">
            <p className="rb-k">Step one</p>
            <table className="rb-t">
              <caption>When you apply</caption>
              <tbody>
                <tr>
                  <th scope="row">
                    Processing fee
                    <small>Non-refundable. Includes commitment fees.</small>
                  </th>
                  <td>Up to 3% of the loan amount</td>
                </tr>
                <tr>
                  <th scope="row">Document charges</th>
                  <td>Up to ₹50,000</td>
                </tr>
                <tr>
                  <th scope="row">Stamp duty and other charges</th>
                  <td>At actual</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="rb-c">
            <p className="rb-k">Step two</p>
            <table className="rb-t">
              <caption>While you borrow</caption>
              <tbody>
                <tr>
                  <th scope="row">
                    Interest rate
                    <small>The rate depends on loan amount, tenure and the securities pledged.</small>
                  </th>
                  <td>From 10.5% p.a.</td>
                </tr>
                <tr>
                  <th scope="row">Pledge or lien creation</th>
                  <td>Up to ₹999 per instruction</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="rb-c">
            <p className="rb-k">Step three</p>
            <table className="rb-t">
              <caption>When you repay</caption>
              <tbody>
                <tr>
                  <th scope="row">
                    Prepayment charge
                    <small>No foreclosure charge on Flexi loans.</small>
                  </th>
                  <td>Up to 3%</td>
                </tr>
                <tr>
                  <th scope="row">
                    Taxes
                    <small>Applicable taxes are collected in addition to the charges above.</small>
                  </th>
                  <td>Charged extra</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
        <p className="rt-meta">
          Charges as published in Infina&apos;s list of charges, last reviewed 17 January 2025.
          <span className="cf">To confirm</span>
        </p>
        <a className="rt-dl" href="/docs/list-of-charges-las-esop-unsecured.pdf" rel="noopener">
          Download the full list of charges (PDF)
        </a>
      </div>
    </section>
  );
}
