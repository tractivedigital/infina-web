import Link from 'next/link';

export function Intro() {
  return (
    <header className="in-hd">
      <div className="wrapx">
        <nav aria-label="Breadcrumb">
          <ol className="ar-bc">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Investor Relations</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Investor Relations
        </h1>
        <p className="in-lead">
          Company financials and compliance. Results, policies and regulatory disclosures of Infina Finance Private
          Limited, 109 documents in all.
        </p>
      </div>
    </header>
  );
}
