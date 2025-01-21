const translations = {
  en: {
    aboutTitle: "About Me",
    aboutText: "A highly experienced researcher and data professional...",
    experienceTitle: "Experience",
    experienceText: "With over 5 years of experience in data analysis...",
    // Add other sections' translations
  },
  sv: {
    aboutTitle: "Om mig",
    aboutText: "En mycket erfaren forskare och dataprofil...",
    experienceTitle: "Erfarenhet",
    experienceText: "Med över 5 års erfarenhet inom dataanalys...",
    // Add other sections' translations
  }
};

function changeLanguage(language) {
  document.getElementById("about-title").innerText = translations[language].aboutTitle;
  document.getElementById("about-text").innerText = translations[language].aboutText;
  document.getElementById("experience-title").innerText = translations[language].experienceTitle;
  document.getElementById("experience-text").innerText = translations[language].experienceText;
  // Continue for other sections...
}

document.getElementById("language").addEventListener("change", function() {
  const selectedLanguage = this.value;
  changeLanguage(selectedLanguage);
});

