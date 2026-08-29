// TODO: build this as a routed page if it needs its own URL
// Import and assemble components from ../components/ here

// function About() {
//   return (
//     <div className="About-page">
//       {/* page content here */}
//     </div>
//   );
// }

// export default About;


import {
  Lightbulb,
  BookOpen,
  MessageCircle,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Shield,
  ClipboardList,
  Bus,
  Users,
  Sparkles,
} from "lucide-react";

import "./About.css";
import { useLanguage } from "../context/LanguageContext";

// Replace these filenames with the exact images in your assets folder
import aboutBuilding from "../assets/about-image.png";

import schoolBus from "../assets/school-bus.png";
import summerCamp from "../assets/summer-camp.png";
import winterCamp from "../assets/winter-camp.png";
import speechSupport from "../assets/speech-support.png";
import additionalSupport from "../assets/additional-support.png";

import libraryImg from "../assets/library.png";
import classroomImg from "../assets/Container (12).png";
import outdoorImg from "../assets/Container (13).png";
import riskyPlayImg from "../assets/Container (14).png";
import uaeRoomImg from "../assets/Container (15).png";
import firstAidImg from "../assets/Container (16).png";
import napRoomImg from "../assets/Container (17).png";
import constructionImg from "../assets/Container (18).png";
import messyPlayImg from "../assets/Container (19).png";
import theatreImg from "../assets/library.png";

