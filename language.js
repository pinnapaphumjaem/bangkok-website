const text = {

en:{
title:"MY CONCIERGE",
hotel:"HILTON BANGKOK GRANDE ASOKE",
historical:"Historical",
mall:"Mall",
park:"Park",
market:"Market",
restaurant:"Restaurant",
phra_title:"WAT PHRA KAEW",
highlight:"Highlight",
phra_desc:"Wat Phra Kaew is the most sacred temple in Thailand and a cornerstone of the nation’s spiritual and cultural identity. Located within the grounds of The Grand Palace, the temple houses the revered Emerald Buddha, a powerful symbol of prosperity, protection, and royal legitimacy. The statue, carved from a single block of jade, is highly respected by Thai people, and its seasonal costume changes are performed by the King in an important royal ceremony. The temple is also famous for its exquisite Ramakien murals that decorate the surrounding gallery walls. These detailed paintings illustrate scenes from Thailand’s national epic, portraying heroic battles, mythical beings, and moral lessons that reflect Thai beliefs and cultural values. With its dazzling golden architecture, intricate craftsmanship, and deep spiritual significance, Wat Phra Kaew is one of the most extraordinary cultural treasures in Thailand.",
admission:"Admission Fee",
phra_fee:"Foreigners: 500 THB per person",
time:"Time",
phra_time:"08:30 AM – 03:30 PM",
direction:"Direction",
phra_direction:"MRT Sanam Chai (Exit 1) 10 minute walk",
googlemaps:"Google Maps"
},

jp:{
title:"マイ・コンシェルジュ",
hotel:"ヒルトン・バンコク・グランデ・アソーク",
historical:"歴史的名所",
mall:"ショッピングモール",
park:"公園",
market:"マーケット",
restaurant:"レストラン",
phra_title:"ワット・プラケオ",
highlight:"見どころ",
phra_desc:"ワット・プラケオはタイで最も神聖な寺院であり、国家の精神的および文化的アイデンティティの礎となっています。王宮（グランドパレス）の敷地内に位置し、この寺院には繁栄、守護、そして王権の正当性を象徴するエメラルド仏が安置されています。この仏像は一つの翡翠の塊から彫られており、タイの人々から非常に深い尊敬を集めています。また、季節ごとに衣装を替える儀式は国王によって執り行われる重要な王室儀礼です。

さらに、ワット・プラケオは回廊の壁を彩るラーマキエンの壁画でも有名です。これらの精緻な絵画はタイの国民的叙事詩の場面を描き、英雄的な戦い、神話上の生き物、そしてタイの信仰や文化的価値観を反映する教訓を表現しています。輝く黄金の建築、精巧な職人技、そして深い精神的意義を備えたワット・プラケオは、タイで最も卓越した文化遺産の一つです。
",",
admission:"入場料",
phra_fee:"外国人: 500バーツ / 1人",
time:"営業時間",
phra_time:"08:30 – 15:30",
direction:"行き方",
phra_direction:"MRTサナームチャイ駅（出口1）から徒歩10分",
googlemaps:"グーグルマップ"
}

}


function setLang(lang){

localStorage.setItem("lang",lang)

document.querySelectorAll("[data-key]").forEach(el=>{
el.textContent = text[lang][el.getAttribute("data-key")]
})

}


window.onload = function(){

const savedLang = localStorage.getItem("lang") || "en"

setLang(savedLang)

}
