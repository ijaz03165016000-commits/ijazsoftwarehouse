/*!
 * Ijaz Network Ads — cross-promotion block for all Ijaz Software House sites
 * Powered by Ijaz Software House · www.ijazs.online · 0092-344-0807888
 *
 * Usage (any site, any page):
 *   <div id="ijaz-network"></div>                      (optional: where the block appears)
 *   <script src="https://www.ijazs.online/ijaz-network-ads.js" defer></script>
 *
 * Options on the <div> or the <script> tag:
 *   data-lang="ur"     Urdu (right-to-left) version — use on dailykashmir.online
 *   data-site="newkarachi.online"   force which site this is (normally auto-detected)
 *
 * If there is no <div id="ijaz-network">, the block is placed just above the page footer.
 * The current site is never advertised on itself.
 * Every link carries utm_source=<this site>&utm_medium=network_ad so you can see which site sends visitors.
 */
(function () {
  "use strict";

  // ---------- Ads (edit here; every site updates at once) ----------
  var WA = "923440807888";
  var ADS = [
    {
      id: "ijazs.online", featured: true, color: "#4f46e5", color2: "#7c3aed", icon: "💻",
      url: "https://www.ijazs.online/",
      en: { tag: "WEBSITES · APPS · ERP", title: "Ijaz Software House", text: "Websites from Rs 25,000, Android apps, school & hospital ERP, graphic design and social media marketing.", cta: "Get a free quote" },
      ur: { tag: "ویب سائٹ · ایپس · ای آر پی", title: "اعجاز سافٹ ویئر ہاؤس", text: "ویب سائٹ صرف 25,000 روپے سے، اینڈرائیڈ ایپس، اسکول و ہسپتال ای آر پی، گرافک ڈیزائن اور سوشل میڈیا مارکیٹنگ۔", cta: "مفت قیمت معلوم کریں" },
      wa: "Assalam o Alaikum, I saw your ad and want a website/software quote."
    },
    {
      id: "studentpointacademy.online", featured: true, color: "#0369a1", color2: "#f59e0b", icon: "🎓",
      url: "https://www.studentpointacademy.online/",
      en: { tag: "ADMISSIONS OPEN · MIRPUR AJK", title: "Student Point Academy", text: "Tuition for ages 4–18, Matric, FSc/ICS, O & A Level, Quran, Python, Arduino & IoT. Online and physical. Free demo class.", cta: "Book free demo" },
      ur: { tag: "داخلے جاری ہیں · میرپور آزاد کشمیر", title: "اسٹوڈنٹ پوائنٹ اکیڈمی", text: "4 سے 18 سال کے بچوں کے لیے ٹیوشن، میٹرک، ایف ایس سی / آئی سی ایس، او اور اے لیول، قرآن، پائتھن، آرڈوینو۔ آن لائن اور فزیکل۔ مفت ڈیمو کلاس۔", cta: "مفت ڈیمو کلاس بک کریں" },
      wa: "Assalam o Alaikum, I saw your ad and want to book a free demo class at Student Point Academy.",
      // Time-limited extra line (hidden automatically after the date)
      promo: { until: "2026-10-10", en: "🤖 New: Automation & Robotics batch starts 10 Oct, only 5 seats", ur: "🤖 نیا: آٹومیشن اور روبوٹکس بیچ 10 اکتوبر سے، صرف 5 سیٹیں" }
    },
    {
      id: "newkarachi.online", color: "#dc2626", color2: "#f97316", icon: "🍕",
      url: "https://newkarachi.online/",
      en: { tag: "FOOD DELIVERY · MIRPUR", title: "New Karachi Ice Cream & Pizza", text: "Pizza, zingers, broast, shawarma and special falooda. Delivery 10 AM to 2 AM.", cta: "Order now" },
      ur: { tag: "فوڈ ڈیلیوری · میرپور", title: "نیو کراچی آئس کریم اینڈ پیزا", text: "پیزا، زنگر، بروسٹ، شوارما اور اسپیشل فالودہ۔ ڈیلیوری صبح 10 سے رات 2 بجے تک۔", cta: "ابھی آرڈر کریں" }
    },
    {
      id: "starscollege.online", color: "#0B2545", color2: "#c99a2e", icon: "⭐",
      url: "https://www.starscollege.online/",
      en: { tag: "ADMISSIONS 2026–27", title: "STARs College Mirpur", text: "Class 8 to 12: Pre-Medical, Pre-Engineering, ICS and I.Com, affiliated with BISE Mirpur.", cta: "Apply now", path: "admissions.html" },
      ur: { tag: "داخلے 2026–27", title: "اسٹارز کالج میرپور", text: "کلاس 8 سے 12: پری میڈیکل، پری انجینئرنگ، آئی سی ایس اور آئی کام، بی آئی ایس ای میرپور سے الحاق شدہ۔", cta: "داخلہ لیں", path: "admissions.html" }
    },
    {
      id: "zameen.online", color: "#1a3f8f", color2: "#16a34a", icon: "🏡",
      url: "https://www.zameen.online/",
      en: { tag: "PROPERTY", title: "Zameen Online", text: "Houses, plots, apartments and shops for sale and rent across Azad Kashmir and Pakistan.", cta: "Find property" },
      ur: { tag: "پراپرٹی", title: "زمین آن لائن", text: "آزاد کشمیر اور پاکستان بھر میں مکان، پلاٹ، فلیٹ اور دکانیں، خرید و فروخت اور کرایہ۔", cta: "پراپرٹی تلاش کریں" }
    },
    {
      id: "dailykashmir.online", color: "#0a6b3d", color2: "#15803d", icon: "📰",
      url: "https://www.dailykashmir.online/",
      en: { tag: "NEWS · URDU", title: "Daily Kashmir Online", text: "Daily Kashmir news in Urdu: IIOJK, Azad Kashmir and human rights.", cta: "Read the news" },
      ur: { tag: "خبریں · اردو", title: "ڈیلی کشمیر آن لائن", text: "مقبوضہ کشمیر، آزاد کشمیر اور انسانی حقوق کی روزانہ خبریں اردو میں۔", cta: "خبریں پڑھیں" }
    },
    {
      id: "kashmir24.online", color: "#0a1d37", color2: "#2563eb", icon: "🌐",
      url: "https://www.kashmir24.online/",
      en: { tag: "NEWS · ENGLISH", title: "Kashmir24", text: "Voice of Kashmir: IIOJK, Azad Kashmir, human rights and minorities in India, in English.", cta: "Visit Kashmir24" },
      ur: { tag: "خبریں · انگریزی", title: "کشمیر24", text: "مقبوضہ کشمیر، آزاد کشمیر، انسانی حقوق اور بھارت میں اقلیتوں کی خبریں انگریزی میں۔", cta: "کشمیر24 دیکھیں" }
    }
  ];

  // ---------- Setup ----------
  if (window.__ijazNetworkLoaded) return;
  window.__ijazNetworkLoaded = true;

  var script = document.currentScript || document.querySelector('script[src*="ijaz-network-ads"]');
  function opt(name) {
    var holder = document.getElementById("ijaz-network");
    return (holder && holder.getAttribute("data-" + name)) || (script && script.getAttribute("data-" + name)) || "";
  }

  function hostOf(s) { return String(s || "").toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[\/:?#]/)[0]; }
  var here = hostOf(opt("site") || location.hostname);
  var lang = opt("lang") === "ur" || (!opt("lang") && here === "dailykashmir.online") ? "ur" : "en";
  var rtl = lang === "ur";

  function withUtm(url, path) {
    var u = url + (path || "");
    var src = here || "unknown";
    return u + (u.indexOf("?") > -1 ? "&" : "?") + "utm_source=" + encodeURIComponent(src) + "&utm_medium=network_ad&utm_campaign=ijaz_network";
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var today = new Date();
  var list = ADS.filter(function (a) { return a.id !== here; });
  var featured = list.filter(function (a) { return a.featured; });
  var others = list.filter(function (a) { return !a.featured; });
  // Shuffle the others so every site gets a turn at the top
  for (var i = others.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = others[i]; others[i] = others[j]; others[j] = t; }

  function card(a, big) {
    var c = a[lang];
    var promo = a.promo && today <= new Date(a.promo.until + "T23:59:59+05:00") ? '<div class="promo">' + esc(a.promo[lang]) + "</div>" : "";
    var wa = a.wa ? '<a class="wa" href="https://wa.me/' + WA + "?text=" + encodeURIComponent(a.wa + " (" + (here || "web") + ")") + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + (rtl ? "واٹس ایپ" : "WhatsApp") + "</a>" : "";
    return '<div class="card' + (big ? " big" : "") + '" style="--c1:' + a.color + ";--c2:" + a.color2 + '">' +
      '<a class="main" href="' + esc(withUtm(a.url, c.path)) + '" target="_blank" rel="noopener">' +
        '<span class="ic">' + a.icon + "</span>" +
        '<span class="body"><span class="tag">' + esc(c.tag) + '</span><span class="title">' + esc(c.title) + '</span><span class="text">' + esc(c.text) + "</span>" + promo +
        '<span class="cta">' + esc(c.cta) + (rtl ? " ←" : " →") + "</span></span>" +
      "</a>" + wa + "</div>";
  }

  var css = [
    ":host{all:initial;display:block}",
    ".wrap{font-family:" + (rtl ? "'Noto Nastaliq Urdu','Jameel Noori Nastaleeq','Noto Naskh Arabic',Tahoma,sans-serif" : "system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif") + ";direction:" + (rtl ? "rtl" : "ltr") + ";max-width:1180px;margin:28px auto;padding:18px 16px;box-sizing:border-box;background:#f8fafc;border:1px solid #e2e8f0;border-radius:16px;color:#0f172a}",
    ".wrap *{box-sizing:border-box}",
    ".head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin:0 2px 12px;flex-wrap:wrap}",
    ".head b{font-size:15px;letter-spacing:.2px}",
    ".head small{font-size:11px;color:#64748b;border:1px solid #cbd5e1;border-radius:999px;padding:2px 8px}",
    ".feat{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-bottom:12px}",
    ".grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}",
    ".card{position:relative;border-radius:14px;overflow:hidden;background:#fff;border:1px solid #e2e8f0;transition:transform .15s,box-shadow .15s}",
    ".card:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(15,23,42,.12)}",
    ".card.big{background:linear-gradient(135deg,var(--c1),var(--c2));border:0;color:#fff}",
    ".main{display:flex;gap:12px;padding:14px;text-decoration:none;color:inherit;height:100%}",
    ".ic{flex:0 0 auto;width:44px;height:44px;border-radius:12px;display:grid;place-items:center;font-size:24px;background:linear-gradient(135deg,var(--c1),var(--c2))}",
    ".big .ic{width:54px;height:54px;font-size:30px;background:rgba(255,255,255,.18)}",
    ".body{display:flex;flex-direction:column;gap:3px;min-width:0}",
    ".tag{font-size:10px;font-weight:700;letter-spacing:.6px;color:var(--c1)}",
    ".big .tag{color:rgba(255,255,255,.85)}",
    ".title{font-size:15px;font-weight:800;line-height:1.3}",
    ".big .title{font-size:18px}",
    ".text{font-size:12.5px;line-height:1.5;color:#475569}",
    ".big .text{font-size:13.5px;color:rgba(255,255,255,.92)}",
    ".promo{margin-top:4px;font-size:12px;font-weight:700;background:rgba(255,255,255,.95);color:#92400e;border-radius:8px;padding:4px 8px;align-self:flex-start}",
    ".cta{margin-top:6px;font-size:12.5px;font-weight:700;color:var(--c1)}",
    ".big .cta{align-self:flex-start;background:#fff;color:var(--c1);padding:6px 12px;border-radius:999px;margin-top:8px}",
    ".big .main{padding-" + (rtl ? "left" : "right") + ":96px}",
    ".wa{position:absolute;bottom:12px;" + (rtl ? "left" : "right") + ":12px;font-size:12px;font-weight:700;text-decoration:none;color:#fff;background:#16a34a;padding:6px 10px;border-radius:999px}",
    ".foot{margin:12px 2px 0;font-size:11px;color:#64748b;text-align:center}",
    ".foot a{color:#4f46e5;text-decoration:none;font-weight:700}",
    rtl ? ".text,.title{line-height:1.9}" : "",
    "@media (max-width:480px){.wrap{margin:18px 8px;padding:14px 10px}.big .main{padding-" + (rtl ? "left" : "right") + ":14px;padding-bottom:50px}}"
  ].join("");

  var html =
    '<div class="wrap" role="complementary" aria-label="' + (rtl ? "ہمارا نیٹ ورک" : "Our network") + '">' +
      '<div class="head"><b>' + (rtl ? "ہمارے نیٹ ورک سے" : "From our network") + "</b><small>" + (rtl ? "اشتہار" : "Sponsored") + "</small></div>" +
      (featured.length ? '<div class="feat">' + featured.map(function (a) { return card(a, true); }).join("") + "</div>" : "") +
      '<div class="grid">' + others.map(function (a) { return card(a, false); }).join("") + "</div>" +
      '<div class="foot">' + (rtl ? "تیار کردہ: " : "Powered by ") + '<a href="' + esc(withUtm("https://www.ijazs.online/")) + '" target="_blank" rel="noopener">Ijaz Software House</a> · 0092-344-0807888</div>' +
    "</div>";

  function mount() {
    var holder = document.getElementById("ijaz-network");
    if (!holder) {
      holder = document.createElement("div");
      holder.id = "ijaz-network";
      var footer = document.querySelector("footer") || document.querySelector(".footer, #footer, .footer-outer, #footer-wrapper");
      if (footer && footer.parentNode) footer.parentNode.insertBefore(holder, footer);
      else document.body.appendChild(holder);
    }
    var root = holder.attachShadow ? holder.attachShadow({ mode: "open" }) : holder;
    root.innerHTML = "<style>" + css + "</style>" + html;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
