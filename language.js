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
    shakarik: "Shakarik",   // ต้องมี comma

    grandpalace_title: "Grand Palace",
    highlight: "Highlight",
    admission: "Admission Fee",
    time: "Time",
    direction: "Direction",
    googlemaps: "Google Maps",

    grandpalace_desc: "The Grand Palace is one of Thailand’s most important historical and cultural landmarks, attracting visitors from around the world. Built in 1782 during the reign of King Rama I, it served as the royal residence and administrative center for over a century. The complex showcases magnificent Thai architecture with golden spires and detailed murals. Within the palace grounds is Wat Phra Kaew, the Temple of the Emerald Buddha, Thailand’s most sacred religious image.",

    gp_fee: "Foreigners: 500 THB per person",
    gp_time: "08:30 AM – 03:30 PM",
    gp_direction: "MRT Sanam Chai (Exit 1) 10 minute walk"
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
    shakarik: "シャカリキ",   // ต้องมี comma

    grandpalace_title: "王宮",
    highlight: "見どころ",
    admission: "入場料",
    time: "営業時間",
    direction: "アクセス",
    googlemaps: "グーグルマップ",

    grandpalace_desc: "王宮はタイで最も重要な歴史的・文化的ランドマークの一つで、1782年にラーマ1世によって建設されました。",

    gp_fee: "外国人：500バーツ",
    gp_time: "08:30 – 15:30",
    gp_direction: "MRTサナームチャイ駅 徒歩10分"
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
