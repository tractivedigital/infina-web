export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against securities compared with <em>other options</em>
          </h2>
          <p className="body">
            How borrowing against your portfolio differs from a personal loan and from selling your investments.
          </p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">Loan against securities</th>
                <th scope="col">Personal loan</th>
                <th scope="col">Selling investments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">What you give</th>
                <td data-label="Loan against securities">Securities pledged as security</td>
                <td data-label="Personal loan">Nothing</td>
                <td data-label="Selling investments">Your investments</td>
              </tr>
              <tr>
                <th scope="row">Your investments</th>
                <td data-label="Loan against securities">Stay in your name</td>
                <td data-label="Personal loan">Not affected</td>
                <td data-label="Selling investments">Sold, so you lose future growth</td>
              </tr>
              <tr>
                <th scope="row">Use of funds</th>
                <td data-label="Loan against securities">Business or personal needs</td>
                <td data-label="Personal loan">Personal needs</td>
                <td data-label="Selling investments">Any need</td>
              </tr>
              <tr>
                <th scope="row">Main risk</th>
                <td data-label="Loan against securities">A fall in value can trigger a margin call</td>
                <td data-label="Personal loan">Repayment from your income</td>
                <td data-label="Selling investments">Missing future gains</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
