// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";
// import logo from "../assets/logo.png";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     "Home",
//     "About Us",
//     "Learning",
//     "Admission",
//     "Gallery",
//     "Newsletter",
//   ];

//   const getId = (item) =>
//     item.toLowerCase().replace(/\s+/g, "-");

//   return (
//     <header className="site-header">
//       <div className="navbar-container">

//         <a href="#home" className="kids-logo">
//           <img
//             src={logo}
//             alt="Kids Land Nursery"
//             className="logo-image"
//           />
//         </a>

//         <button
//           className="mobile-menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Open navigation menu"
//         >
//           {menuOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>

//         <nav className={`main-navigation ${menuOpen ? "show" : ""}`}>
//           {navItems.map((item, index) => (
//             <a
//               key={item}
//               href={`#${getId(item)}`}
//               className={
//                 index === 0
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="navbar-container">

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
              {item.name}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;