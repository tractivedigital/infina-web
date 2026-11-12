import Link from 'next/link';

export function Content() {
  return (
    <section className="sec" style={{ paddingTop: '8px', background: 'transparent' }}>
      <div className="wrapx">
        <div className="in-grid two">
          <div className="in-card">
            <h2>How we hire</h2>
            <p>
              We bring together a diverse group of passionate people and build a culture that helps each of them do
              their best work.
            </p>
          </div>
          <div className="in-card dk">
            <h2>No open roles right now</h2>
            <p>
              Send your CV to{' '}
              <a href="mailto:careers@infina.in" style={{ color: '#fff', textDecoration: 'underline' }}>
                careers@infina.in
              </a>{' '}
              and we will contact you when there is an opening.
            </p>
            <a className="btn" href="mailto:careers@infina.in">
              Send your CV{' '}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="in-card" style={{ marginTop: '16px' }}>
          <h2>Learn more about Infina</h2>
          <p>
            Infina Finance Private Limited is an RBI registered NBFC that offers loans against securities, ESOP
            financing, loans against property and corporate real estate finance.
          </p>
          <div className="in-links">
            <Link className="btn" href="/about">
              About Infina{' '}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link className="btn out" href="/blogs">
              Read the blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
