import { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations";

// Global language state (English / Arabic). Persists across visits.
//
// IMPORTANT: this does NOT flip the whole page into RTL. RTL is applied
// narrowly, only to elements that actually have translated content, via
// the `dir="rtl"` attribute set directly on those elements - never
// globally on <html>/<body>, and never on a section that positions
// images with plain CSS `left`/`right`/margins, since an absolutely
// positioned element with no explicit left/right resolves its "auto"
// side differently under RTL, which silently moves images to the
// wrong spot (this happened once already - see Hero.jsx for the fix).
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

  // t("hero.cta") -> looks up translations[language].hero.cta.
  // Falls back to the key path itself if a translation is missing,
  // so a typo or an untranslated key shows up visibly instead of
  // silently rendering blank.
  function t(path) {
    const value = path
      .split(".")
      .reduce((obj, key) => obj?.[key], translations[language]);
    return value ?? path;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
