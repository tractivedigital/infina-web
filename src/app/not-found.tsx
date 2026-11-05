import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
      <div>
        <h1 style={{ color: '#003368', fontSize: 32 }}>Page not found</h1>
        <p style={{ margin: '12px 0 24px' }}>The page you are looking for does not exist.</p>
        <Link href="/" style={{ color: '#003368', fontWeight: 600 }}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
