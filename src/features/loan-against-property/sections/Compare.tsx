export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Loan against property compared with <em>other loans</em>
          </h2>
          <p className="body">How borrowing against your property differs from a home loan and from a personal loan.</p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">Loan against property</th>
                <th scope="col">Home loan</th>
                <th scope="col">Personal loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Security</th>
                <td data-label="Loan against property">A property you already own</td>
                <td data-label="Home loan">The property you are buying</td>
                <td data-label="Personal loan">None</td>
              </tr>
              <tr>
                <th scope="row">Use of funds</th>
                <td data-label="Loan against property">Business or personal needs</td>
                <td data-label="Home loan">Buying or building a home</td>
                <td data-label="Personal loan">Personal needs</td>
              </tr>
              <tr>
                <th scope="row">Loan amount based on</th>
                <td data-label="Loan against property">Property value and your income</td>
                <td data-label="Home loan">Property cost and your income</td>
                <td data-label="Personal loan">Your income and profile</td>
              </tr>
              <tr>
                <th scope="row">Main risk</th>
                <td data-label="Loan against property">The property is mortgaged</td>
                <td data-label="Home loan">The home is mortgaged</td>
                <td data-label="Personal loan">Repayment from your income</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
