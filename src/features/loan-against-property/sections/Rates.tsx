export function Rates() {
  return (
    <section className="band" id="rates">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against property interest rate, fees and <em>charges</em>
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
                  <th scope="row">Processing fee</th>
                  <td>Up to 3%</td>
                </tr>
                <tr>
                  <th scope="row">
                    Legal and tech fee
                    <small>Loan up to ₹1 crore</small>
                  </th>
                  <td>₹5,000 per property</td>
                </tr>
                <tr>
                  <th scope="row">
                    Legal and tech fee
                    <small>Loan above ₹1 crore and up to ₹10 crore</small>
                  </th>
                  <td>₹8,000 per property</td>
                </tr>
                <tr>
                  <th scope="row">
                    Legal and tech fee
                    <small>Loan above ₹10 crore</small>
                  </th>
                  <td>₹10,000 per property</td>
                </tr>
                <tr>
                  <th scope="row">Stamp duty</th>
                  <td>At actuals</td>
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
                    <small>Depends on your profile, the property, the amount and the tenure.</small>
                  </th>
                  <td>Set at sanction</td>
                </tr>
                <tr>
                  <th scope="row">Statement, repayment swap or interest certificate</th>
                  <td>₹500 each</td>
                </tr>
                <tr>
                  <th scope="row">Duplicate schedule, NOC or agreement</th>
                  <td>₹500 each</td>
                </tr>
                <tr>
                  <th scope="row">Scan copy of documents</th>
                  <td>₹2,500</td>
                </tr>
                <tr>
                  <th scope="row">
                    CERSAI
                    <small>Or as the central registry stipulates from time to time.</small>
                  </th>
                  <td>₹100</td>
                </tr>
                <tr>
                  <th scope="row">
                    Conversion fee
                    <small>Minimum ₹10,000</small>
                  </th>
                  <td>0.50% of principal outstanding</td>
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
                  <th scope="row">Part payment up to 25% in a financial year</th>
                  <td>Nil</td>
                </tr>
                <tr>
                  <th scope="row">
                    Part payment above 25%
                    <small>On the amount above 25%.</small>
                  </th>
                  <td>4%</td>
                </tr>
                <tr>
                  <th scope="row">
                    Full prepayment or foreclosure
                    <small>Floating rate loans to individuals for non-business use: nil.</small>
                  </th>
                  <td>4%</td>
                </tr>
                <tr>
                  <th scope="row">Document handling and retrieval</th>
                  <td>₹5,000</td>
                </tr>
                <tr>
                  <th scope="row">List of documents statement</th>
                  <td>₹1,000</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
        <p className="rt-meta">
          Charges as published in Infina&apos;s fees and charges matrix, last reviewed 5 September 2026. Applicable
          taxes are charged extra.
          <span className="cf">To confirm</span>
        </p>
        <a className="rt-dl" href="/docs/lap-charges.pdf" rel="noopener">
          Download the full fees and charges matrix (PDF)
        </a>
      </div>
    </section>
  );
}
