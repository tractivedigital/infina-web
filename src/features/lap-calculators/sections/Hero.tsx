import type { CSSProperties } from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <section className="chead" id="intro" aria-labelledby="h1" style={{ '--bp': '50% 45%' } as CSSProperties}>
        <Image className="chead-img" src="/images/lap-calc/lap-calc-intro.webp" alt="" width={900} height={437} />
        <h1 id="h1">Loan against property calculator</h1>
        <p>Work out your EMI and how much you can borrow against your property. Free, with no sign-up.</p>
      </section>
    </div>
  );
}
