export function Rates() {
  return (
    <section className="band" id="rates">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            ESOP financing interest rate, fees and <em>charges</em>
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
                    <span className="cf">To confirm</span>
                  </th>
                  <td>0.25% of funding plus GST</td>
                </tr>
                <tr>
                  <th scope="row">
                    Documentation charge
                    <span className="cf">To confirm</span>
                  </th>
                  <td>₹999 plus 18% GST</td>
                </tr>
                <tr>
                  <th scope="row">
                    Brokerage on sale of shares
                    <small>Infina is not a broker. Shares are sold through its empanelled brokers.</small>
                  </th>
                  <td>0.08% plus taxes</td>
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
                    Interest, 0 to 30 days
                    <small>
                      <span className="cf">Rates need sign-off</span>
                    </small>
                  </th>
                  <td>8.50% p.a.</td>
                </tr>
                <tr>
                  <th scope="row">Interest, 31 to 90 days</th>
                  <td>9.00% p.a.</td>
                </tr>
                <tr>
                  <th scope="row">Interest, 91 to 180 days</th>
                  <td>9.50% p.a.</td>
                </tr>
                <tr>
                  <th scope="row">Interest, 181 to 365 days</th>
                  <td>10.50% p.a.</td>
                </tr>
                <tr>
                  <th scope="row">Pledge or lien invocation</th>
                  <td>₹150 per ISIN</td>
                </tr>
                <tr>
                  <th scope="row">Sale of shares</th>
                  <td>₹0.10 per share</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="rb-c">
            <p className="rb-k">Step three</p>
            <table className="rb-t">
              <caption>If a payment is late</caption>
              <tbody>
                <tr>
                  <th scope="row">Penal charges</th>
                  <td>9%</td>
                </tr>
                <tr>
                  <th scope="row">Delay in payment</th>
                  <td>9%</td>
                </tr>
                <tr>
                  <th scope="row">Delay in pledge creation</th>
                  <td>9%</td>
                </tr>
                <tr>
                  <th scope="row">Cheque bounce</th>
                  <td>₹500</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
        <p className="rt-meta">
          Charges as listed on Infina&apos;s website. Applicable taxes are charged extra. Actual rates and fees can vary
          from one employer to another.
          <span className="cf">To confirm</span>
        </p>
      </div>
    </section>
  );
}
