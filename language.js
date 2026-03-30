const text = {
  en: {
    title_home: "MY CONCIERGE",
    hotel: "HILTON BANGKOK GRANDE ASOKE",
    historical: "📍 Historical",
    mall: "🛍 Mall",
    park: "🌳 Park",
    market: "🛒 Market",
    restaurant: "🍽 Restaurant",

    lumpini: "Lumpini Park",
    benjakitti: "Benjakitti Park",
    chatuchak: "Chatuchak Park",
    rotfai: "Wachirabenchathat Park",
    benchasiri: "Benchasiri Park",

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
    hotel: "ヒルトン バンコク グランデ アソーク",
    historical: "📍 歴史スポット",
    mall: "🛍 ショッピングモール",
    park: "🌳 公園",
    market: "🛒 マーケット",
    restaurant: "🍽 レストラン",

    lumpini: "ルンピニー公園",
    benjakitti: "ベンジャキティ公園",
    chatuchak: "チャトゥチャック公園",
    rotfai: "ワチラベンチャタート公園",
    benchasiri: "ベンチャシリ公園",

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

document.addEventListener("DOMContentLoaded", function () {
  const lang = localStorage.getItem("lang") || "en";
  applyLang(lang);
});
