export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against property <em>EMI examples</em>
          </h2>
          <p className="body">
            Sample EMIs at 11% p.a. on a reducing balance. Your own rate and tenure change the result.
          </p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">₹25 lakh</th>
                <th scope="col">₹50 lakh</th>
                <th scope="col">₹1 crore</th>
                <th scope="col">₹2 crore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">EMI for 5 years</th>
                <td data-label="₹25 lakh">₹54,356</td>
                <td data-label="₹50 lakh">₹1,08,712</td>
                <td data-label="₹1 crore">₹2,17,424</td>
                <td data-label="₹2 crore">₹4,34,848</td>
              </tr>
              <tr>
                <th scope="row">EMI for 10 years</th>
                <td data-label="₹25 lakh">₹34,438</td>
                <td data-label="₹50 lakh">₹68,875</td>
                <td data-label="₹1 crore">₹1,37,750</td>
                <td data-label="₹2 crore">₹2,75,500</td>
              </tr>
              <tr>
                <th scope="row">EMI for 15 years</th>
                <td data-label="₹25 lakh">₹28,415</td>
                <td data-label="₹50 lakh">₹56,830</td>
                <td data-label="₹1 crore">₹1,13,660</td>
                <td data-label="₹2 crore">₹2,27,319</td>
              </tr>
              <tr>
                <th scope="row">Total interest for 15 years</th>
                <td data-label="₹25 lakh">₹26,14,686</td>
                <td data-label="₹50 lakh">₹52,29,372</td>
                <td data-label="₹1 crore">₹1,04,58,745</td>
                <td data-label="₹2 crore">₹2,09,17,490</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
