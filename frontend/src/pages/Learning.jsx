import React from "react";
import {
  Baby,
  Sprout,
  PersonStanding,
  Lightbulb,
  MessageCircle,
  Plus,
  Users,
  BookOpen,
  Ruler,
  Palette,
  Globe,
} from "lucide-react";

import "./Learning.css";
import { useLanguage } from "../context/LanguageContext";

import littleAngelsImg from "../assets/little-angels (2).png";
import toddlersImg from "../assets/toddlers (2).png";
import discoveriesImg from "../assets/discoveries (2).png";
import inventorsImg from "../assets/inventors (2).png";
import Trending from "../assets/TrendingUp.png";


/* =========================================================
   CONTENT
========================================================= */

const content = {
  en: {
    title: "Nurturing Every Stage Of Growth",

    intro:
      "At Kids Land Nursery our learning is carefully designed to support the unique developmental milestones of your child. We offer a structured, play-based learning environment across four distinct age groups.",

    objectives: "Our Program Objectives By Age Group",

    areas: "Seven Areas Of Learning And Development",

    areasIntro:
      "The EYFS framework covers seven areas of learning and development, divided into three Prime Areas and four Specific Areas.",

    prime: "Prime Areas",

    specific: "Specific Areas",

    assessment: "Assessment And Progress",

    assessmentText:
      "Children’s development is monitored through ongoing observation and assessment. Teachers identify children’s strengths, interests, progress, and areas for further support. Learning and progress are shared with parents through regular reports and communication, supporting a strong partnership between the nursery and families.",

    programs: [
      {
        title: "Little Angels",
        age: "45 Days - 11 Months",
        description:
          "Build security, trust, and positive relationships. Support early communication, sensory exploration, and physical development.",
      },
      {
        title: "Toddlers",
        age: "1 - 2 Years",
        description:
          "Develop communication, independence, and social-emotional skills. Encourage physical development, exploration, and learning through play.",
      },
      {
        title: "Discoveries",
        age: "2 - 3 Years",
        description:
          "Develop language, social skills, and independence. Encourage problem-solving, exploration, and motor development.",
      },
      {
        title: "Inventors",
        age: "3 - 4 Years",
        description:
          "Develop communication, early literacy, and mathematical skills. Build independence, creativity, and confidence for KG1 readiness.",
      },
    ],

    primeItems: [
      "Communication and Language",
      "Physical Development",
      "Personal, Social and Emotional Development",
    ],

    specificItems: [
      "Literacy",
      "Mathematics",
      "Expressive Arts and Design",
      "Understanding the World",
    ],

    learnMore: "Learn More",
  },

  ar: {
    title: "نرعى كل مرحلة من مراحل النمو",

    intro:
      "في حضانة كيدز لاند، صُمم تعلّمنا بعناية لدعم مراحل النمو الفريدة لطفلكم. ونوفر بيئة تعليمية منظمة قائمة على اللعب لأربع فئات عمرية مختلفة.",

    objectives: "أهداف برامجنا حسب الفئة العمرية",

    areas: "مجالات التعلّم والتطور السبعة",

    areasIntro:
      "يغطي إطار المرحلة التأسيسية للسنوات المبكرة سبعة مجالات للتعلّم والتطور، تنقسم إلى ثلاثة مجالات أساسية وأربعة مجالات محددة.",

    prime: "المجالات الأساسية",

    specific: "المجالات المحددة",

    assessment: "التقييم والتقدم",

    assessmentText:
      "تتم متابعة تطور الأطفال من خلال الملاحظة والتقييم المستمرين. ويحدد المعلمون نقاط القوة والاهتمامات والتقدم ومجالات الدعم الإضافي. ويُشارك التعلّم والتقدم مع أولياء الأمور عبر التقارير والتواصل المنتظم، بما يدعم شراكة قوية بين الحضانة والأسر.",

    programs: [
      {
        title: "الملائكة الصغار",
        age: "45 يومًا - 11 شهرًا",
        description:
          "بناء الأمان والثقة والعلاقات الإيجابية، ودعم التواصل المبكر والاستكشاف الحسي والنمو البدني.",
      },
      {
        title: "الأطفال الصغار",
        age: "1 - 2 سنة",
        description:
          "تنمية التواصل والاستقلالية والمهارات الاجتماعية والعاطفية، وتشجيع النمو البدني والاستكشاف والتعلم من خلال اللعب.",
      },
      {
        title: "المستكشفون",
        age: "2 - 3 سنوات",
        description:
          "تنمية اللغة والمهارات الاجتماعية والاستقلالية، وتشجيع حل المشكلات والاستكشاف والنمو الحركي.",
      },
      {
        title: "المبتكرون",
        age: "3 - 4 سنوات",
        description:
          "تنمية التواصل ومهارات القراءة والرياضيات المبكرة، وبناء الاستقلالية والإبداع والثقة للاستعداد للروضة الأولى.",
      },
    ],

    primeItems: [
      "التواصل واللغة",
      "النمو البدني",
      "النمو الشخصي والاجتماعي والعاطفي",
    ],

    specificItems: [
      "القراءة والكتابة",
      "الرياضيات",
      "الفنون التعبيرية والتصميم",
      "فهم العالم",
    ],

    learnMore: "اعرف المزيد",
  },
};


