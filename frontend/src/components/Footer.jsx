import "./Footer.css";

import illustration from "../assets/illustration.png";
import illustration1 from "../assets/footimg.png";

import instagram from "../assets/Instagram_icon (1) 1.png";
import facebook from "../assets/facebook-logo.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import snap from "../assets/snapchat.png";
import tiktok from "../assets/tiktok.png";

import {
  MapPin,
  Phone,
  PhoneCall,
  Mail,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";


function Footer() {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <footer
      className="kids-footer"
      dir={isArabic ? "rtl" : "ltr"}
    >

      {/* =========================
          LEFT DECORATION
      ========================= */}
      <div className="footer-left-decoration">
        <img
          src={illustration}
          alt=""
        />
      </div>


      {/* =========================
          RIGHT DECORATION
      ========================= */}
      <div className="footer-right-decoration">
        <img
          src={illustration1}
          alt=""
        />
      </div>


      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="footer-main">


        {/* =========================
            COLUMN 1 - ABOUT
        ========================= */}
        <div className="footer-column footer-about">

          <h3>
            {isArabic
              ? "حضانة أرض الأطفال"
              : "Kids Land Nursery"}
          </h3>


          <p>
            {isArabic
              ? "نوفر بيئة دافئة، حنونة وملهمة لأطفالكم الصغار ليتعلموا وينموا."
              : "Providing a warm, caring, and inspiring environment for your little ones to learn and grow."}
          </p>


          {/* =========================
              SOCIAL MEDIA
          ========================= */}
          <div className="footer-socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kids.l.nursery?igsi=NzA1bTZsbHI1NHlv"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="instagram"
            >
              <img
                src={instagram}
                alt="Instagram"
              />
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BguDbXPWw/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="facebook"
            >
              <img
                src={facebook}
                alt="Facebook"
              />
            </a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/qr/T5VVIHFFWBXNB1"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="whatsapp"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
              />
            </a>


            {/* YouTube */}
            <a
              href="https://www.youtube.com/@farah309"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="youtube"
            >
              <img
                src={youtube}
                alt="YouTube"
              />
            </a>


            {/* Snapchat */}
            <a
              href="https://snapchat.com/t/pjLKpxn7"
              target="_blank"
              rel="noreferrer"
              aria-label="Snapchat"
              className="snapchat"
            >
              <img
                src={snap}
                alt="Snapchat"
              />
            </a>


            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@faihaalzoubi?_r=1&_t=ZS-995s6BXGGwO"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="tiktok"
            >
              <img
                src={tiktok}
                alt="TikTok"
              />
            </a>

          </div>

        </div>



        {/* =========================
            COLUMN 2 - QUICK LINKS
        ========================= */}
        <div className="footer-column footer-links">

          <h3>
            {isArabic
              ? "روابط سريعة"
              : "Quick Links"}
          </h3>


          <ul>

            {/* Home */}
            <li>
              <a href="/">
                <span className="footer-arrow arrow-blue">
                  ›
                </span>

                <span>
                  {isArabic
                    ? "الرئيسية"
                    : "Home"}
                </span>
              </a>
            </li>


            {/* About Us */}
            <li>
              <a href="/about">
                <span className="footer-arrow arrow-red">
                  ›
                </span>

                <span>
                  {isArabic
                    ? "من نحن"
                    : "About Us"}
                </span>
              </a>
            </li>


            {/* Learning */}
            <li>
              <a href="/learning">
                <span className="footer-arrow arrow-yellow">
                  ›
                </span>

                <span>
                  {isArabic
                    ? "التعلم"
                    : "Learning"}
                </span>
              </a>
            </li>


            {/* Admission */}
            <li>
              <a href="/admission">
                <span className="footer-arrow arrow-green">
                  ›
                </span>

                <span>
                  {isArabic
                    ? "القبول"
                    : "Admission"}
                </span>
              </a>
            </li>


            {/* Gallery */}
            <li>
              <a href="/gallery">
                <span className="footer-arrow arrow-pink">
                  ›
                </span>

                <span>
                  {isArabic
                    ? "المعرض"
                    : "Gallery"}
                </span>
              </a>
            </li>


            {/* Health & Safety */}
            <li>
              <a href="/health-safety">
                <span className="footer-arrow arrow-orange">
                  ›
                </span>

                <span>
                  {isArabic
                    ? "الصحة والسلامة"
                    : "Health & Safety"}
                </span>
              </a>
            </li>

          </ul>

        </div>



        {/* =========================
            COLUMN 3 - CONTACT
        ========================= */}
        <div className="footer-column footer-contact">

          <h3>
            {isArabic
              ? "تواصل معنا"
              : "Let's Connect"}
          </h3>


          {/* Address */}
          <div className="footer-contact-item">

            <span className="contact-icon location-icon">
              <MapPin
                size={17}
                strokeWidth={2}
              />
            </span>

            <p>
              123, Learning Lane, Playtown
            </p>

          </div>


          {/* Mobile Numbers */}
          <div className="footer-contact-item">

            <span className="contact-icon phone-icon">
              <Phone
                size={17}
                strokeWidth={2}
              />
            </span>

            <p>
              0503222033, 0544556479
            </p>

          </div>


          {/* Telephone */}
          <div className="footer-contact-item">

            <span className="contact-icon telephone-icon">
              <PhoneCall
                size={17}
                strokeWidth={2}
              />
            </span>

            <p>
              037677611
            </p>

          </div>


          {/* Email */}
          <div className="footer-contact-item">

            <span className="contact-icon email-icon">
              <Mail
                size={17}
                strokeWidth={2}
              />
            </span>

            <p>
              kidsland.nursery@gmail.com
            </p>

          </div>

        </div>

      </div>



      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="footer-bottom">

        <span className="footer-designed">

          {isArabic
            ? "تصميم وتطوير بواسطة"
            : "Designed & Developed By"}

        </span>


        <a
          href="https://wa.me/message/ER4N3AB5IPPCC1"
          target="_blank"
          rel="noreferrer"
          className="credo-link"
        >
          Credo Digital Designs LLC SPC
        </a>

      </div>

    </footer>
  );
}


export default Footer;