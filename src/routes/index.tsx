import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cockroach Janta Party — Voice of the Lazy & Unemployed" },
      { name: "description", content: "A political party for the people the system forgot to count. Five demands. Zero sponsors. One large, stubborn swarm. They tried to step on us. We came back." },
      { name: "keywords", content: "Cockroach Janta Party, CJP, Indian political party, satirical political party India, Voice of the Lazy and Unemployed, Abhijeet Dipke, Indian politics, anti-establishment India, youth political party India, cockroach party" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Cockroach Janta Party" },
      { name: "theme-color", content: "#0d1a12" },
      { property: "og:title", content: "Cockroach Janta Party (CJP)" },
      { property: "og:description", content: "Voice of the Lazy & Unemployed. Five demands. Zero sponsors. They tried to step on us — we came back." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cockroach Janta Party" },
      { property: "og:url", content: "https://cockroach-janta-party.lovable.app/" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cockroach Janta Party (CJP) — Voice of the Lazy & Unemployed" },
      { name: "twitter:description", content: "Five demands. Zero sponsors. One large, stubborn swarm. They tried to step on us — we came back." },
    ],
    links: [
      { rel: "canonical", href: "https://cockroach-janta-party.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://cockroach-janta-party.lovable.app/#org",
              name: "Cockroach Janta Party",
              alternateName: ["CJP", "Cockroach Janta Party (CJP)"],
              url: "https://cockroach-janta-party.lovable.app/",
              email: "contact@cockroachjantaparty.org",
              slogan: "Voice of the Lazy & Unemployed",
              description:
                "Cockroach Janta Party (CJP) is a satirical Indian political movement for the people the system forgot to count. Five demands. Zero sponsors.",
              founder: { "@type": "Person", name: "Abhijeet Dipke" },
              areaServed: "IN",
            },
            {
              "@type": "WebSite",
              "@id": "https://cockroach-janta-party.lovable.app/#website",
              url: "https://cockroach-janta-party.lovable.app/",
              name: "Cockroach Janta Party",
              inLanguage: "en-IN",
              publisher: { "@id": "https://cockroach-janta-party.lovable.app/#org" },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Cockroach Janta Party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cockroach Janta Party (CJP) is a satirical Indian political party — a movement for the lazy, the unemployed and the chronically online. Five demands, zero corporate sponsors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who founded the Cockroach Janta Party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Cockroach Janta Party was founded by Abhijeet Dipke, who serves as Founder & Convenor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I join the Cockroach Janta Party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Membership is free and lifelong. Fill in the membership form linked on the homepage. No fees, no selfies with the leader, no missed call to register.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the five demands of the CJP?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No Rajya Sabha for retired CJIs; vote tampering treated under UAPA; 50% reservation for women without expanding Parliament; cancellation of Ambani and Adani media licences; and a 20-year ban on political defectors.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

/* ============ MASCOT — hand-drawn cockroach ============ */
function Roach({ size = 280 }: { size?: number }) {
  return (
    <svg viewBox="0 0 320 320" width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-label="CJP cockroach mascot" className="cjp-roach">
      <defs>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.2" />
        </filter>
      </defs>
      <g filter="url(#rough)">
        {/* antennae */}
        <g className="cjp-antenna a-l" style={{ transformOrigin: "135px 95px" }}>
          <path d="M135 95 Q95 55 55 30" stroke="#0a0a0a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="55" cy="30" r="6" fill="#c8ff00" stroke="#0a0a0a" strokeWidth="3" />
        </g>
        <g className="cjp-antenna a-r" style={{ transformOrigin: "185px 95px" }}>
          <path d="M185 95 Q225 55 265 30" stroke="#0a0a0a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="265" cy="30" r="6" fill="#c8ff00" stroke="#0a0a0a" strokeWidth="3" />
        </g>
        {/* legs */}
        {[0, 1, 2].map((i) => (
          <g key={`L${i}`} className={`cjp-leg L${i}`} style={{ transformOrigin: `120px ${165 + i * 28}px` }}>
            <path d={`M120 ${165 + i * 28} L${50 - i * 8} ${150 + i * 36}`} stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round" />
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <g key={`R${i}`} className={`cjp-leg R${i}`} style={{ transformOrigin: `200px ${165 + i * 28}px` }}>
            <path d={`M200 ${165 + i * 28} L${270 + i * 8} ${150 + i * 36}`} stroke="#0a0a0a" strokeWidth="6" strokeLinecap="round" />
          </g>
        ))}
        {/* head */}
        <ellipse cx="160" cy="105" rx="42" ry="32" fill="#0a0a0a" />
        {/* body */}
        <path d="M85 175 Q160 110 235 175 Q260 240 160 280 Q60 240 85 175 Z" fill="#0a0a0a" />
        {/* shell highlight */}
        <path d="M120 165 Q160 200 200 165" stroke="#c8ff00" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M115 200 Q160 235 205 200" stroke="#c8ff00" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        {/* center seam */}
        <path d="M160 130 L160 270" stroke="#1a1a1a" strokeWidth="2" />
        {/* eyes */}
        <circle cx="146" cy="100" r="7" fill="#f5f5f0" />
        <circle cx="174" cy="100" r="7" fill="#f5f5f0" />
        <circle cx="146" cy="102" r="3.5" fill="#0a0a0a" />
        <circle cx="174" cy="102" r="3.5" fill="#0a0a0a" />
        {/* angry brow */}
        <path d="M138 88 L154 94" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round" />
        <path d="M182 88 L166 94" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ============ DATA ============ */
const manifesto = [
  { t: "No Rajya Sabha for retired CJIs", b: "If CJP comes to power, no Chief Justice gets a Rajya Sabha seat as a post-retirement reward. Period." },
  { t: "Vote tampering = UAPA", b: "If a legitimate vote is deleted — anywhere — the CEC gets arrested under UAPA. Taking voting rights from citizens is terrorism." },
  { t: "50% reservation for women", b: "Women get 50%, not 33%, without inflating Parliament. 50% of all Cabinet positions reserved for women." },
  { t: "Cancel Ambani & Adani media licences", b: "All media houses owned by them lose licences. Independent media gets oxygen. Godi anchors' bank accounts get a deep audit." },
  { t: "20-year ban on defectors", b: "Any MLA or MP who jumps party is barred from contesting or holding public office for 20 years." },
];

const eligibility = [
  { id: "01", t: "Unemployed", b: "By force, by choice, or by principle. We don't ask which." },
  { id: "02", t: "Lazy", b: "Physically only. The brain may continue to spiral at 3am." },
  { id: "03", t: "Chronically online", b: "Minimum 11 hours / day. Bathroom scrolling counts." },
  { id: "04", t: "Can rant professionally", b: "Sharp, honest, and pointed at something that actually matters." },
];

const tickerWords = [
  "हम ज़िंदा हैं", "WE SURVIVE", "तेज़ धूप में भी", "STEP ON US, WE COME BACK",
  "जनता का जवाब", "5 DEMANDS · 0 SPONSORS", "बेरोज़गारों की पार्टी",
  "VOICE OF THE LAZY & UNEMPLOYED", "🪳 ZINDABAD 🪳",
];

const JOIN_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdYx7uN2ozYteN7kK_Ne5a90yxZhrmp_wlhVJGaPhK6SuUmjQ/viewform";
const WA_URL = "https://wa.me/?text=" + encodeURIComponent("Join the Cockroach Janta Party — Voice of the Lazy & Unemployed. cockroach-janta-party.lovable.app");

/* ============ HOOKS ============ */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("cjp-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".cjp-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0, x = -100, y = -100, tx = -100, ty = -100;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return ref;
}

/* ============ PAGE ============ */
function Index() {
  useReveal();
  const cursorRef = useCursor();

  return (
    <div className="cjp">
      <style>{cjpCss}</style>

      {/* grain + cursor */}
      <div className="cjp-grain" aria-hidden />
      <div className="cjp-cursor" ref={cursorRef} aria-hidden />

      {/* TOP TICKER */}
      <div className="cjp-ticker cjp-ticker-top" aria-hidden>
        <div className="cjp-ticker-track">
          {Array.from({ length: 4 }).flatMap((_, k) =>
            tickerWords.map((w, i) => (
              <span key={`${k}-${i}`} className="cjp-ticker-item">
                {w} <em>🪳</em>
              </span>
            ))
          )}
        </div>
      </div>

      {/* NAV */}
      <nav className="cjp-nav">
        <a href="#top" className="cjp-brand">
          <span className="cjp-brand-roach">🪳</span>
          <span className="cjp-brand-text">
            <b>CJP</b><i>est. now</i>
          </span>
        </a>
        <div className="cjp-nav-pill">
          <a href="#manifesto">Manifesto</a>
          <a href="#join">Join</a>
          <a href="#contact">Contact</a>
        </div>
        <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-nav-cta">
          <span>Join the Swarm</span>
          <em>→</em>
        </a>
      </nav>

      {/* HERO */}
      <header id="top" className="cjp-hero">
        <div className="cjp-hero-grid">
          {/* left: massive headline */}
          <div className="cjp-hero-headline cjp-reveal">
            <div className="cjp-hero-tag">
              <span className="cjp-dot" /> Volume 1 · Edition 1 · Filed under General Disgruntlement
            </div>
            <h1 className="cjp-h1">
              <span className="cjp-word l1">COCK<span className="cjp-accent">·</span>ROACH</span>
              <span className="cjp-word l2"><i>janta</i> party</span>
              <span className="cjp-word l3">
                <span className="cjp-strike">वो</span> हम।
              </span>
            </h1>
            <p className="cjp-sub">
              <b>A political party for the people the system forgot to count.</b><br/>
              <span>Five demands. Zero sponsors. One large, stubborn swarm.</span>
            </p>
            <div className="cjp-hero-ctas">
              <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-btn cjp-btn-primary">
                Join the swarm <em>→</em>
              </a>
              <a href="#manifesto" className="cjp-btn cjp-btn-ghost">
                <span className="cjp-btn-num">05</span> Demands
              </a>
            </div>
          </div>

          {/* right: mascot stage */}
          <div className="cjp-hero-stage">
            <div className="cjp-stage-bg" aria-hidden>
              <div className="cjp-blob b1" />
              <div className="cjp-blob b2" />
              <div className="cjp-cross-grid" />
            </div>
            <div className="cjp-roach-wrap">
              <Roach size={340} />
              <div className="cjp-roach-shadow" />
            </div>
            <div className="cjp-stamp cjp-stamp-1">
              <span>NOT<br/>SQUASHABLE</span>
            </div>
            <div className="cjp-stamp cjp-stamp-2">
              <span>EST.<br/>NOW</span>
            </div>
            <div className="cjp-stamp cjp-stamp-3">
              <span>0<br/>FUNDING</span>
            </div>
          </div>
        </div>

        {/* metrics ribbon */}
        <div className="cjp-ribbon">
          <div><b>05</b><span>Demands</span></div>
          <div><b>00</b><span>Corporate Donors</span></div>
          <div><b>∞</b><span>Patience</span></div>
          <div><b>01</b><span>Founder, no PA</span></div>
        </div>
      </header>

      {/* BIG MARQUEE */}
      <div className="cjp-bigmarquee" aria-hidden>
        <div className="cjp-bigmarquee-track">
          {Array.from({ length: 3 }).map((_, k) => (
            <span key={k}>
              They tried to step on us. <em>★</em> We came back. <em>★</em> We came back angrier. <em>★</em> हम ज़िंदा हैं <em>★</em>
            </span>
          ))}
        </div>
      </div>

      {/* VISION — broken grid */}
      <section id="vision" className="cjp-section">
        <div className="cjp-container">
          <div className="cjp-h2-row cjp-reveal">
            <span className="cjp-eyebrow">Chapter 01 — The Why</span>
            <h2 className="cjp-h2">We are not<br/>here to <em>fix</em><br/>the chair.</h2>
            <p className="cjp-lede">
              We are here to ask — loudly, repeatedly, in writing — where the money went.
              Then ask again next week. And the week after.
            </p>
          </div>

          <div className="cjp-bento">
            <article className="cjp-tile cjp-tile-1 cjp-reveal">
              <span className="cjp-tile-num">01</span>
              <h3>The Mission</h3>
              <p>Build a party for the people who keep getting called lazy, chronically online, and — most recently — cockroaches. That's it. The rest is satire.</p>
            </article>
            <article className="cjp-tile cjp-tile-2 cjp-reveal cjp-tile-lime">
              <span className="cjp-tile-num">02</span>
              <h3>The Method</h3>
              <p>Ask, in writing. File RTIs. Print receipts. Refuse to forget. The internet has memory. So do we.</p>
            </article>
            <article className="cjp-tile cjp-tile-3 cjp-reveal cjp-tile-red">
              <span className="cjp-tile-num">03</span>
              <h3>The Symbol</h3>
              <p>They called us cockroaches. We made it the logo. You cannot squash a movement that already lives behind the fridge.</p>
            </article>
            <article className="cjp-tile cjp-tile-4 cjp-reveal">
              <span className="cjp-tile-num">04</span>
              <h3>The Mood</h3>
              <p>Sharp. Petty. Specific. Funny. Refuses to be polite about it.</p>
            </article>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="cjp-section cjp-section-dark">
        <div className="cjp-container">
          <div className="cjp-h2-row cjp-reveal">
            <span className="cjp-eyebrow cjp-eyebrow-light">Chapter 02 — The Demands</span>
            <h2 className="cjp-h2 cjp-h2-light">
              Five demands.<br/>
              <em>No</em> negotiation.
            </h2>
          </div>
          <ol className="cjp-demands">
            {manifesto.map((m, i) => (
              <li key={i} className="cjp-demand cjp-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="cjp-demand-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="cjp-demand-body">
                  <h3>{m.t}</h3>
                  <p>{m.b}</p>
                </div>
                <div className="cjp-demand-arrow">↗</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="cjp-section">
        <div className="cjp-container">
          <div className="cjp-h2-row cjp-reveal">
            <span className="cjp-eyebrow">Chapter 03 — Eligibility</span>
            <h2 className="cjp-h2">Are you<br/><em>cockroach</em> enough?</h2>
            <p className="cjp-lede">We do not check religion, caste, or gender. We do check these four (4) things.</p>
          </div>
          <div className="cjp-elig">
            {eligibility.map((e, i) => (
              <div key={e.id} className={`cjp-elig-card cjp-reveal e-${i}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="cjp-elig-head">
                  <span className="cjp-elig-id">REQ / {e.id}</span>
                  <span className="cjp-check">✓</span>
                </div>
                <h3>{e.t}</h3>
                <p>{e.b}</p>
              </div>
            ))}
          </div>
          <p className="cjp-fineprint cjp-reveal">
            Membership is free, lifelong, and revocable only by you. No fees. No selfies with the leader. No "missed call to register."
          </p>
        </div>
      </section>

      {/* JOIN / CTA */}
      <section id="join" className="cjp-section cjp-section-lime">
        <div className="cjp-container cjp-join">
          <div className="cjp-join-left cjp-reveal">
            <span className="cjp-eyebrow cjp-eyebrow-dark">Chapter 04 — Enlist</span>
            <h2 className="cjp-h2 cjp-h2-dark">
              Sign the<br/>roach roll.
            </h2>
            <p className="cjp-lede cjp-lede-dark">
              Two clicks. One form. Lifelong membership. Bring your rage, your memes, your receipts.
            </p>
            <div className="cjp-hero-ctas">
              <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-btn cjp-btn-dark">
                Open the form <em>→</em>
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="cjp-btn cjp-btn-ghost-dark">
                <span>📱</span> Share on WhatsApp
              </a>
            </div>
          </div>
          <div className="cjp-join-card cjp-reveal">
            <div className="cjp-join-head">
              <b>Membership Form</b>
              <small>Cockroach Janta Party · v1</small>
            </div>
            <ol className="cjp-join-qs">
              <li><span>01</span> Name, phone, email</li>
              <li><span>02</span> Are you chronically online? <em>(Yes / No / Maybe)</em></li>
              <li><span>03</span> Are you lazy? <em>(Yes / No / Strategically)</em></li>
              <li><span>04</span> Do you identify as a "cockroach" as defined by the Hon'ble CJI?</li>
              <li><span>05</span> Twitter handle to join the Cockroach Janta Party</li>
            </ol>
            <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer" className="cjp-btn cjp-btn-dark cjp-btn-block">
              I'm in. Take me. <em>→</em>
            </a>
            <small className="cjp-form-note">Hosted on Google Forms. Never submit passwords.</small>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="cjp-section cjp-section-dark">
        <div className="cjp-container">
          <div className="cjp-h2-row cjp-reveal">
            <span className="cjp-eyebrow cjp-eyebrow-light">Chapter 05 — Contact</span>
            <h2 className="cjp-h2 cjp-h2-light">Yell at us<br/>(politely).</h2>
          </div>
          <div className="cjp-contact-grid">
            <a href="mailto:contact@cockroachjantaparty.org" className="cjp-contact cjp-reveal">
              <small>Email</small>
              <span>contact@cockroachjantaparty.org</span>
              <em>↗</em>
            </a>
            <a href="mailto:contact@cockroachjantaparty.org" className="cjp-contact cjp-reveal">
              <small>Press</small>
              <span>contact@cockroachjantaparty.org</span>
              <em>↗</em>
            </a>
            <div className="cjp-contact cjp-reveal">
              <small>HQ</small>
              <span>Wherever the wifi works.</span>
              <em>📍</em>
            </div>
            <div className="cjp-contact cjp-reveal">
              <small>Founder &amp; Convenor</small>
              <span>Abhijeet Dipke</span>
              <em>🪳</em>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="cjp-footer">
        <div className="cjp-footer-mega">COCKROACH · JANTA · PARTY ·</div>
        <div className="cjp-container cjp-footer-grid">
          <div>
            <div className="cjp-brand cjp-brand-foot">
              <span className="cjp-brand-roach">🪳</span>
              <span className="cjp-brand-text"><b>CJP</b><i>since now</i></span>
            </div>
            <p>Sponsored by no one. Funded by nothing. HQ: wherever the wifi works.</p>
          </div>
          <div>
            <small>Sitemap</small>
            <ul>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#manifesto">Manifesto</a></li>
              <li><a href="#eligibility">Eligibility</a></li>
              <li><a href="#join">Join</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <small>Channels</small>
            <ul>
              <li><a href={WA_URL} target="_blank" rel="noreferrer">WhatsApp ↗</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Twitter / X ↗</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Instagram ↗</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">YouTube ↗</a></li>
            </ul>
          </div>
          <div>
            <small>Legal-ish</small>
            <p className="cjp-disclaimer">
              Satire, dissent, and chitin. Filed under General Disgruntlement. Now accepting rants, retweets, and resentment.
            </p>
          </div>
        </div>
        <div className="cjp-footer-bottom">
          <span>© {new Date().getFullYear()} CJP</span>
          <span>Made with ❤️ and chitin by a proud Cockroach Janta Party member</span>
        </div>
      </footer>
    </div>
  );
}

/* ============ CSS ============ */
const cjpCss = `
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;700;900&family=Space+Mono:wght@400;700&family=Hind:wght@400;700&display=swap');

.cjp {
  --ink: #0a0a0a;
  --paper: #f5f5f0;
  --lime: #c8ff00;
  --red: #ff3d00;
  --grey: #1a1a1a;
  --muted: #6b6b6b;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', system-ui, 'Hind', sans-serif;
  min-height: 100vh;
  overflow-x: clip;
  position: relative;
  -webkit-font-smoothing: antialiased;
}
.cjp * { box-sizing: border-box; }
.cjp a { color: inherit; text-decoration: none; }
.cjp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; position: relative; }

/* GRAIN */
.cjp-grain {
  position: fixed; inset: 0; pointer-events: none; z-index: 1; opacity: 0.5; mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.35'/></svg>");
}

/* CURSOR */
.cjp-cursor {
  position: fixed; left: 0; top: 0; width: 28px; height: 28px; border-radius: 50%;
  background: var(--lime); mix-blend-mode: difference; z-index: 9999; pointer-events: none;
  box-shadow: 0 0 0 2px var(--ink); transition: width .2s, height .2s;
}
@media (hover: none) { .cjp-cursor { display: none; } }

/* TICKER */
.cjp-ticker { background: var(--ink); color: var(--paper); border-bottom: 2px solid var(--ink); overflow: hidden; position: relative; z-index: 3; }
.cjp-ticker-track {
  display: inline-flex; gap: 2.5rem; padding: 0.6rem 0; white-space: nowrap;
  animation: cjp-marquee 38s linear infinite; font-family: 'Space Mono', monospace; font-size: 0.78rem; letter-spacing: 0.1em;
}
.cjp-ticker-item em { color: var(--lime); font-style: normal; margin-left: 0.4rem; }
@keyframes cjp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* NAV */
.cjp-nav {
  position: sticky; top: 0; z-index: 20;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  padding: 1rem 1.5rem; background: var(--paper);
  border-bottom: 2px solid var(--ink);
}
.cjp-brand { display: flex; align-items: center; gap: 0.65rem; }
.cjp-brand-roach { font-size: 1.8rem; display: inline-block; animation: cjp-wiggle 2.4s ease-in-out infinite; }
.cjp-brand-text b { font-family: 'Archivo Black', sans-serif; font-size: 1.05rem; letter-spacing: 0.02em; line-height: 1; display: block; }
.cjp-brand-text i { font-family: 'Space Mono', monospace; font-style: normal; font-size: 0.65rem; color: var(--muted); display: block; margin-top: 2px; text-transform: uppercase; letter-spacing: 0.15em; }
.cjp-nav-pill { display: flex; gap: 0.25rem; padding: 0.35rem; border: 2px solid var(--ink); border-radius: 999px; background: var(--paper); }
.cjp-nav-pill a { font-family: 'Space Mono', monospace; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.5rem 1rem; border-radius: 999px; transition: all .2s; }
.cjp-nav-pill a:hover { background: var(--ink); color: var(--paper); }
.cjp-nav-cta {
  display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.1rem;
  background: var(--lime); color: var(--ink) !important; border: 2px solid var(--ink);
  font-family: 'Archivo Black', sans-serif; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em;
  border-radius: 999px; box-shadow: 4px 4px 0 var(--ink); transition: transform .15s, box-shadow .15s;
}
.cjp-nav-cta:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
.cjp-nav-cta em { font-style: normal; }
@media (max-width: 820px) { .cjp-nav-pill { display: none; } }

/* HERO */
.cjp-hero { position: relative; padding: 3rem 1.5rem 2rem; z-index: 2; }
.cjp-hero-grid { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1.05fr 1fr; gap: 2rem; align-items: center; }
@media (max-width: 900px) { .cjp-hero-grid { grid-template-columns: 1fr; gap: 1rem; } }
.cjp-hero-tag {
  display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.85rem;
  background: var(--ink); color: var(--paper);
  font-family: 'Space Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em;
  border-radius: 999px;
}
.cjp-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--lime); animation: cjp-pulse 1.4s ease-in-out infinite; }
@keyframes cjp-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }

.cjp-h1 {
  margin: 1.25rem 0 1.5rem;
  font-family: 'Archivo Black', sans-serif;
  font-size: clamp(3.2rem, 9vw, 7.5rem); line-height: 0.85; letter-spacing: -0.04em;
  text-transform: uppercase;
}
.cjp-word { display: block; }
.cjp-word.l1 { color: var(--ink); }
.cjp-word.l2 { color: var(--ink); padding-left: 0.5em; }
.cjp-word.l2 i { font-style: italic; font-family: 'Inter', serif; font-weight: 900; background: var(--lime); padding: 0 0.2em; transform: rotate(-2deg) translateY(-4px); display: inline-block; }
.cjp-word.l3 { font-family: 'Hind', sans-serif; font-weight: 700; color: var(--red); font-size: 0.65em; padding-left: 0.6em; }
.cjp-accent { color: var(--red); }
.cjp-strike { position: relative; opacity: 0.5; }
.cjp-strike::after { content: ''; position: absolute; left: -5%; right: -5%; top: 50%; height: 6px; background: var(--ink); transform: rotate(-6deg); }

.cjp-sub { font-size: clamp(1rem, 1.3vw, 1.15rem); max-width: 520px; line-height: 1.5; color: var(--grey); }
.cjp-sub b { color: var(--ink); font-weight: 900; }
.cjp-sub span { color: var(--muted); }

.cjp-hero-ctas { display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
.cjp-btn {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.95rem 1.4rem; border: 2px solid var(--ink);
  font-family: 'Archivo Black', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.04em;
  border-radius: 999px; transition: transform .15s, box-shadow .15s, background .15s;
  cursor: pointer;
}
.cjp-btn em { font-style: normal; transition: transform .2s; }
.cjp-btn:hover em { transform: translateX(4px); }
.cjp-btn-primary { background: var(--ink); color: var(--paper); box-shadow: 5px 5px 0 var(--lime); }
.cjp-btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--lime); background: var(--red); }
.cjp-btn-ghost { background: var(--paper); color: var(--ink); }
.cjp-btn-ghost:hover { background: var(--lime); }
.cjp-btn-num { background: var(--red); color: var(--paper); padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.75rem; }
.cjp-btn-dark { background: var(--ink); color: var(--paper); box-shadow: 5px 5px 0 var(--ink); }
.cjp-btn-dark:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 var(--ink); background: var(--red); }
.cjp-btn-ghost-dark { background: transparent; color: var(--ink); border-color: var(--ink); }
.cjp-btn-ghost-dark:hover { background: var(--ink); color: var(--lime); }
.cjp-btn-block { display: flex; justify-content: center; width: 100%; margin-top: 1rem; }

/* HERO STAGE */
.cjp-hero-stage { position: relative; aspect-ratio: 1/1; max-width: 520px; margin: 0 auto; }
.cjp-stage-bg { position: absolute; inset: 0; border: 2px solid var(--ink); border-radius: 32px; overflow: hidden; background: var(--lime); }
.cjp-blob { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.7; }
.cjp-blob.b1 { width: 60%; height: 60%; background: var(--red); top: -10%; right: -10%; animation: cjp-float 9s ease-in-out infinite; }
.cjp-blob.b2 { width: 50%; height: 50%; background: #00d4ff; bottom: -15%; left: -10%; animation: cjp-float 11s ease-in-out infinite reverse; }
.cjp-cross-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--ink) 1px, transparent 1px),
    linear-gradient(90deg, var(--ink) 1px, transparent 1px);
  background-size: 40px 40px; opacity: 0.08;
}
.cjp-roach-wrap { position: absolute; inset: 0; display: grid; place-items: center; }
.cjp-roach { animation: cjp-bob 3.5s ease-in-out infinite; filter: drop-shadow(8px 8px 0 var(--ink)); position: relative; z-index: 2; }
.cjp-roach-shadow { position: absolute; bottom: 12%; left: 50%; width: 60%; height: 12px; background: var(--ink); opacity: 0.35; border-radius: 50%; filter: blur(6px); transform: translateX(-50%); animation: cjp-shadow 3.5s ease-in-out infinite; }
@keyframes cjp-bob { 0%,100% { transform: translateY(-6px) rotate(-1deg); } 50% { transform: translateY(6px) rotate(2deg); } }
@keyframes cjp-shadow { 0%,100% { transform: translateX(-50%) scale(1); opacity: 0.35; } 50% { transform: translateX(-50%) scale(0.7); opacity: 0.55; } }
@keyframes cjp-wiggle { 0%,100% { transform: rotate(-12deg); } 50% { transform: rotate(15deg); } }
@keyframes cjp-float { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,-20px); } }
.cjp-antenna { animation: cjp-antenna 1.6s ease-in-out infinite; }
.cjp-antenna.a-r { animation-delay: -0.8s; }
@keyframes cjp-antenna { 0%,100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
.cjp-leg { animation: cjp-leg 0.55s ease-in-out infinite; }
.cjp-leg.L0, .cjp-leg.R1 { animation-delay: -0.15s; }
.cjp-leg.L1, .cjp-leg.R2 { animation-delay: -0.3s; }
.cjp-leg.L2, .cjp-leg.R0 { animation-delay: -0.45s; }
@keyframes cjp-leg { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }

/* STAMPS */
.cjp-stamp {
  position: absolute; display: grid; place-items: center; border-radius: 50%;
  font-family: 'Archivo Black', sans-serif; text-transform: uppercase; text-align: center;
  font-size: 0.7rem; line-height: 1; padding: 0.4rem; z-index: 3;
}
.cjp-stamp-1 { top: 4%; right: 2%; width: 100px; height: 100px; background: var(--red); color: var(--paper); transform: rotate(12deg); border: 2px solid var(--ink); }
.cjp-stamp-2 { bottom: 6%; right: -2%; width: 80px; height: 80px; background: var(--ink); color: var(--lime); transform: rotate(-15deg); }
.cjp-stamp-3 { top: 38%; left: -6%; width: 78px; height: 78px; background: var(--paper); color: var(--ink); border: 2px solid var(--ink); transform: rotate(-8deg); }
.cjp-stamp span { display: block; }

/* RIBBON */
.cjp-ribbon {
  margin-top: 3rem;
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink);
  background: var(--ink); color: var(--paper);
}
.cjp-ribbon > div { padding: 1.25rem 1rem; border-right: 1px solid #2a2a2a; }
.cjp-ribbon > div:last-child { border-right: none; }
.cjp-ribbon b { font-family: 'Archivo Black', sans-serif; font-size: clamp(2rem, 4vw, 3.2rem); display: block; line-height: 1; }
.cjp-ribbon span { font-family: 'Space Mono', monospace; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin-top: 0.35rem; display: block; }
@media (max-width: 720px) { .cjp-ribbon { grid-template-columns: repeat(2, 1fr); } .cjp-ribbon > div:nth-child(2) { border-right: none; } }

/* BIG MARQUEE */
.cjp-bigmarquee { background: var(--lime); color: var(--ink); overflow: hidden; border-bottom: 2px solid var(--ink); position: relative; z-index: 2; }
.cjp-bigmarquee-track {
  display: inline-flex; gap: 2.5rem; padding: 1.25rem 0; white-space: nowrap;
  animation: cjp-marquee 28s linear infinite;
  font-family: 'Archivo Black', sans-serif; font-size: clamp(1.5rem, 3vw, 2.5rem); text-transform: uppercase; letter-spacing: -0.01em;
}
.cjp-bigmarquee-track em { font-style: normal; color: var(--red); }

/* SECTIONS */
.cjp-section { padding: 5rem 0; position: relative; z-index: 2; }
.cjp-section-dark { background: var(--ink); color: var(--paper); }
.cjp-section-lime { background: var(--lime); color: var(--ink); }
.cjp-h2-row { max-width: 900px; margin-bottom: 3rem; }
.cjp-eyebrow {
  display: inline-block; font-family: 'Space Mono', monospace; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.18em;
  background: var(--ink); color: var(--paper); padding: 0.35rem 0.75rem; border-radius: 4px;
}
.cjp-eyebrow-light { background: var(--lime); color: var(--ink); }
.cjp-eyebrow-dark { background: var(--ink); color: var(--lime); }
.cjp-h2 {
  font-family: 'Archivo Black', sans-serif; font-size: clamp(2.5rem, 6.5vw, 5.5rem);
  line-height: 0.92; letter-spacing: -0.03em; margin: 1rem 0 1.25rem; text-transform: uppercase;
}
.cjp-h2 em { font-style: italic; background: var(--lime); padding: 0 0.2em; display: inline-block; transform: rotate(-2deg); }
.cjp-h2-light em { background: var(--lime); color: var(--ink); }
.cjp-h2-dark em { background: var(--ink); color: var(--lime); }
.cjp-lede { font-size: clamp(1rem, 1.3vw, 1.2rem); max-width: 640px; color: var(--grey); line-height: 1.55; }
.cjp-lede-dark { color: var(--ink); opacity: 0.85; }
.cjp-section-dark .cjp-lede { color: #b9b9b9; }

/* BENTO */
.cjp-bento { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
.cjp-tile {
  border: 2px solid var(--ink); border-radius: 24px; padding: 1.75rem;
  background: var(--paper); position: relative; transition: transform .3s, box-shadow .3s;
  min-height: 220px; display: flex; flex-direction: column; justify-content: space-between;
}
.cjp-tile:hover { transform: translate(-3px,-3px); box-shadow: 8px 8px 0 var(--ink); }
.cjp-tile-1 { grid-column: span 4; transform: rotate(-0.4deg); }
.cjp-tile-2 { grid-column: span 2; transform: rotate(0.6deg); }
.cjp-tile-3 { grid-column: span 2; transform: rotate(-0.3deg); }
.cjp-tile-4 { grid-column: span 4; transform: rotate(0.4deg); }
.cjp-tile-lime { background: var(--lime); }
.cjp-tile-red { background: var(--red); color: var(--paper); }
.cjp-tile-num { font-family: 'Space Mono', monospace; font-size: 0.85rem; opacity: 0.7; }
.cjp-tile h3 { font-family: 'Archivo Black', sans-serif; font-size: clamp(1.4rem, 2.2vw, 1.9rem); line-height: 1; margin: 0.75rem 0 0.6rem; text-transform: uppercase; }
.cjp-tile p { font-size: 0.95rem; line-height: 1.5; }
@media (max-width: 820px) {
  .cjp-bento { grid-template-columns: 1fr; }
  .cjp-tile-1, .cjp-tile-2, .cjp-tile-3, .cjp-tile-4 { grid-column: span 1; transform: none; }
}

/* DEMANDS */
.cjp-demands { list-style: none; margin: 0; padding: 0; border-top: 1px solid #2a2a2a; }
.cjp-demand {
  display: grid; grid-template-columns: 120px 1fr 60px; gap: 1.5rem; align-items: center;
  padding: 2rem 0.5rem; border-bottom: 1px solid #2a2a2a;
  cursor: pointer; transition: padding .3s, background .3s;
}
.cjp-demand:hover { padding-left: 1.5rem; padding-right: 1.5rem; background: #111; }
.cjp-demand:hover .cjp-demand-num { color: var(--lime); }
.cjp-demand:hover .cjp-demand-arrow { transform: translate(6px,-6px) rotate(0); color: var(--lime); }
.cjp-demand-num { font-family: 'Archivo Black', sans-serif; font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1; color: #444; transition: color .3s; }
.cjp-demand-body h3 { font-family: 'Archivo Black', sans-serif; font-size: clamp(1.3rem, 2.4vw, 2rem); text-transform: uppercase; line-height: 1.05; margin: 0 0 0.5rem; }
.cjp-demand-body p { color: #b9b9b9; line-height: 1.55; max-width: 700px; }
.cjp-demand-arrow { font-size: 2rem; color: #555; transition: transform .3s, color .3s; transform: rotate(0); justify-self: end; }
@media (max-width: 700px) {
  .cjp-demand { grid-template-columns: 60px 1fr; }
  .cjp-demand-arrow { display: none; }
}

/* ELIG */
.cjp-elig { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.cjp-elig-card {
  border: 2px solid var(--ink); border-radius: 20px; padding: 1.5rem; background: var(--paper);
  transition: transform .3s, box-shadow .3s, background .3s;
}
.cjp-elig-card:hover { transform: translateY(-6px); box-shadow: 6px 6px 0 var(--ink); background: var(--lime); }
.cjp-elig-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.cjp-elig-id { font-family: 'Space Mono', monospace; font-size: 0.7rem; opacity: 0.65; letter-spacing: 0.1em; }
.cjp-check { width: 28px; height: 28px; border-radius: 50%; background: var(--ink); color: var(--lime); display: grid; place-items: center; font-weight: 900; }
.cjp-elig-card h3 { font-family: 'Archivo Black', sans-serif; font-size: 1.4rem; line-height: 1; margin: 0 0 0.5rem; text-transform: uppercase; }
.cjp-elig-card p { font-size: 0.92rem; line-height: 1.5; color: var(--grey); }
.cjp-fineprint { margin-top: 2rem; font-family: 'Space Mono', monospace; font-size: 0.82rem; color: var(--muted); text-align: center; border-top: 1px dashed var(--ink); padding-top: 1.5rem; }
@media (max-width: 900px) { .cjp-elig { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 520px) { .cjp-elig { grid-template-columns: 1fr; } }

/* JOIN */
.cjp-join { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: center; }
@media (max-width: 900px) { .cjp-join { grid-template-columns: 1fr; } }
.cjp-join-card {
  background: var(--paper); border: 2px solid var(--ink); border-radius: 24px; padding: 2rem;
  box-shadow: 10px 10px 0 var(--ink); transform: rotate(0.8deg);
}
.cjp-join-head { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px dashed var(--ink); padding-bottom: 0.75rem; margin-bottom: 1rem; }
.cjp-join-head b { font-family: 'Archivo Black', sans-serif; text-transform: uppercase; }
.cjp-join-head small { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: var(--muted); }
.cjp-join-qs { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
.cjp-join-qs li { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; line-height: 1.4; }
.cjp-join-qs li span { font-family: 'Space Mono', monospace; font-size: 0.75rem; background: var(--ink); color: var(--lime); padding: 0.15rem 0.4rem; border-radius: 4px; flex: none; }
.cjp-join-qs li em { font-style: italic; color: var(--muted); }
.cjp-form-note { display: block; margin-top: 0.75rem; text-align: center; font-family: 'Space Mono', monospace; font-size: 0.7rem; color: var(--muted); }

/* CONTACT */
.cjp-contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.cjp-contact {
  display: grid; grid-template-columns: 100px 1fr 40px; gap: 1rem; align-items: center;
  padding: 1.5rem; border: 1px solid #2a2a2a; border-radius: 16px;
  transition: background .25s, border-color .25s, transform .25s;
}
.cjp-contact:hover { background: #111; border-color: var(--lime); transform: translateY(-3px); }
.cjp-contact small { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #888; letter-spacing: 0.08em; text-transform: uppercase; }
.cjp-contact span { font-family: 'Archivo Black', sans-serif; font-size: 1rem; text-transform: uppercase; word-break: break-word; }
.cjp-contact em { font-style: normal; font-size: 1.4rem; justify-self: end; }
@media (max-width: 700px) { .cjp-contact-grid { grid-template-columns: 1fr; } .cjp-contact { grid-template-columns: 80px 1fr 30px; } }

/* FOOTER */
.cjp-footer { background: var(--ink); color: var(--paper); padding-top: 3rem; position: relative; z-index: 2; }
.cjp-footer-mega {
  font-family: 'Archivo Black', sans-serif; font-size: clamp(3rem, 14vw, 14rem); line-height: 0.85;
  letter-spacing: -0.04em; white-space: nowrap; overflow: hidden;
  color: transparent; -webkit-text-stroke: 2px var(--lime); padding: 0 1rem;
  user-select: none;
}
.cjp-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 2rem; padding-top: 3rem; padding-bottom: 2rem; }
.cjp-footer-grid small { font-family: 'Space Mono', monospace; font-size: 0.72rem; color: #888; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.75rem; }
.cjp-footer-grid ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.cjp-footer-grid a:hover { color: var(--lime); }
.cjp-footer-grid p { color: #b9b9b9; font-size: 0.9rem; line-height: 1.5; max-width: 320px; }
.cjp-disclaimer { font-family: 'Space Mono', monospace !important; font-size: 0.78rem !important; }
.cjp-brand-foot { margin-bottom: 0.75rem; }
.cjp-footer-bottom {
  border-top: 1px solid #2a2a2a; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; gap: 1rem;
  font-family: 'Space Mono', monospace; font-size: 0.75rem; color: #888; flex-wrap: wrap;
}
@media (max-width: 820px) { .cjp-footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 520px) { .cjp-footer-grid { grid-template-columns: 1fr; } }

/* REVEAL */
.cjp-reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
.cjp-reveal.cjp-in { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .cjp-roach, .cjp-roach-shadow, .cjp-blob, .cjp-dot, .cjp-brand-roach,
  .cjp-antenna, .cjp-leg, .cjp-ticker-track, .cjp-bigmarquee-track { animation: none !important; }
  .cjp-reveal { opacity: 1; transform: none; transition: none; }
}
`;

export default Index;
