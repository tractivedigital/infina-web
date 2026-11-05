export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            ESOP financing compared with <em>other ways to exercise</em>
          </h2>
          <p className="body">
            How financing your exercise differs from paying from savings and from a cashless exercise.
          </p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">ESOP financing</th>
                <th scope="col">Paying from savings</th>
                <th scope="col">Cashless exercise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Cash you need upfront</th>
                <td data-label="ESOP financing">Your contribution after the funding</td>
                <td data-label="Paying from savings">The full exercise cost and tax</td>
                <td data-label="Cashless exercise">None, but shares are sold</td>
              </tr>
              <tr>
                <th scope="row">Shares you keep</th>
                <td data-label="ESOP financing">All the shares you exercise</td>
                <td data-label="Paying from savings">All the shares you exercise</td>
                <td data-label="Cashless exercise">Fewer, as some are sold to cover the cost</td>
              </tr>
              <tr>
                <th scope="row">Cost</th>
                <td data-label="ESOP financing">Interest and charges</td>
                <td data-label="Paying from savings">No financing cost</td>
                <td data-label="Cashless exercise">The value of the shares sold</td>
              </tr>
              <tr>
                <th scope="row">Main risk</th>
                <td data-label="ESOP financing">Repayment, with shares pledged</td>
                <td data-label="Paying from savings">A large cash outflow</td>
                <td data-label="Cashless exercise">Giving up future gains</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
