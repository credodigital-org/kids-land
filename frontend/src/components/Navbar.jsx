import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

// English / Arabic labels for the nav links - add more keys here as
// more strings across the site get translated.
const LABELS = {
  en: {
    Home: "Home",
    "About Us": "About Us",
    Learning: "Learning",
    Admission: "Admission",
    Gallery: "Gallery",
    "Health & Safety": "Health & Safety",
    langButton: "اقرأ بالعربية",
  },
  ar: {
    Home: "الرئيسية",
    "About Us": "من نحن",
    Learning: "التعلم",
    Admission: "القبول",
    Gallery: "المعرض",
    "Health & Safety": "الصحة والسلامة",
    langButton: "Read in English",
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = LABELS[language];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Learning", path: "/learning" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Health & Safety", path: "/health-safety" },
  ];

  return (
    <header className="site-header">
      <div className="navbar-container" dir={language === "ar" ? "rtl" : "ltr"}>

        {/* LOGO */}
        <NavLink to="/" className="kids-logo">
          <img
            src={logo}
            alt="Kids Land Nursery"
            className="logo-image"
          />
        </NavLink>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* NAVIGATION */}
        <nav
          className={`main-navigation ${
            menuOpen ? "show" : ""
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {t[item.name]}
            </NavLink>
          ))}

          {/* Arabic/English toggle - shown inside the mobile menu too,
              so it's reachable on small screens without extra crowding
              in the collapsed header bar. */}
          <button
            type="button"
            className="nav-language-toggle nav-language-toggle-mobile"
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
          >
            <Languages size={16} />
            <span>{t.langButton}</span>
          </button>
        </nav>

        {/* Arabic/English toggle - desktop, always visible in the header */}
        <button
          type="button"
          className="nav-language-toggle nav-language-toggle-desktop"
          onClick={toggleLanguage}
        >
          <Languages size={16} />
          <span>{t.langButton}</span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
