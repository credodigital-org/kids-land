import { ArrowRight, Sparkles, Send } from "lucide-react";
import "./Hero.css";
import { useLanguage } from "../context/LanguageContext";

// Assets
import heroCard from "../assets/kids-land-hero.png";
import flowerChild from "../assets/flower-child.png";
import jumpingKids from "../assets/jumping-image.png"; // Contains both jumping + painting

// Stat Icons
import trophyIcon from "../assets/trophy.png";
import teacherIcon from "../assets/Teacher.png";
import heartIcon from "../assets/Parent.png";
import plane from "../assets/plane.png";
import star from "../assets/star1.png";

function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        
        {/* TOP ROW: CARD + 2 COLLAGE IMAGES */}
        <div className="hero-row">
          
          {/* LEFT: WELCOME CARD */}
          <div className="hero-card">
            {/* NOTE: the "Welcome to Kids Land Nursery" heading below is
                baked into this PNG's pixels, not real text - it can't be
                translated in code. An Arabic version of this image would
                need to come from whoever designed the original graphic. */}
            <img
              src={heroCard}
              alt="Welcome to Kids Land Nursery"
              className="card-bg-img"
            />

            <a href="#admission" className="hero-cta-btn">
              <span dir={language === "ar" ? "rtl" : "ltr"}>{t("hero.cta")}</span>
              <span className="cta-arrow">
                <ArrowRight size={13} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* RIGHT: 2-IMAGE COMPOSITION */}
          <div className="hero-collage">
            
            {/* 1. Yellow Flower Child Image */}
            <div className="hero-img-box img-flower">
              <img
                src={flowerChild}
                alt="Child in flower costume"
                className="hero-photo"
              />
            </div>

            {/* 2. Combined Jumping + Painting Stack Image */}
            <div className="hero-img-box img-combined">
              <img
                src={jumpingKids}
                alt="Jumping and painting children"
                className="hero-photo"
              />
            </div>

            {/* Floating Accents */}
            <img src={plane} className="doodle doodle-plane"/>
            {/* <Send className="doodle doodle-plane" size={20} /> */}
            <img src={star} className="doodle doodle-star-top"/>
            {/* <Sparkles className="doodle doodle-star-right" size={16} /> */}
          </div>
        </div>

        {/* BOTTOM: FLOATING STATS CARD */}
        <div className="hero-stats">
          
          {/* 10+ Years Experience */}
          <div className="stat-box">
            <div className="stat-circle stat-purple">
              <img src={trophyIcon} alt="Trophy" />
            </div>
            <div className="stat-meta">
              <span className="stat-num color-purple">10+</span>
              <span className="stat-text" dir={language === "ar" ? "rtl" : "ltr"}>{t("hero.statYears1")}<br />{t("hero.statYears2")}</span>
            </div>
          </div>

          <div className="stat-line" />

          {/* 1:8 Ratio */}
          <div className="stat-box">
            <div className="stat-circle stat-green">
              <img src={teacherIcon} alt="Teacher" />
            </div>
            <div className="stat-meta">
              <span className="stat-num color-green">1:8</span>
              <span className="stat-text" dir={language === "ar" ? "rtl" : "ltr"}>{t("hero.statRatio1")}<br />{t("hero.statRatio2")}<br />{t("hero.statRatio3")}</span>
            </div>
          </div>

          <div className="stat-line" />

          {/* 98% Parent Satisfaction */}
          <div className="stat-box">
            <div className="stat-circle stat-pink">
              <img src={heartIcon} alt="Heart" />
            </div>
            <div className="stat-meta">
              <span className="stat-num color-pink">98%</span>
              <span className="stat-text" dir={language === "ar" ? "rtl" : "ltr"}>{t("hero.statSatisfaction1")}<br />{t("hero.statSatisfaction2")}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;