/* =========================================================
   LEARNING PAGE
========================================================= */

export default function Learning() {
  const { language } = useLanguage();

  const isArabic = language === "ar";
  const c = content[language] || content.en;

  /* Program images + icons + colors */
  const programs = [
    [littleAngelsImg, Baby, "pink"],
    [toddlersImg, Sprout, "green"],
    [discoveriesImg, PersonStanding, "purple"],
    [inventorsImg, Lightbulb, "yellow"],
  ];

  /* Prime area icons */
  const primeIcons = [
    MessageCircle,
    Plus,
    Users,
  ];

  /* Specific area icons */
  const specificIcons = [
    BookOpen,
    Ruler,
    Palette,
    Globe,
  ];

  const primeClasses = [
    "communication",
    "physical",
    "personal",
  ];

  const specificClasses = [
    "literacy",
    "mathematics",
    "expressive",
    "world",
  ];

  return (
    <main
      className="learning-page"
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="learning-hero">

        <h1>{c.title}</h1>

        <p>{c.intro}</p>

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}

      <section className="programs-section">

        <h2>{c.objectives}</h2>

        <div className="program-grid">

          {programs.map(([image, Icon, color], index) => {

            const program = c.programs[index];

            return (
              <article
                className={`program-card ${color}`}
                key={program.title}
              >

                {/* IMAGE */}

                <div className="program-image-wrapper">

                  <img
                    src={image}
                    alt={program.title}
                    className="program-image"
                  />

                </div>


                {/* CONTENT */}

                <div className="program-content">

                  <div className="program-title-row">

                    <div className={`program-icon ${color}`}>

                      <Icon
                        size={17}
                        strokeWidth={2.2}
                      />

                    </div>


                    <div>

                      <h3>{program.title}</h3>

                      <span>{program.age}</span>

                    </div>

                  </div>


                  <p>{program.description}</p>


                  {/* <button
                    type="button"
                    className={`learn-more ${color}`}
                  >
                    {c.learnMore}

                    <span>
                      {isArabic ? "←" : "→"}
                    </span>

                  </button> */}

                </div>

              </article>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          SEVEN AREAS
      ===================================================== */}

      <section className="areas-section">

        <div className="areas-heading">

          <h2>{c.areas}</h2>

          <p>{c.areasIntro}</p>

        </div>


        <div className="areas-container">


          {/* =================================================
              PRIME AREAS
          ================================================= */}

          <div className="areas-box prime-box">

            <h3>{c.prime}</h3>

            <div className="prime-items">

              {c.primeItems.map((text, index) => {

                const Icon = primeIcons[index];

                return (
                  <div
                    className={`prime-item ${primeClasses[index]}`}
                    key={text}
                  >

                    <Icon
                      size={20}
                      strokeWidth={2.2}
                    />

                    <span>{text}</span>

                  </div>
                );

              })}

            </div>

          </div>


          {/* =================================================
              SPECIFIC AREAS
              KEEPING THE ORIGINAL FIGMA SVG SHAPES
          ================================================= */}

          <div className="areas-box specific-box">

            <h3>{c.specific}</h3>

            <div className="specific-items">


              {/* =================================================
                  1. LITERACY
              ================================================= */}

              <div className="specific-item-wrapper literacy">

                <svg
                  className="shape-svg"
                  viewBox="0 0 172 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >

                  <path
                    d="M108.262 1.86504C136.842 -5.10628 164.777 15.4511 166.621 44.8118L171.246 118.447C173.761 158.486 128.388 183.247 96.0762 159.47L19.7721 103.318C-12.5393 79.54 -2.39329 28.855 36.5815 19.3483L108.262 1.86504Z"
                    stroke="#EBD459"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />

                  <path
                    d="M108.262 1.86504C136.842 -5.10628 164.777 15.4511 166.621 44.8118L171.246 118.447C173.761 158.486 128.388 183.247 96.0762 159.47L19.7721 103.318C-12.5393 79.54 -2.39329 28.855 36.5815 19.3483L108.262 1.86504Z"
                    fill="#EBD459"
                    transform="scale(0.92) translate(7, 7)"
                  />

                </svg>


                <div className="pick-content">

                  <BookOpen size={24} />

                  <span>
                    {c.specificItems[0]}
                  </span>

                </div>

              </div>


              {/* =================================================
                  2. MATHEMATICS
              ================================================= */}

              <div className="specific-item-wrapper mathematics">

                <svg
                  className="shape-svg"
                  viewBox="0 0 192 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >

                  <path
                    d="M120.925 2.02686C152.886 -5.76908 184.126 17.2203 186.189 50.0544L191.355 132.311C194.167 177.087 143.426 204.778 107.292 178.187L22.0541 115.461C-14.0801 88.8698 -2.73293 32.1893 40.853 21.5579L120.925 2.02686Z"
                    stroke="#CFF588"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />

                  <path
                    d="M120.925 2.02686C152.886 -5.76908 184.126 17.2203 186.189 50.0544L191.355 132.311C194.167 177.087 143.426 204.778 107.292 178.187L22.0541 115.461C-14.0801 88.8698 -2.73293 32.1893 40.853 21.5579L120.925 2.02686Z"
                    fill="#CFF588"
                    transform="scale(0.92) translate(8, 8)"
                  />

                </svg>


                <div className="pick-content">

                  <Ruler size={24} />

                  <span>
                    {c.specificItems[1]}
                  </span>

                </div>

              </div>


              {/* =================================================
                  3. EXPRESSIVE ARTS
              ================================================= */}

              <div className="specific-item-wrapper expressive">

                <svg
                  className="shape-svg"
                  viewBox="0 0 170 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >

                  <path
                    d="M1.51459 46.7954C2.12124 17.0718 29.4479 -4.8789 58.6032 0.938002L130.958 15.374C170.717 23.3064 183.129 74.0474 151.521 99.4367L77.6603 158.767C46.0528 184.156 -0.818217 161.095 0.00905935 120.561L1.51459 46.7954Z"
                    stroke="#F5CEDB"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />

                  <path
                    d="M1.51459 46.7954C2.12124 17.0718 29.4479 -4.8789 58.6032 0.938002L130.958 15.374C170.717 23.3064 183.129 74.0474 151.521 99.4367L77.6603 158.767C46.0528 184.156 -0.818217 161.095 0.00905935 120.561L1.51459 46.7954Z"
                    fill="#F5CEDB"
                    transform="scale(0.92) translate(7, 7)"
                  />

                </svg>


                <div className="pick-content">

                  <Palette size={24} />

                  <span>
                    {c.specificItems[2]}
                  </span>

                </div>

              </div>


              {/* =================================================
                  4. UNDERSTANDING THE WORLD
              ================================================= */}

              <div className="specific-item-wrapper world">

                <svg
                  className="shape-svg"
                  viewBox="0 0 185 165"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >

                  <path
                    d="M28.7671 31.1518C39.115 3.28094 72.1405 -8.46212 97.7611 6.61928L161.344 44.0471C196.283 64.6133 191.317 116.614 153.118 130.196L63.8544 161.936C25.6554 175.519 -11.0246 138.326 3.08656 100.32L28.7671 31.1518Z"
                    stroke="#AC89E9"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />

                  <path
                    d="M28.7671 31.1518C39.115 3.28094 72.1405 -8.46212 97.7611 6.61928L161.344 44.0471C196.283 64.613 191.317 116.614 153.118 130.196L63.8544 161.936C25.6554 175.519 -11.0246 138.326 3.08656 100.32L28.7671 31.1518Z"
                    fill="#AC89E9"
                    transform="scale(0.92) translate(8, 7)"
                  />

                </svg>


                <div className="pick-content">

                  <Globe size={24} />

                  <span>
                    {c.specificItems[3]}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ASSESSMENT
      ===================================================== */}

      <section className="assessment-section">

        <div className="assessment-card">

          <div className="assessment-content">

            <h2>{c.assessment}</h2>

            <p>{c.assessmentText}</p>

          </div>


          <div className="assessment-icon">

            <img
              src={Trending}
              alt=""
            />

          </div>

        </div>

      </section>

    </main>
  );
}