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
            <li aria-current="page">Contact Us</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Contact Us
        </h1>
        <p className="in-lead">
          We are here to help with your loan against securities, property, ESOP or real estate finance query.
        </p>
      </div>
    </header>
  );
}
