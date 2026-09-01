import { ArrowRight, Sparkles, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { useLanguage } from "../context/LanguageContext";

// Assets
import heroCard from "../assets/kids-land-hero.png";
import flowerChild from "../assets/flower-child.png";
import jumpingKids from "../assets/jumping-image.png";

// Stat Icons
import trophyIcon from "../assets/trophy.png";
import teacherIcon from "../assets/Teacher.png";
import heartIcon from "../assets/Parent.png";

function AnimatedNumber({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(target * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, target, duration]);

  return (
    <span ref={numberRef} className="stat-num">
      {count}
      {suffix}
    </span>
  );
}

function RatioNumber() {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    let animationFrame;

    const duration = 1600;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(8 * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(8);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started]);

  return (
    <span ref={numberRef} className="stat-num">
      1:{count}
    </span>
  );
}

function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="hero-section" id="home">

      <div className="hero-content">

        {/* =========================================
            TOP ROW
        ========================================= */}
        <div className="hero-row">

          {/* =========================================
              WELCOME CARD
          ========================================= */}
          <div className="hero-card hero-card-animate">

            <img
              src={heroCard}
              alt="Welcome to Kids Land Nursery"
              className="card-bg-img"
            />

            <a
              href="/admission"
              className="hero-cta-btn"
            >
              <span dir={language === "ar" ? "rtl" : "ltr"}>
                {t("hero.cta")}
              </span>

              <span className="cta-arrow">
                <ArrowRight
                  size={13}
                  strokeWidth={2.5}
                />
              </span>
            </a>
          </div>


          {/* =========================================
              IMAGE COLLAGE
          ========================================= */}
          <div className="hero-collage">

            {/* Flower Child */}
            <div className="hero-img-box img-flower">

              <img
                src={flowerChild}
                alt="Child in flower costume"
                className="hero-photo"
              />

            </div>


            {/* Jumping + Painting */}
            <div className="hero-img-box img-combined">

              <img
                src={jumpingKids}
                alt="Jumping and painting children"
                className="hero-photo"
              />

            </div>


            {/* Paper Plane */}
            <Send
              className="doodle doodle-plane"
              size={30}
            />

            {/* Star */}
            <Sparkles
              className="doodle doodle-star-right"
              size={26}
            />

          </div>
        </div>


        {/* =========================================
            STATISTICS
        ========================================= */}
        <div className="hero-stats">

          {/* =========================================
              10+ YEARS
          ========================================= */}
          <div className="stat-box stat-item-1">

            <div className="stat-circle stat-purple">
              <img
                src={trophyIcon}
                alt="Trophy"
              />
            </div>

            <div className="stat-meta">

              <AnimatedNumber
                target={10}
                suffix="+"
                duration={1600}
              />

              <span
                className="stat-text"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {t("hero.statYears1")}
                <br />
                {t("hero.statYears2")}
              </span>

            </div>
          </div>


          <div className="stat-line" />


          {/* =========================================
              1:8 RATIO
          ========================================= */}
          <div className="stat-box stat-item-2">

            <div className="stat-circle stat-green">
              <img
                src={teacherIcon}
                alt="Teacher"
              />
            </div>

            <div className="stat-meta">

              <RatioNumber />

              <span
                className="stat-text"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {t("hero.statRatio1")}
                <br />
                {t("hero.statRatio2")}
                <br />
                {t("hero.statRatio3")}
              </span>

            </div>
          </div>


          <div className="stat-line" />


          {/* =========================================
              98% SATISFACTION
          ========================================= */}
          <div className="stat-box stat-item-3">

            <div className="stat-circle stat-pink">
              <img
                src={heartIcon}
                alt="Heart"
              />
            </div>

            <div className="stat-meta">

              <AnimatedNumber
                target={98}
                suffix="%"
                duration={2200}
              />

              <span
                className="stat-text"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {t("hero.statSatisfaction1")}
                <br />
                {t("hero.statSatisfaction2")}
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;