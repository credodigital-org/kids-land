// TODO: Build this to match the Footer frame in Figma
// This does not exist yet - create it from scratch

// import "./Footer.css";
// import illustration from "../assets/illustration.png";
// import illustration1 from "../assets/footimg.png";
// import instagram from "../assets/Instagram_icon (1) 1.png";
// import facebook from "../assets/facebook-logo.png";
// import whatsapp from "../assets/whatsapp.png";
// import youtube from "../assets/youtube.png";
// import icon from "../assets/mdi_location.png";
// import snap from "../assets/snapchat.png";
// import tiktok from "../assets/tiktok.png";
// import { useLanguage } from "../context/LanguageContext";

// function Footer() {
//   const { language, t } = useLanguage();
//   return (
//     <footer className="kids-footer" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* Decorative left illustration */}
      // <div className="footer-left-decoration">
      //   <img src={illustration} />
      // </div>


      {/* Decorative right illustration */}
      // <div className="footer-right-decoration">
      //   <img src={illustration1} />
      // </div>


      {/* Main footer */}
      // <div className="footer-main">

        {/* Column 1 */}
        // <div className="footer-column footer-about">

        //   <h3>
        //     {t("footer.name")}
        //   </h3>

        //   <p>
        //     {t("footer.description")}
        //   </p>

        //   <div className="footer-socials">

        //     <a
        //       href=" https://www.instagram.com/kids.l.nursery?igsi=NzA1bTZsbHI1NHlv"
        //       target="_blank"
        //       rel="noreferrer"
        //       aria-label="Instagram"
        //       className="instagram"
        //     >
        //       <img src={instagram}/>
        //     </a>

        //     <a
        //       href=" https://www.facebook.com/share/1BguDbXPWw/?mibextid=wwXIfr"
        //       target="_blank"
        //       rel="noreferrer"
        //       aria-label="Facebook"
        //       className="facebook"
        //     >
        //       <img src={facebook}/>
        //     </a>

        //     <a
        //       href="https://wa.me/qr/T5VVIHFFWBXNB1"
        //       target="_blank"
        //       rel="noreferrer"
        //       aria-label="WhatsApp"
        //       className="whatsapp"
        //     >
        //       <img src={whatsapp}/>
        //     </a>

        //     <a
        //       href="https://www.youtube.com/@farah309"
        //       target="_blank"
        //       rel="noreferrer"
        //       aria-label="YouTube"
        //       className="youtube"
        //     >
        //       <img src={youtube}/>
        //     </a>

        //     <a
        //       href=" https://snapchat.com/t/pjLKpxn7"
        //       target="_blank"
        //       rel="noreferrer"
        //       aria-label="snapchat"
        //       className="snapchat"
        //     >
        //       <img src={snap}/>
        //     </a>

        //     <a
        //       href="https://www.tiktok.com/@faihaalzoubi?_r=1&_t=ZS-995s6BXGGwO"
        //       target="_blank"
        //       rel="noreferrer"
        //       aria-label="tiktok"
        //       className="tiktok"
        //     >
        //       <img src={tiktok}/>
        //     </a>

        //   </div>

        // </div>


        // {/* Column 2 */}
        // <div className="footer-column footer-links">

        //   <h3>
        //     {t("footer.quickLinks")}
        //   </h3>

        //   <ul>

        //     <li>
        //       <a href="/">
        //         {t("nav.home")}
        //       </a>
        //     </li>

        //     <li>
        //       <a href="/about">
        //         {t("nav.about")}
        //       </a>
        //     </li>

        //     <li>
        //       <a href="#learning">
        //         {t("footer.programs")}
        //       </a>
        //     </li>

        //     <li>
        //       <a href="/gallery">
        //         {t("nav.gallery")}
        //       </a>
        //     </li>

        //     <li>
        //       <a href="/admission">
        //         {t("footer.contactUs")}
        //       </a>
        //     </li>

        //   </ul>

        // </div>


        {/* Column 3 */}
      //   <div className="footer-column footer-contact">

      //     <h3>
      //       {t("footer.letsConnect")}
      //     </h3>

      //     <div className="footer-contact-item">

      //       <span className="contact-icon">
      //        <img src={icon}/>
      //       </span>

      //       <div>
      //         <p>
      //           {t("footer.location")}
      //         </p>

      //         <p>
      //           {t("footer.phone")}
      //         </p>
      //       </div>

      //     </div>

      //   </div>

      // </div>


      {/* Copyright */}
