import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "learning", path: "/learning" },
    { key: "admission", path: "/admission" },
    { key: "gallery", path: "/gallery" },
    { key: "healthSafety", path: "/Health-Safety" },
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
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${item.key}`)}
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
            <span>{t("nav.toggle")}</span>
          </button>
        </nav>

        {/* Arabic/English toggle - desktop, always visible in the header */}
        <button
          type="button"
          className="nav-language-toggle nav-language-toggle-desktop"
          onClick={toggleLanguage}
        >
          <Languages size={16} />
          <span>{t("nav.toggle")}</span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
