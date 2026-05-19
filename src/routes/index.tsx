import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cockroach Janta Party — Voice of the Lazy & Unemployed" },
      { name: "description", content: "A political party for the people the system forgot to count. Five demands. Zero sponsors. One large, stubborn swarm. They tried to step on us. We came back." },
      { property: "og:title", content: "Cockroach Janta Party (CJP)" },
      { property: "og:description", content: "Voice of the Lazy & Unemployed. Five demands. Zero sponsors. They tried to step on us — we came back." },
    ],
  }),
});

// IMPORTANT: Replace this placeholder. For sites with multiple pages (About, Services, Contact, etc.),
// create separate route files (about.tsx, services.tsx, contact.tsx) — don't put all pages in this file.
function Cockroach({ className = "", size = 200 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Cockroach mascot">
      {/* antennae */}
      <g className="cjp-antenna-left" style={{ transformOrigin: "85px 55px" }}>
        <path d="M85 55 Q60 30 40 15" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g className="cjp-antenna-right" style={{ transformOrigin: "115px 55px" }}>
        <path d="M115 55 Q140 30 160 15" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* head */}
      <ellipse cx="100" cy="62" rx="26" ry="20" fill="#2b1d10" />
      {/* body */}
      <ellipse cx="100" cy="115" rx="55" ry="62" fill="#3a2614" />
      <ellipse cx="100" cy="105" rx="45" ry="50" fill="#5a3a1f" />
      {/* wing split */}
      <path d="M100 70 L100 170" stroke="#2b1d10" strokeWidth="2" />
      {/* shell shine */}
      <ellipse cx="85" cy="95" rx="10" ry="22" fill="#7a5028" opacity="0.6" />
      {/* eyes */}
      <circle cx="92" cy="58" r="4" fill="#fff" />
      <circle cx="108" cy="58" r="4" fill="#fff" />
      <circle cx="92" cy="59" r="2" fill="#000" />
      <circle cx="108" cy="59" r="2" fill="#000" />
      {/* legs */}
      {[-1, 0, 1].map((i) => (
        <g key={`l${i}`} className={`cjp-leg cjp-leg-${i + 2}`} style={{ transformOrigin: `60px ${100 + i * 25}px` }}>
          <path d={`M60 ${100 + i * 25} L20 ${85 + i * 30}`} stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
      {[-1, 0, 1].map((i) => (
        <g key={`r${i}`} className={`cjp-leg cjp-leg-r${i + 2}`} style={{ transformOrigin: `140px ${100 + i * 25}px` }}>
          <path d={`M140 ${100 + i * 25} L180 ${85 + i * 30}`} stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

const manifesto = [
  {
    title: "No Rajya Sabha for retired CJIs",
    body: "If the CJP comes to power, no Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward.",
  },
  {
    title: "Vote tampering = UAPA",
    body: "If any legit vote is deleted — in a CJP or opposition-ruled state — the CEC shall be arrested under UAPA. Taking away voting rights of citizens is no less than terrorism.",
  },
  {
    title: "50% reservation for women",
    body: "Women shall receive 50% reservation, not 33%, without increasing the strength of Parliament. 50% of all Cabinet positions shall be reserved for women.",
  },
  {
    title: "Cancel Ambani & Adani media licences",
    body: "All media houses owned by Ambani and Adani shall have their licences cancelled to make way for truly independent media. Bank accounts of Godi media anchors shall be investigated.",
  },
  {
    title: "20-year ban on defectors",
    body: "Any MLA or MP who defects from one party to another shall be barred from contesting elections — and from holding any public office — for a period of 20 years.",
  },
];

const eligibility = [
  { id: "01", title: "Unemployed", body: "By force, by choice, or by principle. We don't ask." },
  { id: "02", title: "Lazy", body: "Physically only. The brain may continue to spiral." },
  { id: "03", title: "Chronically online", body: "Minimum 11 hours a day, including bathroom breaks." },
  { id: "04", title: "Can rant professionally", body: "As long as the content is sharp, honest, and points at something that actually matters." },
];

const JOIN_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdYx7uN2ozYteN7kK_Ne5a90yxZhrmp_wlhVJGaPhK6SuUmjQ/viewform";

function Index() {
  return (
    <div className="cjp-root">
      <style>{cjpStyles}</style>

      {/* NAV */}
      <nav className="cjp-nav">
        <div className="cjp-nav-inner">
          <a href="#top" className="cjp-logo">
            <span className="cjp-logo-mark">🪳</span>
            <span>
              <strong>CJP</strong>
              <small>Cockroach Janta Party</small>
            </span>
          </a>
          <div className="cjp-nav-links">
            <a href="#vision">Vision</a>
            <a href="#manifesto">Manifesto</a>
            <a href="#eligibility">Eligibility</a>
            <a href="#contact">Contact</a>
            <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-nav-cta">Join →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="cjp-hero">
        <div className="cjp-flag-bg" aria-hidden />
        <div className="cjp-roach-pattern" aria-hidden />
        <div className="cjp-hero-inner">
          <div className="cjp-hero-text">
            <span className="cjp-badge">Party Launch · Volume 1, Edition 1</span>
            <h1>
              <span className="cjp-hi">Voice of the</span>
              <span className="cjp-en">Lazy &amp; Unemployed.</span>
            </h1>
            <p className="cjp-tag">
              <strong>A political party for the people the system forgot to count.</strong>
              <span>Five demands. Zero sponsors. One large, stubborn swarm.</span>
            </p>
            <div className="cjp-cta-row">
              <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-btn cjp-btn-primary">
                Join the Party →
              </a>
              <a href="#manifesto" className="cjp-btn cjp-btn-ghost">
                Read the Manifesto
              </a>
            </div>
            <div className="cjp-stats">
              <div><strong>5</strong><span>Demands</span></div>
              <div><strong>0</strong><span>Corporate Donors</span></div>
              <div><strong>∞</strong><span>Patience</span></div>
              <div><strong>1</strong><span>Founder, no PA</span></div>
            </div>
          </div>
          <div className="cjp-hero-mascot">
            <div className="cjp-roach-walk">
              <Cockroach size={320} />
            </div>
            <div className="cjp-shadow" />
            <div className="cjp-quote">
              "They tried to step on us.<br/><strong>We came back.</strong>"
            </div>
          </div>
        </div>
        <div className="cjp-marquee" aria-hidden>
          <div className="cjp-marquee-track">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>Together We Survive ✦ Stronger Together ✦ Unity · Resilience · Progress ✦ You Cannot Squash A Movement ✦ </span>
            ))}
          </div>
        </div>
      </header>

      {/* VISION */}
      <section id="vision" className="cjp-section">
        <div className="cjp-container">
          <p className="cjp-eyebrow">Chapter One</p>
          <h2 className="cjp-h2">Our Movement's <span>Vision.</span></h2>
          <p className="cjp-lede">
            We are not here to set up another PM CARES, holiday in Davos on the taxpayer's salary slip,
            or rebrand corruption as "strategic spending." We are here to ask — loudly, repeatedly,
            in writing — where the money went.
          </p>

          <div className="cjp-grid-3">
            <article className="cjp-card cjp-card-accent">
              <div className="cjp-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Build a party for the young people who keep getting called lazy, chronically online,
                and — most recently — cockroaches. That's it. That's the mission. The rest is satire.
              </p>
            </article>
            <article className="cjp-card">
              <div className="cjp-card-icon">🗣️</div>
              <h3>Our Method</h3>
              <p>Ask — loudly, repeatedly, in writing — where the money went. Then ask again next week.</p>
            </article>
            <article className="cjp-card">
              <div className="cjp-card-icon">🪳</div>
              <h3>Our Symbol</h3>
              <p>They called us cockroaches. We made it the logo. You cannot squash a movement.</p>
            </article>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="cjp-section cjp-section-alt">
        <div className="cjp-container">
          <p className="cjp-eyebrow">The Demands</p>
          <h2 className="cjp-h2">Five Demands. <span>No Negotiation.</span></h2>
          <p className="cjp-lede">Sharp. Specific. In writing. Filed under General Disgruntlement.</p>
          <ol className="cjp-manifesto">
            {manifesto.map((m, i) => (
              <li key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="cjp-mani-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{m.title}</strong>
                  <span>{m.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="cjp-section">
        <div className="cjp-container">
          <p className="cjp-eyebrow">Membership</p>
          <h2 className="cjp-h2">Are you eligible <span>to join?</span></h2>
          <p className="cjp-lede">
            We do not check religion, caste, or gender. We do, however, have four (4) standards.
          </p>
          <div className="cjp-grid-2">
            {eligibility.map((e) => (
              <article key={e.id} className="cjp-meme">
                <header>
                  <span className="cjp-meme-dot" />
                  <span className="cjp-meme-dot" />
                  <span className="cjp-meme-dot" />
                  <small>REQ / {e.id}</small>
                </header>
                <h3>{e.title} <span style={{ color: "#138a3f" }}>✓</span></h3>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
          <p className="cjp-fineprint">
            Membership is free, lifelong, and revocable only by you.
            No fees. No selfies with the leader. No "missed call to register."
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="cjp-section cjp-section-alt">
        <div className="cjp-container cjp-join-wrap">
          <div>
            <p className="cjp-eyebrow">Get in touch</p>
            <h2 className="cjp-h2">Connect <span>with us.</span></h2>
            <p className="cjp-lede">
              Want to join, volunteer, complain, or send a meme? Use the form. We read everything.
              We reply to most things.
            </p>
            <ul className="cjp-contact-list">
              <li><span>Email</span><a href="mailto:contact@cockroachjantaparty.org">contact@cockroachjantaparty.org</a></li>
              <li><span>Press</span><a href="mailto:contact@cockroachjantaparty.org">contact@cockroachjantaparty.org</a></li>
              <li><span>Headquarters</span><p>Wherever the wifi works.</p></li>
              <li><span>Founder</span><p>Abhijeet Dipke — Founder &amp; Convenor</p></li>
            </ul>
          </div>

          <div className="cjp-form">
            <div className="cjp-form-head">
              <strong>Membership Form</strong>
              <small>Cockroach Janta Party</small>
            </div>
            <p className="cjp-form-q"><span>01</span> Name, Phone, Email</p>
            <p className="cjp-form-q"><span>02</span> Are you chronically online? <em>(Yes / No / Maybe)</em></p>
            <p className="cjp-form-q"><span>03</span> Are you lazy? <em>(Yes / No / Maybe)</em></p>
            <p className="cjp-form-q"><span>04</span> Do you identify as a "cockroach" as defined by the Hon'ble CJI?</p>
            <p className="cjp-form-q"><span>05</span> Mention your Twitter handle to join the Cockroach Janta Party</p>
            <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-btn cjp-btn-primary cjp-btn-block">
              Open Membership Form →
            </a>
            <small className="cjp-form-note">Hosted on Google Forms. Never submit passwords.</small>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cjp-footer">
        <div className="cjp-container cjp-footer-inner">
          <div className="cjp-footer-brand">
            <span className="cjp-logo-mark">🪳</span>
            <div>
              <strong>Cockroach Janta Party</strong>
              <small>Voice of the Lazy &amp; Unemployed</small>
            </div>
          </div>
          <div className="cjp-socials">
            <a aria-label="Email" href="mailto:contact@cockroachjantaparty.org">✉️</a>
            <a aria-label="Twitter" href="#">🐦</a>
            <a aria-label="Instagram" href="#">📸</a>
            <a aria-label="YouTube" href="#">▶️</a>
          </div>
          <p className="cjp-made">
            Sponsored by no one. Funded by nothing. HQ: wherever the wifi works.
          </p>
          <p className="cjp-disclaimer">
            Filed under General Disgruntlement. Now accepting rants, retweets, and resentment.
          </p>
        </div>
      </footer>
    </div>
  );
}

const cjpStyles = `
  .cjp-root {
    --saffron: #ff8a1f;
    --green: #138a3f;
    --green-deep: #0b5a28;
    --blue: #1e3a8a;
    --ink: #0d1a12;
    --ink-2: #122218;
    --paper: #f6f1e4;
    --muted: #9fb5a4;
    color: var(--paper);
    background: var(--ink);
    font-family: 'Segoe UI', system-ui, -apple-system, 'Noto Sans Devanagari', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }
  .cjp-root a { color: inherit; text-decoration: none; }
  .cjp-container { max-width: 1180px; margin: 0 auto; padding: 0 1.25rem; }

  /* NAV */
  .cjp-nav {
    position: sticky; top: 0; z-index: 50;
    backdrop-filter: blur(12px);
    background: rgba(13,26,18,0.75);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .cjp-nav-inner { max-width: 1180px; margin: 0 auto; padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
  .cjp-logo { display: flex; align-items: center; gap: 0.6rem; }
  .cjp-logo-mark { font-size: 1.6rem; display: inline-block; animation: cjp-wiggle 3s ease-in-out infinite; }
  .cjp-logo strong { display: block; font-size: 0.95rem; letter-spacing: 0.04em; }
  .cjp-logo small { display: block; font-size: 0.7rem; color: var(--muted); }
  .cjp-nav-links { display: flex; align-items: center; gap: 1.25rem; font-size: 0.95rem; }
  .cjp-nav-links a { color: var(--muted); transition: color .2s; }
  .cjp-nav-links a:hover { color: var(--paper); }
  .cjp-nav-cta { background: var(--saffron); color: #1a0d00 !important; padding: 0.45rem 0.9rem; border-radius: 999px; font-weight: 700; }
  @media (max-width: 640px) { .cjp-nav-links a:not(.cjp-nav-cta) { display: none; } }

  /* HERO */
  .cjp-hero { position: relative; overflow: hidden; padding: 4rem 0 5rem; }
  .cjp-flag-bg {
    position: absolute; inset: 0; opacity: 0.10; pointer-events: none;
    background: linear-gradient(180deg, var(--saffron) 0%, var(--saffron) 33%, #f6f1e4 33%, #f6f1e4 66%, var(--green) 66%, var(--green) 100%);
    filter: blur(40px);
  }
  .cjp-roach-pattern {
    position: absolute; inset: 0; opacity: 0.06; pointer-events: none;
    background-image: radial-gradient(circle at 20% 30%, #fff 1px, transparent 2px),
                      radial-gradient(circle at 80% 70%, #fff 1px, transparent 2px),
                      radial-gradient(circle at 50% 50%, #fff 1px, transparent 2px);
    background-size: 80px 80px, 120px 120px, 60px 60px;
  }
  .cjp-hero-inner {
    position: relative; max-width: 1180px; margin: 0 auto; padding: 0 1.25rem;
    display: grid; grid-template-columns: 1.1fr 1fr; gap: 3rem; align-items: center;
  }
  @media (max-width: 860px) { .cjp-hero-inner { grid-template-columns: 1fr; text-align: center; } }
  .cjp-badge {
    display: inline-block; padding: 0.3rem 0.75rem; border-radius: 999px;
    background: rgba(255,138,31,0.15); color: var(--saffron);
    font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700;
    border: 1px solid rgba(255,138,31,0.4);
  }
  .cjp-hero-text h1 { margin: 1rem 0; font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.05; font-weight: 900; letter-spacing: -0.02em; }
  .cjp-hi { display: block; background: linear-gradient(90deg, var(--saffron), #ffd089); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .cjp-en { display: block; color: var(--paper); }
  .cjp-tag { font-size: 1.1rem; color: #cfe0d3; max-width: 540px; }
  @media (max-width: 860px) { .cjp-tag { margin-left: auto; margin-right: auto; } }
  .cjp-tag strong { display: block; color: var(--paper); margin-bottom: 0.3rem; }
  .cjp-tag span { color: var(--muted); font-size: 0.95rem; }
  .cjp-cta-row { display: flex; gap: 0.75rem; margin: 1.75rem 0; flex-wrap: wrap; }
  @media (max-width: 860px) { .cjp-cta-row { justify-content: center; } }

  .cjp-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.9rem 1.4rem; border-radius: 999px; font-weight: 700; font-size: 0.95rem;
    transition: transform .15s ease, box-shadow .2s ease, background .2s;
    border: 1px solid transparent; cursor: pointer;
  }
  .cjp-btn:hover { transform: translateY(-2px); }
  .cjp-btn-primary { background: var(--saffron); color: #1a0d00; box-shadow: 0 10px 30px -10px rgba(255,138,31,0.6); }
  .cjp-btn-primary:hover { background: #ffa04a; }
  .cjp-btn-ghost { background: transparent; border-color: rgba(255,255,255,0.2); color: var(--paper); }
  .cjp-btn-ghost:hover { border-color: var(--paper); }
  .cjp-btn-whatsapp { background: #25d366; color: #062; box-shadow: 0 10px 30px -10px rgba(37,211,102,0.6); }
  .cjp-btn-block { width: 100%; justify-content: center; }

  .cjp-stats { display: flex; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap; }
  @media (max-width: 860px) { .cjp-stats { justify-content: center; } }
  .cjp-stats > div { display: flex; flex-direction: column; }
  .cjp-stats strong { font-size: 1.8rem; color: var(--saffron); font-weight: 900; }
  .cjp-stats span { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }

  /* MASCOT */
  .cjp-hero-mascot { position: relative; display: flex; justify-content: center; align-items: center; min-height: 360px; }
  .cjp-roach-walk { animation: cjp-bob 2.5s ease-in-out infinite; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5)); }
  .cjp-shadow { position: absolute; bottom: 10px; width: 220px; height: 18px; background: radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%); animation: cjp-shadow 2.5s ease-in-out infinite; }
  .cjp-antenna-left { animation: cjp-antenna 1.4s ease-in-out infinite; }
  .cjp-antenna-right { animation: cjp-antenna 1.4s ease-in-out infinite reverse; }
  .cjp-leg { animation: cjp-leg 0.6s ease-in-out infinite alternate; }
  .cjp-leg-1, .cjp-leg-r2 { animation-delay: 0.1s; }
  .cjp-leg-2, .cjp-leg-r1 { animation-delay: 0.2s; }
  .cjp-leg-3 { animation-delay: 0.3s; }

  @keyframes cjp-bob { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-12px) rotate(1deg); } }
  @keyframes cjp-shadow { 0%,100% { transform: scaleX(1); opacity: .5; } 50% { transform: scaleX(0.85); opacity: .3; } }
  @keyframes cjp-antenna { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
  @keyframes cjp-leg { from { transform: rotate(-10deg); } to { transform: rotate(12deg); } }
  @keyframes cjp-wiggle { 0%,100% { transform: rotate(-10deg); } 50% { transform: rotate(15deg); } }

  /* SECTIONS */
  .cjp-section { padding: 5rem 0; position: relative; }
  .cjp-section-alt { background: var(--ink-2); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); }
  .cjp-h2 { font-size: clamp(1.8rem, 4vw, 2.75rem); font-weight: 900; letter-spacing: -0.02em; margin: 0 0 0.5rem; }
  .cjp-h2 span { color: var(--saffron); }
  .cjp-h2 .cjp-wink { color: var(--muted); font-weight: 400; font-size: 0.6em; font-style: italic; }
  .cjp-lede { font-size: 1.1rem; color: var(--muted); max-width: 720px; margin-bottom: 2.5rem; }

  .cjp-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .cjp-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
  @media (max-width: 800px) { .cjp-grid-3, .cjp-grid-2 { grid-template-columns: 1fr; } }

  .cjp-card {
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px; padding: 1.75rem; transition: transform .25s, border-color .25s;
  }
  .cjp-card:hover { transform: translateY(-4px); border-color: var(--saffron); }
  .cjp-card-accent { background: linear-gradient(180deg, rgba(19,138,63,0.18), rgba(19,138,63,0.04)); border-color: rgba(19,138,63,0.4); }
  .cjp-card-icon { font-size: 2rem; margin-bottom: 0.75rem; }
  .cjp-card h3 { margin: 0 0 0.5rem; font-size: 1.25rem; }
  .cjp-card p { color: var(--muted); line-height: 1.55; }

  /* MANIFESTO */
  .cjp-manifesto { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem; }
  .cjp-manifesto li {
    display: grid; grid-template-columns: auto auto 1fr; gap: 1rem; align-items: center;
    padding: 1.1rem 1.4rem; border-radius: 14px;
    background: rgba(255,255,255,0.03);
    border-left: 4px solid var(--saffron);
    animation: cjp-slide-in .5s ease-out backwards;
    transition: transform .2s, background .2s;
  }
  .cjp-manifesto li:hover { transform: translateX(6px); background: rgba(255,138,31,0.08); }
  .cjp-mani-num { font-family: 'Courier New', monospace; color: var(--saffron); font-weight: 900; font-size: 1.1rem; }
  .cjp-mani-icon { font-size: 1.6rem; }
  .cjp-manifesto strong { display: block; font-size: 1.05rem; }
  .cjp-manifesto span { color: var(--muted); font-size: 0.9rem; }
  @keyframes cjp-slide-in { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }

  /* MEMES */
  .cjp-meme {
    background: var(--paper); color: #1a1a1a; border-radius: 14px; overflow: hidden;
    box-shadow: 0 20px 40px -20px rgba(0,0,0,0.6); transition: transform .25s;
  }
  .cjp-meme:hover { transform: rotate(-1deg) scale(1.02); }
  .cjp-meme:nth-child(even):hover { transform: rotate(1deg) scale(1.02); }
  .cjp-meme > header { display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1rem; background: #e6e0d0; border-bottom: 1px solid #d0c8b4; }
  .cjp-meme-dot { width: 10px; height: 10px; border-radius: 50%; background: #b0a890; }
  .cjp-meme-dot:first-child { background: #e85d3a; }
  .cjp-meme-dot:nth-child(2) { background: #f0b232; }
  .cjp-meme-dot:nth-child(3) { background: #4caf50; }
  .cjp-meme > header small { margin-left: auto; color: #6b6450; font-size: 0.75rem; }
  .cjp-meme h3 { margin: 1.25rem 1.25rem 0.5rem; font-size: 1.25rem; }
  .cjp-meme p { margin: 0 1.25rem 1.4rem; color: #4a4a4a; line-height: 1.5; }

  /* JOIN */
  .cjp-join-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
  @media (max-width: 860px) { .cjp-join-wrap { grid-template-columns: 1fr; } }
  .cjp-form { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 1.75rem; display: grid; gap: 1rem; }
  .cjp-form label { display: grid; gap: 0.4rem; }
  .cjp-form span { font-size: 0.85rem; color: var(--muted); font-weight: 600; }
  .cjp-form input, .cjp-form textarea {
    background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);
    color: var(--paper); padding: 0.75rem 0.9rem; border-radius: 10px;
    font: inherit; font-size: 0.95rem; transition: border-color .2s;
  }
  .cjp-form input:focus, .cjp-form textarea:focus { outline: none; border-color: var(--saffron); }
  .cjp-success { text-align: center; padding: 1.5rem 0.5rem; }
  .cjp-success h3 { margin: 0.5rem 0; }
  .cjp-success p { color: var(--muted); }

  /* FOOTER */
  .cjp-footer { background: #08120d; padding: 3rem 0 2rem; border-top: 3px solid var(--saffron); }
  .cjp-footer-inner { display: grid; gap: 1.25rem; justify-items: center; text-align: center; }
  .cjp-footer-brand { display: flex; align-items: center; gap: 0.75rem; }
  .cjp-footer-brand strong { display: block; }
  .cjp-footer-brand small { display: block; color: var(--muted); font-size: 0.8rem; }
  .cjp-socials { display: flex; gap: 1rem; font-size: 1.5rem; }
  .cjp-socials a { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(255,255,255,0.06); transition: background .2s, transform .2s; }
  .cjp-socials a:hover { background: var(--saffron); transform: translateY(-3px); }
  .cjp-made { color: var(--paper); font-weight: 600; margin: 0; }
  .cjp-disclaimer { color: var(--muted); font-size: 0.75rem; max-width: 540px; margin: 0; }
`;
