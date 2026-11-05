import type { CSSProperties } from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <section className="chead" id="intro" aria-labelledby="h1" style={{ '--bp': '50% 42%' } as CSSProperties}>
        <Image className="chead-img" src="/images/las-calc/las-calc-intro.webp" alt="" width={720} height={793} />
        <h1 id="h1">Loan against securities calculator</h1>
        <p>
          Estimate the interest on your loan and how much you can borrow against shares and mutual funds. Free, with no
          sign-up.
        </p>
      </section>
    </div>
  );
}
