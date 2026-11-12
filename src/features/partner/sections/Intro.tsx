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
            <li aria-current="page">Partners</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          Our LSPs and DLAs
        </h1>
        <p className="in-lead">
          Lending Service Providers (LSPs) and Digital Lending Apps (DLAs) of Infina Finance Private Limited.
        </p>
      </div>
    </header>
  );
}
