export function Blk() {
  return (
    <section className="blk bgw" aria-labelledby="uc">
      <div className="dw-wrap center">
        <p className="eyebrow">Accepted assets</p>
        <h2 id="uc">
          Eligible <span className="hl">collateral securities.</span>
        </h2>
        <ul className="plans" style={{ textAlign: 'left' }}>
          <li className="plan">
            <span className="dw-ic num">01</span>
            <h3>Listed shares</h3>
            <p>Loans offered against a wide range of listed shares.</p>
          </li>
          <li className="plan">
            <span className="dw-ic num">02</span>
            <h3>Mutual funds</h3>
            <p>
              Loans against equity funds, debt funds, fixed maturity plans, balanced funds, arbitrage funds and target
              maturity funds.
            </p>
          </li>
          <li className="plan">
            <span className="dw-ic num">03</span>
            <h3>REITs and InvITs</h3>
            <p>
              Funding against units of REITs and InvITs, and selectively against alternative investment funds and
              unlisted shares.
            </p>
          </li>
          <li className="plan">
            <span className="dw-ic num">04</span>
            <h3>Bonds</h3>
            <p>Loans against PSU and private sector bonds and government securities.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
