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
            <li aria-current="page">Author</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Infina
        </h1>
        <p className="in-lead">
          Infina Finance Private Limited is an RBI registered NBFC. These guides cover loans against securities, loans
          against property, ESOP financing and corporate real estate finance.
        </p>
      </div>
    </header>
  );
}
