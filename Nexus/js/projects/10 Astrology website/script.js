const form = document.getElementById("astroForm");
const result = document.getElementById("result");

// 🔥 Language toggle
let selectedLang = "en";

const buttons = document.querySelectorAll(".lang-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedLang = btn.getAttribute("data-lang");
  });
});

// 🔊 Voice
function speak(text, lang = "en") {
  // 🔥 ensure voices loaded
  let voices = speechSynthesis.getVoices();

  if (!voices.length) {
    speechSynthesis.onvoiceschanged = () => speak(text, lang);
    return;
  }

  let speech = new SpeechSynthesisUtterance(text);

  let voice;

  if (lang === "hi") {
    voice = voices.find(v => v.lang === "hi-IN");
    speech.lang = "hi-IN";
  } else {
    voice = voices.find(v => v.lang === "en-IN") 
         || voices.find(v => v.lang === "en-US");
    speech.lang = "en-IN";
  }

  speech.voice = voice || voices[0];

  speech.rate = 0.9;
  speech.pitch = 1;

  speechSynthesis.cancel(); // reset
  speechSynthesis.speak(speech);
}

// 🎯 Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);

  let lang = selectedLang;

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    result.innerHTML = "❌ Invalid date!";
    return;
  }

  let zodiac = getZodiac(day, month);
  let horoscope = getHoroscope();

  // 🖥️ UI (Hindi / English)
  result.innerHTML = `
    <h3>${zodiac.en}</h3>
    <p>${lang === "hi" ? horoscope.hi : horoscope.en}</p>
  `;

  // 🔥 FIX: zodiac only once
  let cleanZodiac = zodiac.en.split(" ")[0];

  let finalText;

  if (lang === "hi") {
    finalText = `नमस्ते ${name}. आपकी राशि ${zodiac.hi} है। ${horoscope.hi}`;
  } else {
    finalText = `Hello ${name}. Your zodiac sign is ${cleanZodiac}. ${horoscope.en}`;
  }

  speak(finalText, lang);

  localStorage.setItem(
    "astroUser",
    JSON.stringify({ name, day, month, zodiac: zodiac.en })
  );
});

// 🔮 Zodiac
function getZodiac(day, month) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return { en: "Aries ♈", hi: "मेष" };
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return { en: "Taurus ♉", hi: "वृषभ" };
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return { en: "Gemini ♊", hi: "मिथुन" };
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return { en: "Cancer ♋", hi: "कर्क" };
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return { en: "Leo ♌", hi: "सिंह" };
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return { en: "Virgo ♍", hi: "कन्या" };
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return { en: "Libra ♎", hi: "तुला" };
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return { en: "Scorpio ♏", hi: "वृश्चिक" };
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return { en: "Sagittarius ♐", hi: "धनु" };
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return { en: "Capricorn ♑", hi: "मकर" };
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return { en: "Aquarius ♒", hi: "कुंभ" };
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return { en: "Pisces ♓", hi: "मीन" };
}

// 🧠 Horoscope (EN + HI)
function getHoroscope() {
  const lines = [
    { en: "Today is a lucky day for you.", hi: "आज आपका दिन भाग्यशाली है।" },
    { en: "You may face challenges, stay strong.", hi: "आपको चुनौतियों का सामना करना पड़ सकता है, मजबूत रहें।" },
    { en: "A surprise is waiting for you.", hi: "आपके लिए एक सरप्राइज इंतजार कर रहा है।" },
    { en: "Focus on your goals today.", hi: "आज अपने लक्ष्यों पर ध्यान दें।" },
    { en: "Good news is coming soon.", hi: "जल्द ही अच्छी खबर मिलने वाली है।" },
    { en: "Your hard work is about to pay off.", hi: "आपकी मेहनत का फल मिलने वाला है।" },
    { en: "Trust your instincts today.", hi: "आज अपने दिल की सुनें।" },
    { en: "Someone special may enter your life.", hi: "कोई खास व्यक्ति आपकी जिंदगी में आ सकता है।" },
    { en: "Be careful with your decisions today.", hi: "आज अपने फैसलों में सावधानी बरतें।" },
    { en: "A new opportunity is on the way.", hi: "एक नया अवसर आने वाला है।" }
  ];

  return lines[Math.floor(Math.random() * lines.length)];
}

// 🔄 Load
window.onload = function () {
  let data = JSON.parse(localStorage.getItem("astroUser"));

  if (data) {
    result.innerHTML = `
      <p>Welcome back ${data.name}!</p>
      <p>Your zodiac: ${data.zodiac}</p>
    `;
  }
};