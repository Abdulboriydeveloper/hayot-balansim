import "./UmidHudoyberdievVSL.css";

// ─── LOCAL IMAGE IMPORTS ──────────────────────────────────────────────────────
import heroBg      from "./img/hero-bg.webp";
import heroPerson  from "./img/umidaka.png";
import arrowIcon   from "./img/arrow.svg";
import card1       from "./img/card1.webp";
import card2       from "./img/card2.webp";
import card3       from "./img/card3.webp";
import card4       from "./img/card4.webp";
import card5       from "./img/card5.webp";
import authorPhoto from "./img/umidaka2.webp";

/* ─────────────────────────────────────────────
   CREDENTIALS
───────────────────────────────────────────── */
const CREDS = [
  { t: "Eslab qolish bo'yicha Rossiya rekordchisi",                                           gold: false },
  { t: "O'zbekiston Mnemosport Federatsiyasi Prezidenti",                                      gold: true  },
  { t: "Miyani va xotirani rivojlantirish bo'yicha xalqaro ekspert",                           gold: false },
  { t: "Shaxsiy rivojlanish bo'yicha mentor",                                                  gold: true  },
  { t: "4 yil ichida 34,000+ tadan ortiq o'quvchilarimga shaxsiy rivojlanishga yordam bergan", gold: false },
];

/* ─────────────────────────────────────────────
   amoCRM FORMA OCHISH
   (index.html dagi _openAmoForm ni chaqiradi)
───────────────────────────────────────────── */
function openAmoForm() {
  if (window._openAmoForm) window._openAmoForm();
}

/* ─────────────────────────────────────────────
   INSTAGRAM BADGE
───────────────────────────────────────────── */
function InstaBadge() {
  return (
    <a
      href="https://www.instagram.com/umidhudoyberdiev"
      target="_blank"
      rel="noopener noreferrer"
      className="sm-insta-badge"
    >
      <div className="sm-insta-avatar">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
      <span className="sm-insta-username">umidhudoyberdiev</span>
    </a>
  );
}

/* ─────────────────────────────────────────────
   REUSABLE CTA LINK
───────────────────────────────────────────── */
function CtaLink({ onClick }) {
  return (
    <div className="sm-ctalink-row">
      <a href="#" className="sm-ctalink"
        onClick={e => { e.preventDefault(); onClick(); }}>
        Kursga oldindan ro'yxatdan o'ting
      </a>
      <img src={arrowIcon} className="sm-arrow" alt="" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="sm-hero">
      <div className="sm-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="sm-hero-inner">
        <div className="sm-hero-person">
          <img src={heroPerson} alt="Umidjon Hudoyberdiev" />
        </div>
        <div className="sm-hero-text">
          <div className="sm-insta sfu d1"><InstaBadge /></div>
          <h1 className="sm-hero-title sfu d1">HAYOT BALANSIM</h1>
          <p className="sm-hero-sub sfu d2">
            Qanday qilib xotirangizni 10 barobarga kuchaytirish va
            istalgan ma'lumotlarni eslab qolish mumkin?
          </p>
          <button className="sm-btn sfu d3" onClick={openAmoForm}>
            Ro'yxatdan o'tish
          </button>
          <div className="sfu d4">
            <CtaLink onClick={openAmoForm} />
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

/* ─────────────────────────────────────────────
   BENEFITS
───────────────────────────────────────────── */
function Benefits() {
  return (
    <section className="sm-benefits">
      <div className="sm-benefits-inner">
        <div className="sm-row3">
          <div className="sm-card">
            <div className="sm-card-imgbox"><img src={card1} alt="Kurs dasturi" /></div>
            <div className="sm-card-body"><p><strong>Kurs dasturi</strong><br />va batafsil ma'lumotlar</p></div>
          </div>
          <div className="sm-card">
            <div className="sm-card-imgbox"><img src={card2} alt="Eng arzon narxda" /></div>
            <div className="sm-card-body"><p><strong>Eng arzon narxda</strong><br />kursga qo'shilish</p></div>
          </div>
          <div className="sm-card">
            <div className="sm-card-imgbox"><img src={card3} alt="Xotirani rivojlantirish" /></div>
            <div className="sm-card-body">
              <p><strong>Xotirani rivojlantirish</strong> uchun bepul qo'llanma va materiallar</p>
            </div>
          </div>
        </div>
        <div className="sm-row2">
          <div className="sm-card">
            <div className="sm-card-imgbox tall"><img src={card4} alt="7 qadamlik reja" /></div>
            <div className="sm-card-body">
              <p>Superxotiraga ega bo'lish uchun <strong>7 qadamlik</strong> to'liq reja</p>
            </div>
          </div>
          <div className="sm-card red">
            <div className="sm-card-imgbox tall"><img src={card5} alt="Sirli bonuslar" /></div>
            <div className="sm-card-body">
              <p>Hech qayerda berilmagan<br /><strong>sirli bonuslar</strong> (sizga yoqishi aniq)</p>
            </div>
          </div>
        </div>
        <div className="sm-bcta">
          <button className="sm-btn" onClick={openAmoForm}>Ro'yxatdan o'tish</button>
          <CtaLink onClick={openAmoForm} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   AUTHOR
───────────────────────────────────────────── */
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
            <img className="sm-author-photo" src={authorPhoto} alt="Umidjon Hudoyberdiev" />
            <div className="sm-author-cta">
              <button className="sm-btn" onClick={openAmoForm}>Ro'yxatdan o'tish</button>
              <CtaLink onClick={openAmoForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="sm-footer">
      <p className="sm-footer-name">Umidjon Hudoyberdiev</p>
      <p className="sm-footer-phone"><a href="tel:998781139090">+998 78 113 90 90</a></p>
      <div className="sm-footer-legal">
        <p>"HAYOT BALANSIM" MCHJ</p>
        <p>Bog'ishamol MFY, Amir Temur shoh ko'chasi</p>
        <p>Hisob raqam: 20208000005742456001 Bank: Anorbank AJ INN:311052855 MFO:01183</p>
        <br />
        <p>
          This site or product is not part of or endorsed by Facebook, Google, or any social
          media platform in any way. FACEBOOK is a trademark of META PLATFORMS, Inc.
          YOUTUBE and GOOGLE are trademarks of ALPHABET, Inc.
        </p>
      </div>
      <p className="sm-footer-copy">Barcha huquqlar himoyalangan, 2026.</p>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function UmidHudoyberdievVSL() {
  return (
    <>
      <Hero />
      <Benefits />
      <Author />
      <Footer />
    </>
  );
}