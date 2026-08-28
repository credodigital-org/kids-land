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

// Update image paths as needed
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
          the unique
          <br className="desktop-break" />
          developmental milestone of your child. We offer a structured,
          play-based
          <br className="desktop-break" />
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
            divided
            <br className="desktop-break" />
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
                  Communication and
                  <br />
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
                  Personal, Social and
                  <br />
                  Emotional Development
                </span>
              </div>
            </div>
          </div>

          {/* SPECIFIC AREAS */}
          <div className="areas-box specific-box">
            <h3>Specific Areas</h3>

            <div className="specific-items">
              {/* 1. LITERACY */}
              <div className="specific-item-wrapper literacy">
                <svg
                  className="shape-svg"
                  viewBox="0 0 172 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                  <span>Literacy</span>
                </div>
              </div>

              {/* 2. MATHEMATICS */}
              <div className="specific-item-wrapper mathematics">
                <svg
                  className="shape-svg"
                  viewBox="0 0 192 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                  <span>Mathematics</span>
                </div>
              </div>

              {/* 3. EXPRESSIVE ARTS */}
              <div className="specific-item-wrapper expressive">
                <svg
                  className="shape-svg"
                  viewBox="0 0 170 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                    Expressive Arts
                    <br />
                    and Design
                  </span>
                </div>
              </div>

              {/* 4. UNDERSTANDING THE WORLD */}
              <div className="specific-item-wrapper world">
                <svg
                  className="shape-svg"
                  viewBox="0 0 185 165"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.7671 31.1518C39.115 3.28094 72.1405 -8.46212 97.7611 6.61928L161.344 44.0471C196.283 64.6133 191.317 116.614 153.118 130.196L63.8544 161.936C25.6554 175.519 -11.0246 138.326 3.08656 100.32L28.7671 31.1518Z"
                    stroke="#AC89E9"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />
                  <path
                    d="M28.7671 31.1518C39.115 3.28094 72.1405 -8.46212 97.7611 6.61928L161.344 44.0471C196.283 64.6133 191.317 116.614 153.118 130.196L63.8544 161.936C25.6554 175.519 -11.0246 138.326 3.08656 100.32L28.7671 31.1518Z"
                    fill="#AC89E9"
                    transform="scale(0.92) translate(8, 7)"
                  />
                </svg>
                <div className="pick-content">
                  <Globe size={24} />
                  <span>
                    Understanding
                    <br />
                    the World
                  </span>
                </div>
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
              communication, supporting a strong partnership between the nursery
              and families.
            </p>
          </div>

          <div className="assessment-icon">
            <img src={Trending} alt="Trending icon" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Learning;