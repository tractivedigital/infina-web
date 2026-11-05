export function Rates() {
  return (
    <section className="band" id="rates">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Real estate financing interest rate, fees and <em>charges</em>
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
                    <small>Confirmed in your sanction letter.</small>
                  </th>
                  <td>
                    Set for your project
                    <span className="cf">To confirm</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Due diligence cost</th>
                  <td>At actuals</td>
                </tr>
                <tr>
                  <th scope="row">Stamp duty and other charges</th>
                  <td>At actuals</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="rb-c">
            <p className="rb-k">Step three</p>
            <table className="rb-t">
              <caption>If you repay early</caption>
              <tbody>
                <tr>
                  <th scope="row">Prepayment penalty</th>
                  <td>Up to 5%</td>
                </tr>
                <tr>
                  <th scope="row">Applicable taxes</th>
                  <td>Charged extra</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
        <p className="rt-meta">
          Charges as listed in Infina&apos;s list of charges for real estate financing, last reviewed 17 January 2025.
          Applicable taxes are charged extra.
          <span className="cf">To confirm</span>
        </p>
      </div>
    </section>
  );
}
