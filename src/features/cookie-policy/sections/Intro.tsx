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
            <li aria-current="page">Cookie Policy</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Cookie Policy
        </h1>
        <p className="in-lead">Published on 07th August 2026</p>
      </div>
    </header>
  );
}
