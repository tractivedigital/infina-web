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
            <li aria-current="page">GST Registrations</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          GST Registrations
        </h1>
        <p className="in-lead">GST numbers of Infina Finance Private Limited by state and union territory.</p>
      </div>
    </header>
  );
}
