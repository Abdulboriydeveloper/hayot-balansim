import { useEffect } from "react";
import "./UmidHudoyberdievVSL.css";

import heroBg      from "./img/hero-bg.webp";
import heroPerson  from "./img/umidaka.png";
import arrowIcon   from "./img/arrow.svg";
import card1       from "./img/card1.webp";
import card2       from "./img/card2.webp";
import card3       from "./img/card3.svg";
import card4       from "./img/card4.svg";
import card5       from "./img/card5.svg";
import card6       from "./img/card5.webp";
import authorPhoto from "./img/umidaka2.webp";

const CREDS = [
  { t: "Hayotni moliyaviy rejalash bo'yicha Yaponiyada tajriba orttirgan",             gold: false },
  { t: "Islomiy moliya bo'yicha Birlashgan Arab Amirliklarida tajriba orttirgan",      gold: true  },
  { t: "1000dan ortiq insonlarga shaxsiy va islomiy moliya bo'yicha dars bergan",      gold: false },
  { t: "Chet davlatlar bilan bir nechta qo'shma korxonalar asoschisi",                 gold: true  },
  { t: "Mahalliy sug'urta bozoriga 5mln$ investitsiya jalb qilgan",                   gold: false },
  { t: "Moliya va pulni to'g'ri boshqarish sohasida 20 yildan beri yashaydi",          gold: true  },
];

function goToForm() {
  window.location.href = "/registration";
}

function InstaBadge() {
  return (
    
      <a href="https://www.instagram.com/umid_hudoyberdiev"
      target="_blank"
      rel="noopener noreferrer"
      className="sm-insta-badge"
      aria-label="Instagram: umidhudoyberdiev"
    >
      <div className="sm-insta-avatar">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
      <span className="sm-insta-username">umidhudoyberdiev</span>
    </a>
  );
}

function CtaLink({ onClick }) {
  return (
    <div className="sm-ctalink-row">
      <a href="#" className="sm-ctalink" onClick={e => { e.preventDefault(); onClick(); }}>
        Kursga oldindan ro'yxatdan o'ting
      </a>
      <img src={arrowIcon} className="sm-arrow" alt="" width="18" height="18" />
    </div>
  );
}

function Hero() {
  return (
    <section className="sm-hero">
      <div
        className="sm-hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="presentation"
      />
      <div className="sm-hero-inner">
        <div className="sm-hero-person">
          <img
            src={heroPerson}
            alt="Umidjon Hudoyberdiev"
            fetchpriority="high"
            decoding="async"
            width="500"
            height="650"
          />
        </div>
        <div className="sm-hero-text">
          <div className="sm-insta sfu d1"><InstaBadge /></div>
          <h1 className="sm-hero-title sfu d1">HAYOT BALANSIM</h1>
          <p className="sm-hero-sub sfu d2">
            Qanday qilib qisqa vaqt ichida barcha qarzlarni yopib,
            hotirjam hayot balansiga ega bo'lish mumkin?
          </p>
          <button className="sm-btn sfu d3" onClick={goToForm}>
            Ro'yxatdan o'tish
          </button>
          <div className="sfu d4">
            <CtaLink onClick={goToForm} />
          </div>
        </div>
      </div>
      <div className="sm-sec-title-wrap">
        <p className="sm-sec-title">
          Ro'yxatdan o'tish orqali{" "}
          <span className="red">qo'lga kiritasiz:</span>
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  const topCards = [
    { src: card1, alt: "Kurs dasturi",       body: <p><strong>Kurs dasturi</strong><br />va batafsil ma'lumotlar</p> },
    { src: card2, alt: "Eng arzon narxda",   body: <p><strong>Eng arzon narxda</strong><br />kursga qo'shilish</p> },
    { src: card3, alt: "PNL shabloni",       body: <p><strong>1 oylik oilaviy</strong> PNL shabloni</p> },
  ];
  const bottomCards = [
    { src: card4, alt: "50 ta yo'nalish",    body: <p>Investitsiya qilish mumkin bo'gan <strong>50 ta</strong> yo'nalish</p>,       tall: true },
    { src: card5, alt: "Islomiy moliya",     body: <p><strong>Islomiy moliya</strong><br />bo'yicha maxsus darslar</p>,              tall: true },
    { src: card6, alt: "Bonuslar",           body: <p>Hech qayerda berilmagan<br /><strong>BONUSLAR</strong> (sizga yoqishi aniq)</p>, red: true },
  ];

  return (
    <section className="sm-benefits">
      <div className="sm-benefits-inner">
        <div className="sm-row3">
          {topCards.map((c, i) => (
            <div className="sm-card" key={i}>
              <div className="sm-card-imgbox">
                <img src={c.src} alt={c.alt} loading="lazy" decoding="async" width="260" height="140" />
              </div>
              <div className="sm-card-body">{c.body}</div>
            </div>
          ))}
        </div>
        <div className="sm-row3">
          {bottomCards.map((c, i) => (
            <div className={`sm-card${c.red ? " red" : ""}`} key={i}>
              <div className={`sm-card-imgbox${c.tall ? " tall" : ""}`}>
                <img src={c.src} alt={c.alt} loading="lazy" decoding="async" width="260" height="170" />
              </div>
              <div className="sm-card-body">{c.body}</div>
            </div>
          ))}
        </div>
        <div className="sm-bcta">
          <button className="sm-btn" onClick={goToForm}>Ro'yxatdan o'tish</button>
          <CtaLink onClick={goToForm} />
        </div>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section className="sm-author">
      <div className="sm-author-inner">
        <h2 className="sm-author-title-text">Umidjon Hudoyberdiev</h2>
        <div className="sm-author-body">
          <div className="sm-creds">
            {CREDS.map((c, i) => (
              <div key={i} className={`sm-cred ${c.gold ? "sm-cred-g" : "sm-cred-w"}`}>
                {c.t}
              </div>
            ))}
          </div>
          <div className="sm-author-right">
            <img
              className="sm-author-photo"
              src={authorPhoto}
              alt="Umidjon Hudoyberdiev"
              loading="lazy"
              decoding="async"
              width="260"
              height="300"
            />
            <div className="sm-author-cta">
              <button className="sm-btn" onClick={goToForm}>Ro'yxatdan o'tish</button>
              <CtaLink onClick={goToForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sm-footer">
      <p className="sm-footer-name">Umidjon Hudoyberdiev</p>
      <p className="sm-footer-phone">
        <a href="tel:+998957007731">+998 95 700 77 31</a>
      </p>
      <div className="sm-footer-legal">
        <p>
          This site is not part of or endorsed by Facebook, Google, or any social media
          platform. FACEBOOK is a trademark of META PLATFORMS, Inc.
          YOUTUBE and GOOGLE are trademarks of ALPHABET, Inc.
        </p>
      </div>
      <p className="sm-footer-copy">Barcha huquqlar himoyalangan, 2026.</p>
    </footer>
  );
}

export default function UmidHudoyberdievVSL() {
  useEffect(() => {
    // Meta Pixel Code
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", "1536981658027062");
    window.fbq("track", "PageView");

    // Noscript fallback
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src =
      "https://www.facebook.com/tr?id=1536981658027062&ev=PageView&noscript=1";
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    return () => {
      document.body.removeChild(noscript);
    };
  }, []);

  return (
    <>
      <Hero />
      <Benefits />
      <Author />
      <Footer />
    </>
  );
}