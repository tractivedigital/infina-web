import Image from 'next/image';

export function Property() {
  return (
    <section className="band" id="property">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Property you can <em>mortgage</em> for a loan
          </h2>
          <p className="body">
            Unlock the value of the property you own and put it to work for your business or personal needs.
          </p>
        </div>
        <div className="pp">
          <article className="pp-c">
            <span className="pp-i">
              <Image src="/images/lap/lap-property-1.png" alt="" width={56} height={56} />
            </span>
            <h3>Residential property</h3>
            <p>Villas, studio apartments, flats and duplexes.</p>
          </article>
          <article className="pp-c">
            <span className="pp-i">
              <Image src="/images/lap/lap-property-2.png" alt="" width={56} height={56} />
            </span>
            <h3>Commercial property</h3>
            <p>Offices, shops, warehouses and other commercial premises.</p>
          </article>
          <article className="pp-c">
            <span className="pp-i">
              <Image src="/images/lap/lap-property-3.png" alt="" width={56} height={56} />
            </span>
            <h3>Industrial property</h3>
            <p>Factories and manufacturing units.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
