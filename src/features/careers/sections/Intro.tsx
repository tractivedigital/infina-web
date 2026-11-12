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
            <li aria-current="page">Careers</li>
          </ol>
        </nav>
        <h1 className="ar-h1" id="h1">
          We&apos;re looking for talented people
        </h1>
        <p className="in-lead">Tell us about yourself. We reach out when a suitable role opens.</p>
      </div>
    </header>
  );
}
