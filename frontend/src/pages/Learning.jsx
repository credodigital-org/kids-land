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
  TrendingUp,
} from "lucide-react";

import "./Learning.css";

// Replace these with your actual image paths
import littleAngelsImg from "../assets/little-angels (2).png";
import toddlersImg from "../assets/toddlers (2).png";
import discoveriesImg from "../assets/discoveries (2).png";
import inventorsImg from "../assets/inventors (2).png";
import Trending from "../assets/TrendingUp.png";

const programs = [
  {
    title: "Little Angels",
    age: "45 Days - 11 Months",
    description:
      "A gentle, sensory-rich environment focused on establishing secure attachments, foundational motor skills, and early language acquisition through soft play and individualized care.",
    image: littleAngelsImg,
    icon: Baby,
    color: "pink",
  },
  {
    title: "Toddlers",
    age: "1 - 2 Years",
    description:
      "Develop communication, independence, and social-emotional skills. Encourage physical development, exploration, and learning through play.",
    image: toddlersImg,
    icon: Sprout,
    color: "green",
  },
  {
    title: "Discoveries",
    age: "2 - 3 Years",
    description:
      "Develop language, social skills, and independence. Encourage problem-solving, exploration, and motor development.",
    image: discoveriesImg,
    icon: PersonStanding,
    color: "purple",
  },
  {
    title: "Inventors",
    age: "3 - 4 Years",
    description:
      "Develop communication, early literacy, and mathematical skills. Build independence, creativity, and confidence for KG1 readiness.",
    image: inventorsImg,
    icon: Lightbulb,
    color: "yellow",
  },
];

function Learning() {
  return (
    <main className="learning-page">

      {/* ================= HERO ================= */}
      <section className="learning-hero">
        <h1>Nurturing Every Stage Of Growth</h1>

        <p>
          At Kids Land Nursery our learning is carefully designed to support
          the unique<br className="desktop-break" />
          developmental milestone of your child. We offer a structured,
          play-based<br className="desktop-break" />
          learning environment across four distinct age groups.
        </p>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="programs-section">
        <h2>Our Program Objective By Aged Groups</h2>

        <div className="program-grid">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                className={`program-card ${program.color}`}
                key={program.title}
              >
                <div className="program-image-wrapper">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="program-image"
                  />
                </div>

                <div className="program-content">
                  <div className="program-title-row">
                    <div className={`program-icon ${program.color}`}>
                      <Icon size={17} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3>{program.title}</h3>
                      <span>{program.age}</span>
                    </div>
                  </div>

                  <p>{program.description}</p>

                  <button className={`learn-more ${program.color}`}>
                    Learn More <span>→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= SEVEN AREAS ================= */}
      <section className="areas-section">

        <div className="areas-heading">
          <h2>Seven Areas Of Learning And Development</h2>

          <p>
            The EYFS framework covers Seven areas of Learning and Development,
            divided<br className="desktop-break" />
            into three Prime Areas and four Specific Areas.
          </p>
        </div>

        <div className="areas-container">

          {/* PRIME AREAS */}
          <div className="areas-box prime-box">
            <h3>Prime Areas</h3>

            <div className="prime-items">

              <div className="prime-item communication">
                <MessageCircle size={20} />
                <span>
                  Communication and<br />
                  Language
                </span>
              </div>

              <div className="prime-item physical">
                <Plus size={20} />
                <span>Physical Development</span>
              </div>

              <div className="prime-item personal">
                <Users size={20} />
                <span>
                  Personal, Social and<br />
                  Emotional Development
                </span>
              </div>

            </div>
          </div>

          {/* SPECIFIC AREAS */}
          <div className="areas-box specific-box">
            <h3>Specific Areas</h3>

            <div className="specific-items">

              <div className="specific-item literacy">
                <BookOpen size={20} />
                <span>Literacy</span>
              </div>

              <div className="specific-item mathematics">
                <Ruler size={20} />
                <span>Mathematics</span>
              </div>

              <div className="specific-item expressive">
                <Palette size={20} />
                <span>
                  Expressive Arts<br />
                  and Design
                </span>
              </div>

              <div className="specific-item world">
                <Globe size={20} />
                <span>
                  Understanding<br />
                  the World
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ASSESSMENT ================= */}
      <section className="assessment-section">

        <div className="assessment-card">

          <div className="assessment-content">
            <h2>Assessment And Progress</h2>

            <p>
              Children’s development is monitored through ongoing observation
              and assessment.
              <br />
              Teachers identify children’s strengths, interests, progress, and
              areas for further
              <br />
              support. Learning and progress are shared with parents through
              regular reports and
              <br />
              communication, supporting a strong partnership between the
              nursery and families.
            </p>
          </div>

          <div className="assessment-icon">
            <img src={Trending} />
          </div>

        </div>

      </section>

    </main>
  );
}

export default Learning;