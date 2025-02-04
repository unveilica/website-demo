<script type="text/javascript">
  // Initialize Google Translate and create a function for language switching
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,sv,de,fr,es,it,pt,ru,zh-CN,ja,ko', // List of languages you want to support
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }

  // Automatically translate when the user changes the language from the Google Translate widget
  function changeLanguage(language) {
    const iframe = document.querySelector('iframe');
    const body = iframe.contentWindow.document.body;

    // Trigger translation by setting the selected language
    const selectLang = body.querySelector('select.goog-te-combo');
    if (selectLang) {
      selectLang.value = language; // Set the value of the language dropdown
      selectLang.dispatchEvent(new Event('change')); // Dispatch change event to trigger translation
    }
  }

  // Listen to language change events (for example, if you are adding a custom dropdown or UI)
  document.getElementById("language").addEventListener("change", function () {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
  });

  // Load the Google Translate script
  (function () {
    var gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
  })();
</script>

