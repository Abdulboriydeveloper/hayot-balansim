import { useEffect, useState } from "react";
import "./UmidHudoyberdievVSL.css";

const AMOCRM_FORM_URL = "https://forms.amocrm.ru/rzrlwrd";

export default function Registration() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", "1536981658027062");
    window.fbq("track", "PageView");

    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=1536981658027062&ev=PageView&noscript=1";
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    return () => {
      document.body.removeChild(noscript);
    };
  }, []);

  return (
    <main className="registration-page">
      <section className="registration-shell">
        <div className="registration-heading">
          <a className="registration-back" href="/">
            Ortga
          </a>
          <p className="registration-kicker">Hayot Balansim</p>
          <h1>Ro'yxatdan o'tish</h1>
        </div>

        <div className="registration-form-wrap" style={{ position: "relative" }}>
          {/* Skeleton loader — iframe yuklanguncha ko'rinadi */}
          {!loaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                background: "#fff",
                borderRadius: "12px",
                zIndex: 2,
              }}
            >
              {/* Spinner */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid #f0f0f0",
                  borderTop: "3px solid #e63946",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              <p style={{ margin: 0, fontSize: "14px", color: "#888" }}>
                Forma yuklanmoqda...
              </p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}

          <iframe
            title="Hayot Balansim ro'yxatdan o'tish formasi"
            src={AMOCRM_FORM_URL}
            className="registration-form"
            loading="eager"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>
      </section>
    </main>
  );
}