function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  if (lang === "jp") {
    document.querySelectorAll("[data-en]").forEach(el => {
      el.innerText = el.getAttribute("data-jp");
    });
  } else {
    document.querySelectorAll("[data-en]").forEach(el => {
      el.innerText = el.getAttribute("data-en");
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);
});