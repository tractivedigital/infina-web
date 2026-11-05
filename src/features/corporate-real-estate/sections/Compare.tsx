export function Compare() {
  return (
    <section className="sec" id="compare">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Developer finance compared with <em>other ways to fund a project</em>
          </h2>
          <p className="body">
            How a structured developer loan differs from relying on sales proceeds or your own equity.
          </p>
        </div>
        <div className="cmp">
          <table className="cmp-t">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr">Feature</span>
                </th>
                <th scope="col">Infina developer finance</th>
                <th scope="col">Sales proceeds alone</th>
                <th scope="col">Promoter equity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Timing of funds</th>
                <td data-label="Infina developer finance">Matched to the stage of the project</td>
                <td data-label="Sales proceeds alone">Depends on bookings and collections</td>
                <td data-label="Promoter equity">Depends on your own resources</td>
              </tr>
              <tr>
                <th scope="row">Scale</th>
                <td data-label="Infina developer finance">Sized to the project, against security and escrow</td>
                <td data-label="Sales proceeds alone">Limited to what sales bring in</td>
                <td data-label="Promoter equity">Limited by your balance sheet</td>
              </tr>
              <tr>
                <th scope="row">Cost</th>
                <td data-label="Infina developer finance">Interest and charges</td>
                <td data-label="Sales proceeds alone">No interest cost</td>
                <td data-label="Promoter equity">No interest cost, but it ties up your capital</td>
              </tr>
              <tr>
                <th scope="row">Main risk</th>
                <td data-label="Infina developer finance">Repayment from the project&apos;s cash flows</td>
                <td data-label="Sales proceeds alone">Delays if bookings slow down</td>
                <td data-label="Promoter equity">Less capital for your other projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