function About() {
  const { language, t } = useLanguage();

  // Icons/colors stay fixed regardless of language - only the text comes
  // from the translation dictionary, keyed by a stable id per value/
  // principle so English and Arabic always render the same set in the
  // same order.
  const values = [
    { id: "creativity", icon: <Lightbulb />, color: "purple", iconBg: "#d990f8" },
    { id: "continuousLearning", icon: <BookOpen />, color: "orange", iconBg: "#ffcda9" },
    { id: "communication", icon: <MessageCircle />, color: "green", iconBg: "#bce86c" },
    { id: "respect", icon: <Heart />, color: "yellow", iconBg: "#f8f98c" },
    { id: "safety", icon: <ShieldCheck />, color: "blue", iconBg: "#d8edf3" },
    { id: "collaboration", icon: <Users />, color: "pink", iconBg: "#f7c6d8" },
    { id: "excellence", icon: <Sparkles />, color: "purple", iconBg: "#d990f8" },
  ];

  const curriculum = [
    { id: "uniqueChild" },
    { id: "positiveRelationships" },
    { id: "enablingEnvironments" },
    { id: "learningDevelopment" },
  ];

  const services = [
    { id: "schoolTransportation", image: schoolBus },
    { id: "summerCamp", image: summerCamp },
    { id: "winterCamp", image: winterCamp },
    { id: "speechLanguageSupport", image: speechSupport },
    { id: "additionalSupport", image: additionalSupport },
  ];

   const facilities = [
    { id: "library", image: libraryImg },
    { id: "classrooms", image: classroomImg },
    { id: "outdoorGarden", image: outdoorImg },
    { id: "riskyPlayArea", image: riskyPlayImg },
    { id: "uaeIdentityRoom", image: uaeRoomImg },
    { id: "firstAidRoom", image: firstAidImg },
    { id: "napRoom", image: napRoomImg },
    { id: "constructionRoom", image: constructionImg },
    { id: "messyPlayArea", image: messyPlayImg },
    { id: "theatre", image: theatreImg },
  ];

  return (
    <main className="about-page" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-content">

          <div className="about-hero-left">
            <h1>{t("about.heroTitle")}</h1>

            <p className="hero-description">
              {t("about.heroDescription")}
            </p>

            <div className="why-section">
              <h2>
                {t("about.whyTitle")}
              </h2>

              <p>
                {t("about.whyP1")}
              </p>

              <p>
                {t("about.whyP2")}
              </p>
            </div>
          </div>

          <div className="about-hero-image-wrapper">
            <img
              src={aboutBuilding}
              alt="Kids Land Nursery"
              className="about-building-image"
            />
          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="values-section">

        <h2 className="section-title">{t("about.valuesTitle")}</h2>

        <div className="values-slider">
          {values.map((value) => (
            <div
              className={`value-card ${value.color}`}
              key={value.id}
            >
              <div
                className="value-icon"
                style={{ backgroundColor: value.iconBg }}
              >
                {value.icon}
              </div>

              <h3>{t(`about.values.${value.id}.title`)}</h3>

              <p>{t(`about.values.${value.id}.text`)}</p>

              <span className="value-line"></span>
            </div>
          ))}
        </div>

      </section>

      {/* ================= EYFS ================= */}
      <section className="eyfs-section">

        <h2 className="section-title">
          {t("about.eyfsTitle")}
        </h2>

        <p className="eyfs-description">
          {t("about.eyfsDescription")}
        </p>

        <div className="curriculum-grid">
          {curriculum.map((item) => (
            <div className="curriculum-card" key={item.id}>
              <h3>{t(`about.curriculum.${item.id}.title`)}</h3>
              <p>{t(`about.curriculum.${item.id}.text`)}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">

        <h2 className="section-title">{t("about.teamTitle")}</h2>

        <p className="team-description">
          {t("about.teamDescription")}
        </p>

        <div className="team-grid">

          <div className="team-card leadership">
            <div className="team-icon">
              <Lightbulb />
            </div>

            <h3>{t("about.team.leadership")}</h3>

            <div className="team-tags">
              <span>
                <CheckCircle2 /> {t("about.team.nurseryDirector")}
              </span>

              <span>
                <CheckCircle2 /> {t("about.team.assistantDirector")}
              </span>
            </div>
          </div>

          <div className="team-card educational">
            <div className="team-icon">
              <BookOpen />
            </div>

            <h3>{t("about.team.educationalStaff")}</h3>

            <div className="team-tags">
              <span>
                <CheckCircle2 /> {t("about.team.qualifiedTeachers")}
              </span>

              <span>
                <CheckCircle2 /> {t("about.team.teachingAssistants")}
              </span>
            </div>
          </div>

          <div className="team-card specialists">
            <div className="team-icon">
              <Shield />
            </div>

            <h3>{t("about.team.specialists")}</h3>

            <div className="specialist-grid">
              <span>
                <Shield /> {t("about.team.healthSafetyOfficer")}
              </span>

              <span>
                <ClipboardList /> {t("about.team.curriculumCoordinator")}
              </span>

              <span>
                <Users /> {t("about.team.inclusionCoordinator")}
              </span>

              <span>
                <Shield /> {t("about.team.childProtectionCoordinator")}
              </span>
            </div>
          </div>

          <div className="team-card support">
            <div className="team-icon">
              <Bus />
            </div>

            <h3>{t("about.team.supportLogistics")}</h3>

            <div className="support-list">
              <span>♟ {t("about.team.cleaningStaff")}</span>
              <span>▣ {t("about.team.authorizedDrivers")}</span>
              <span>♟ {t("about.team.busSupervisors")}</span>
              <span>▣ {t("about.team.busDriver")}</span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">

        <h2 className="section-title">{t("about.servicesTitle")}</h2>

        <p className="services-description">
          {t("about.servicesDescription")}
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>

              <img
                src={service.image}
                alt={t(`about.services.${service.id}`)}
              />

              <h3>{t(`about.services.${service.id}`)}</h3>

            </div>
          ))}
        </div>

      </section>

      {/* ================= FACILITIES ================= */}
      <section className="nursery-facilities">
      <div className="facilities-container">

        <h2 className="facilities-title">
          {t("about.facilitiesTitle")}
        </h2>

        <div className="facilities-grid">
          {facilities.map((facility) => (
            <div className="facility-card" key={facility.id}>

              <div className="facility-image-wrapper">
                <img
                  src={facility.image}
                  alt={t(`about.facilities.${facility.id}.title`)}
                  className="facility-image"
                />
              </div>

              <div className="facility-content">
                <h3>{t(`about.facilities.${facility.id}.title`)}</h3>

                <p>{t(`about.facilities.${facility.id}.description`)}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

    </main>
  );
}

export default About;
