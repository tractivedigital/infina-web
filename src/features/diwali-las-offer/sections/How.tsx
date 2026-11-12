export function How() {
  return (
    <section className="how" id="how" aria-labelledby="hw">
      <div className="dw-wrap center">
        <p className="eyebrow">How it works</p>
        <h2 id="hw">
          From sign-up to <span className="hl">your limit.</span>
        </h2>
        <ol className="dw-steps" style={{ textAlign: 'left' }}>
          <li>
            <span className="dw-n">01</span>
            <h3>Sign up</h3>
            <p>Create your account in about 30 seconds.</p>
          </li>
          <li>
            <span className="dw-n">02</span>
            <h3>Pick securities to pledge</h3>
            <p>Choose the shares and mutual funds to pledge.</p>
          </li>
          <li>
            <span className="dw-n">03</span>
            <h3>Get your limit</h3>
            <p>Your limit depends on the securities pledged and on credit approval.</p>
          </li>
          <li>
            <span className="dw-n">04</span>
            <h3>Draw only what you need</h3>
            <p>Use the limit when you need it. Repay, and it is there to use again.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
