export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            ESOP funding <em>cost by tenure</em>
          </h2>
          <p className="body">
            Cost of funding for the same example (1,000 options, ₹100 exercise price, ₹200 CMP, 30% tax) at different
            tenures. Your own inputs change the result.
          </p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">30 days</th>
                <th scope="col">90 days</th>
                <th scope="col">180 days</th>
                <th scope="col">365 days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Infina funding</th>
                <td data-label="30 days">₹1,00,000</td>
                <td data-label="90 days">₹1,00,000</td>
                <td data-label="180 days">₹1,00,000</td>
                <td data-label="365 days">₹1,00,000</td>
              </tr>
              <tr>
                <th scope="row">Interest</th>
                <td data-label="30 days">₹699</td>
                <td data-label="90 days">₹2,178</td>
                <td data-label="180 days">₹4,521</td>
                <td data-label="365 days">₹9,842</td>
              </tr>
              <tr>
                <th scope="row">Processing fee and documentation</th>
                <td data-label="30 days">₹1,474</td>
                <td data-label="90 days">₹1,474</td>
                <td data-label="180 days">₹1,474</td>
                <td data-label="365 days">₹1,474</td>
              </tr>
              <tr>
                <th scope="row">Estimated cost of funding</th>
                <td data-label="30 days">₹2,173</td>
                <td data-label="90 days">₹3,652</td>
                <td data-label="180 days">₹5,995</td>
                <td data-label="365 days">₹11,316</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
