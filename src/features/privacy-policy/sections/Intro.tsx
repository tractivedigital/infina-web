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
            <li aria-current="page">Privacy Policy</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Privacy Policy
        </h1>
        <p className="in-lead">Last reviewed on 16 January 2026 by the Board</p>
      </div>
    </header>
  );
}
