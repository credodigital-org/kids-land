import {
  Heart,
  Brain,
  Handshake,
  ArrowRight,
} from "lucide-react";

import schoolBuilding from "../assets/about-image.png";
import garden from "../assets/garden.png";

import "./AboutSection.css";
import { useLanguage } from "../context/LanguageContext";

function AboutSection() {
  const { language, t } = useLanguage();
  return (
    <section className="about-section" id="about-us" dir={language === "ar" ? "rtl" : "ltr"}>

      <div className="about-container">

        {/* =================================
            LEFT IMAGE
        ================================= */}
        <div className="about-image-area">

          <div className="about-image-border">

            <img
              src={schoolBuilding}
              alt="Kids Land Nursery"
              className="about-main-image"
            />

          </div>

        </div>


        {/* =================================
            RIGHT CONTENT
        ================================= */}
        <div className="about-content">

          <span className="about-label">
            {t("homeAbout.label")}
          </span>


          <h2 className="about-title">
            {t("about.heroTitle")}
          </h2>


          <p className="about-description">
            {t("homeAbout.description1")}
          </p>


          <p className="about-description">
            {t("homeAbout.description2")}
          </p>


          {/* Features */}
          <div className="about-features">

            <div className="about-feature">

              <div className="feature-icon">
                <Heart size={15} />
              </div>

              <span>
                {t("homeAbout.feature1")}
              </span>

            </div>


            <div className="about-feature">

              <div className="feature-icon">
                <Brain size={15} />
              </div>

              <span>
                {t("homeAbout.feature2")}
              </span>

            </div>


            <div className="about-feature">

              <div className="feature-icon">
                <Handshake size={15} />
              </div>

              <span>
                {t("homeAbout.feature3")}
              </span>

            </div>

          </div>


          {/* Button */}
          <a
            href="/about"
            className="about-button"
          >
            <span>
              {t("homeAbout.learnMore")}
            </span>

            <ArrowRight size={15} />
          </a>

        </div>


        {/* =================================
            DECORATIVE GARDEN
        ================================= */}
        <div className="about-garden">

          <div className="garden">
            <img src={garden} alt="Sun" />
        </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;