//       <div className="footer-bottom">

//         {t("footer.copyright")}

//       </div>

//     </footer>
//   );
// }

// export default Footer;

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
import {
  MapPin,
  Phone,
  PhoneCall,
  Mail
} from "lucide-react";

function Footer() {
  return (
    <footer className="kids-footer">

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
            Kids Land Nursery
          </h3>

          <p>
            Providing a warm,caring, and
            <br />
            inspiring environment for your
            <br />
            little ones to learn and grow.
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


        {/* Column 2
        <div className="footer-column footer-links">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <a href="/">
                Home
              </a>
            </li>

            <li>
              <a href="/about">
                About Us
              </a>
            </li>

            <li>
              <a href="#learning">
                Programs
              </a>
            </li>

            <li>
              <a href="/gallery">
                Gallery
              </a>
            </li>

            <li>
              <a href="/admission">
                Contact Us
              </a>
            </li>

          </ul>

        </div> */}

        {/* ================= COLUMN 2 ================= */}
<div className="footer-column footer-links">

  <h3>Quick Links</h3>

  <ul>

    {/* Home */}
    <li>
      <a href="/">
        <span className="footer-arrow arrow-blue">›</span>
        <span>Home</span>
      </a>
    </li>

    {/* About Us */}
    <li>
      <a href="/about">
        <span className="footer-arrow arrow-red">›</span>
        <span>About Us</span>
      </a>
    </li>

    {/* Learning */}
    <li>
      <a href="/learning">
        <span className="footer-arrow arrow-yellow">›</span>
        <span>Learning</span>
      </a>
    </li>

    {/* Admission */}
    <li>
      <a href="/admission">
        <span className="footer-arrow arrow-green">›</span>
        <span>Admission</span>
      </a>
    </li>

    {/* Gallery */}
    <li>
      <a href="/gallery">
        <span className="footer-arrow arrow-pink">›</span>
        <span>Gallery</span>
      </a>
    </li>

    {/* Health & Safety */}
    <li>
      <a href="/health-safety">
        <span className="footer-arrow arrow-orange">›</span>
        <span>Health &amp; Safety</span>
      </a>
    </li>

  </ul>

</div>

        {/* Column 3 */}
        {/* <div className="footer-column footer-contact">

          <h3>
            Lets Connect
          </h3>

          <div className="footer-contact-item">

            <span className="contact-icon">
             <img src={icon}/>
            </span>

            <div>
              <p>
                123, Learning Lane, Playtown
              </p>

              <p>
                (555)123-4567
              </p>
            </div>

          </div>

        </div> */}

        {/* ================= COLUMN 3 ================= */}
<div className="footer-column footer-contact">

  <h3>Lets Connect</h3>

  {/* Address */}
  <div className="footer-contact-item">

    <span className="contact-icon location-icon">
      <MapPin size={17} strokeWidth={2} />
    </span>

    <p>123, Learning Lane, Playtown</p>

  </div>


  {/* Mobile Numbers */}
  <div className="footer-contact-item">

    <span className="contact-icon phone-icon">
      <Phone size={17} strokeWidth={2} />
    </span>

    <p>0503222033, 0544556479</p>

  </div>


  {/* Telephone */}
  <div className="footer-contact-item">

    <span className="contact-icon telephone-icon">
      <PhoneCall size={17} strokeWidth={2} />
    </span>

    <p>037677611</p>

  </div>


  {/* Email */}
  <div className="footer-contact-item">

    <span className="contact-icon email-icon">
      <Mail size={17} strokeWidth={2} />
    </span>

    <p>kidsland.nursery@gmail.com</p>

  </div>

</div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        © 2024 Kids Land Nursery. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;