import "./SocialSection.css";

import image218 from "../assets/image 218.png";
import instagram from "../assets/Instagram_icon (1) 1.png";
import facebook from "../assets/facebook-logo.png";
import snap from "../assets/snapchat.png";
import tiktok from "../assets/tiktok.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";
import { useLanguage } from "../context/LanguageContext";

function SocialSection() {
  const { language } = useLanguage();
  const c = language === "ar" ? { title: "ابقوا على تواصل", text: "تابعوا مغامراتنا اليومية على وسائل التواصل الاجتماعي" } : { title: "Stay Connected", text: "Follow our daily adventures on social media" };
  return (
    <section className="social-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="social-container">

        {/* Heading */}
        <div className="social-heading">
          <h2>{c.title}</h2>

          <img
            className="social-heading-image"
            src={image218}
            alt=""
          />

          <p>{c.text}</p>
        </div>

        {/* Social Buttons */}
        <div className="social-links">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kids.l.nursery?igsi=NzA1bTZsbHI1NHlv"
            target="_blank"
            rel="noreferrer"
            className="social-button instagram-button"
          >
            <img src={instagram} alt="Instagram" />
            <span>Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1BguDbXPWw/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="social-button facebook-button"
          >
            <img src={facebook} alt="Facebook" />
            <span>Facebook</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/qr/T5VVIHFFWBXNB1"
            target="_blank"
            rel="noreferrer"
            className="social-button whatsapp-button"
          >
            <img src={whatsapp} alt="WhatsApp" />
            <span>WhatsApp</span>
          </a>

          {/* Snapchat */}
          <a
            href="https://snapchat.com/t/pjLKpxn7"
            target="_blank"
            rel="noreferrer"
            className="social-button snapchat-button"
          >
            <img src={snap} alt="Snapchat" />
            <span>Snapchat</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@faihaalzoubi?_r=1&_t=ZS-995s6BXGGwO"
            target="_blank"
            rel="noreferrer"
            className="social-button tiktok-button"
          >
            <img src={tiktok} alt="TikTok" />
            <span>TikTok</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@farah309"
            target="_blank"
            rel="noreferrer"
            className="social-button youtube-button"
          >
            <img src={youtube} alt="YouTube" />
            <span>YouTube</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default SocialSection;
