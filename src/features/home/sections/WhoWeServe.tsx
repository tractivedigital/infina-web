export function WhoWeServe() {
  return (
    <section className="serve" id="serve" aria-label="Who we serve"><div className="pin"><div className="wrap serve-head"><h2>Tell us who you are. We’ll show you where to start.</h2><p>Scroll to turn the ring, or pick one below.</p></div><div className="scene" id="scene"><div className="ring" id="ring"></div></div><div className="serve-nav"><button className="arrow" type="button" id="prev" aria-label="Previous audience"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button><div className="serve-dots" id="dots"></div><button className="arrow" type="button" id="next" aria-label="Next audience"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button></div></div></section>
  );
}
