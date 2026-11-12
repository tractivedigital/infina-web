export function Content() {
  return (
    <section className="sec" style={{ paddingTop: '8px', background: 'transparent' }}>
      <div className="wrapx">
        <div className="lg-tw" style={{ maxWidth: '860px' }}>
          <table>
            <thead>
              <tr>
                <th>State / UT</th>
                <th>Capital</th>
                <th>GST number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maharashtra</td>
                <td>Mumbai</td>
                <td>27AACCM1561D1ZU</td>
              </tr>
              <tr>
                <td>New Delhi</td>
                <td>New Delhi</td>
                <td>07AACCM1561D1ZW</td>
              </tr>
              <tr>
                <td>Gujarat</td>
                <td>Gandhinagar</td>
                <td>24AACCM1561D1Z0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
