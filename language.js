<script src="language.js"></script>
</body>
</html>
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
    gp_direction: "MRT Sanam Chai (Exit 1) 10 minute walk",

phra_title: "WAT PHRA KAEW",
phra_desc: "Wat Phra Kaew is the most sacred temple in Thailand and a cornerstone of the nation’s spiritual and cultural identity. Located within the grounds of The Grand Palace, the temple houses the revered Emerald Buddha, a powerful symbol of prosperity, protection, and royal legitimacy. The statue, carved from a single block of jade, is highly respected by Thai people, and its seasonal costume changes are performed by the King in an important royal ceremony. The temple is also famous for its exquisite Ramakien murals that decorate the surrounding gallery walls. These detailed paintings illustrate scenes from Thailand’s national epic, portraying heroic battles, mythical beings, and moral lessons that reflect Thai beliefs and cultural values. With its dazzling golden architecture, intricate craftsmanship, and deep spiritual significance, Wat Phra Kaew is one of the most extraordinary cultural treasures in Thailand.",

phra_fee: "Foreigners: 500 THB per person",
phra_time: "08:30 AM – 03:30 PM",
phra_direction: "MRT Sanam Chai (Exit 1) 10 minute walk",
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
    shakarik: "シャカリキ",   

  grandpalace_title: "王宮",
highlight: "見どころ",
admission: "入場料",
time: "営業時間",
direction: "アクセス",
googlemaps: "グーグルマップ",

grandpalace_desc: "...",
gp_fee: "...",
gp_time: "...",
gp_direction: "...",

highlight: "ワット・プラケオ",
phra_desc: "ワット・プラケオはタイで最も神聖な寺院であり、国家の精神的および文化的アイデンティティの礎となっています。王宮（グランドパレス）の敷地内に位置し、この寺院には繁栄、守護、そして王権の正当性を象徴するエメラルド仏が安置されています。この仏像は一つの翡翠の塊から彫られており、タイの人々から非常に深い尊敬を集めています。また、季節ごとに衣装を替える儀式は国王によって執り行われる重要な王室儀礼です。

さらに、ワット・プラケオは回廊の壁を彩るラーマキエンの壁画でも有名です。これらの精緻な絵画はタイの国民的叙事詩の場面を描き、英雄的な戦い、神話上の生き物、そしてタイの信仰や文化的価値観を反映する教訓を表現しています。輝く黄金の建築、精巧な職人技、そして深い精神的意義を備えたワット・プラケオは、タイで最も卓越した文化遺産の一つです。
",

admission: "外国人：500バーツ",
time: "08:30 – 15:30",
direction: "MRTサナームチャイ駅 徒歩10分",
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
