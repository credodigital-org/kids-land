import { createContext, useContext, useEffect, useState } from "react";

// Global language state (English / Arabic). Persists across visits.
//
// IMPORTANT: this does NOT flip the whole page into RTL. Only the
// Navbar labels are actually translated right now - if we set
// dir="rtl" on the whole <html>, every untranslated English
// paragraph on the page also flips to right-aligned with reversed
// punctuation, which looks broken (this was tried and reported as
// a bug - see the fix here). RTL is applied narrowly, only to
// elements that actually have translated content, via the
// `dir="rtl"` attribute set directly on those elements (see
// Navbar.jsx) - not globally.
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("site_language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("site_language", language);
    // lang attribute is safe to set globally (affects font/accessibility
    // hints only, doesn't change text alignment) - dir is intentionally
    // NOT set here, see note above.
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
