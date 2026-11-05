export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against securities <em>interest examples</em>
          </h2>
          <p className="body">
            Sample figures for a 12 month loan at 10.5% p.a. on an interest-only structure. Your own rate and tenure
            change the result.
          </p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">₹5 lakh</th>
                <th scope="col">₹10 lakh</th>
                <th scope="col">₹25 lakh</th>
                <th scope="col">₹1 crore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monthly interest</th>
                <td data-label="₹5 lakh">₹4,375</td>
                <td data-label="₹10 lakh">₹8,750</td>
                <td data-label="₹25 lakh">₹21,875</td>
                <td data-label="₹1 crore">₹87,500</td>
              </tr>
              <tr>
                <th scope="row">Total interest for 12 months</th>
                <td data-label="₹5 lakh">₹52,500</td>
                <td data-label="₹10 lakh">₹1,05,000</td>
                <td data-label="₹25 lakh">₹2,62,500</td>
                <td data-label="₹1 crore">₹10,50,000</td>
              </tr>
              <tr>
                <th scope="row">Total payable at maturity</th>
                <td data-label="₹5 lakh">₹5,52,500</td>
                <td data-label="₹10 lakh">₹11,05,000</td>
                <td data-label="₹25 lakh">₹27,62,500</td>
                <td data-label="₹1 crore">₹1,10,50,000</td>
              </tr>
              <tr>
                <th scope="row">Shares needed at 50% LTV</th>
                <td data-label="₹5 lakh">₹10,00,000</td>
                <td data-label="₹10 lakh">₹20,00,000</td>
                <td data-label="₹25 lakh">₹50,00,000</td>
                <td data-label="₹1 crore">₹2,00,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
