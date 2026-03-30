const text = {
  en: {
    title_home: "MY CONCIERGE",
    historical: "Historical",
    mall: "Mall",
    park: "Park",
    market: "Market",
    restaurant: "Restaurant",

    // park
    lumpini: "Lumpini Park",
    benjakitti: "Benjakitti Park",
    chatuchak: "Chatuchak Park",
    rotfai: "Wachirabenchathat Park",
    benchasiri: "Benchasiri Park",

    // restaurant
    gov: "THE GOVERNOR",
    baan: "Baan Khanitha",
    local: "The Local",
    manho: "Man Ho",
    indus: "Indus",
    sala: "Sala Rim Naam",
    shakarik: "Shakarik"
  },

  jp: {
    title_home: "コンシェルジュ",
    historical: "歴史",
    mall: "ショッピングモール",
    park: "公園",
    market: "マーケット",
    restaurant: "レストラン",

    // park
    lumpini: "ルンピニー公園",
    benjakitti: "ベンジャキティ公園",
    chatuchak: "チャトゥチャック公園",
    rotfai: "ワチラベンチャタート公園",
    benchasiri: "ベンチャシリ公園",

    // restaurant
    gov: "ザ・ガバナー",
    baan: "バーン・カニタ",
    local: "ザ・ローカル",
    manho: "マンホー",
    indus: "インダス",
    sala: "サラ・リム・ナーム",
    shakarik: "シャカリキ"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (text[lang][key]) {
      el.innerText = text[lang][key];
    }
  });
}

// โหลดอัตโนมัติทุกหน้า
document.addEventListener("DOMContentLoaded", function () {
  const lang = localStorage.getItem("lang") || "en";
  applyLang(lang);
});
