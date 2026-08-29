// TODO: Build this to match the Footer frame in Figma
// This does not exist yet - create it from scratch

import "./Footer.css";
import illustration from "../assets/illustration.png";
import illustration1 from "../assets/footimg.png";
import instagram from "../assets/Instagram_icon (1) 1.png";
import facebook from "../assets/facebook-logo.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import icon from "../assets/mdi_location.png";
import snap from "../assets/snapchat.png";
import tiktok from "../assets/tiktok.png";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language, t } = useLanguage();
  return (
    <footer className="kids-footer" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* Decorative left illustration */}
      <div className="footer-left-decoration">
        <img src={illustration} />
      </div>


      {/* Decorative right illustration */}
      <div className="footer-right-decoration">
        <img src={illustration1} />
      </div>


      {/* Main footer */}
      <div className="footer-main">

        {/* Column 1 */}
        <div className="footer-column footer-about">

          <h3>
            {t("footer.name")}
          </h3>

          <p>
            {t("footer.description")}
          </p>

          <div className="footer-socials">

            <a
              href=" https://www.instagram.com/kids.l.nursery?igsi=NzA1bTZsbHI1NHlv"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="instagram"
            >
              <img src={instagram}/>
            </a>

            <a
              href=" https://www.facebook.com/share/1BguDbXPWw/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="facebook"
            >
              <img src={facebook}/>
            </a>

            <a
              href="https://wa.me/qr/T5VVIHFFWBXNB1"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="whatsapp"
            >
              <img src={whatsapp}/>
            </a>

            <a
              href="https://www.youtube.com/@farah309"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="youtube"
            >
              <img src={youtube}/>
            </a>

            <a
              href=" https://snapchat.com/t/pjLKpxn7"
              target="_blank"
              rel="noreferrer"
              aria-label="snapchat"
              className="snapchat"
            >
              <img src={snap}/>
            </a>

            <a
              href="https://www.tiktok.com/@faihaalzoubi?_r=1&_t=ZS-995s6BXGGwO"
              target="_blank"
              rel="noreferrer"
              aria-label="tiktok"
              className="tiktok"
            >
              <img src={tiktok}/>
            </a>

          </div>

        </div>


        {/* Column 2 */}
        <div className="footer-column footer-links">

          <h3>
            {t("footer.quickLinks")}
          </h3>

          <ul>

            <li>
              <a href="/">
                {t("nav.home")}
              </a>
            </li>

            <li>
              <a href="/about">
                {t("nav.about")}
              </a>
            </li>

            <li>
              <a href="#learning">
                {t("footer.programs")}
              </a>
            </li>

            <li>
              <a href="/gallery">
                {t("nav.gallery")}
              </a>
            </li>

            <li>
              <a href="/admission">
                {t("footer.contactUs")}
              </a>
            </li>

          </ul>

        </div>


        {/* Column 3 */}
        <div className="footer-column footer-contact">

          <h3>
            {t("footer.letsConnect")}
          </h3>

          <div className="footer-contact-item">

            <span className="contact-icon">
             <img src={icon}/>
            </span>

            <div>
              <p>
                {t("footer.location")}
              </p>

              <p>
                {t("footer.phone")}
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        {t("footer.copyright")}

      </div>

    </footer>
  );
}

export default Footer;
