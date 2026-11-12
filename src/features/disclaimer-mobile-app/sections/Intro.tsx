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
            <li aria-current="page">Disclaimer: Mobile App</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Disclaimer: Mobile App
        </h1>
        <p className="in-lead">Please read this notice before you act on any app or link that mentions Infina.</p>
      </div>
    </header>
  );
}
