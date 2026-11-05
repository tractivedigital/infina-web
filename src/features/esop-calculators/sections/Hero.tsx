import type { CSSProperties } from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="wrapx">
      <section className="chead" id="intro" aria-labelledby="h1" style={{ '--bp': '50% 11%' } as CSSProperties}>
        <Image className="chead-img" src="/images/esop-calc/esop-calc-intro.webp" alt="" width={900} height={551} />
        <h1 id="h1">ESOP funding calculator</h1>
        <p>Estimate your out-of-pocket cost when exercising employee stock options with Infina funding.</p>
      </section>
    </div>
  );
}
