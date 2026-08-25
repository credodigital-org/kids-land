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

// Replace these filenames with the exact images in your assets folder
import aboutBuilding from "../assets/about-image.png";

import schoolBus from "../assets/school-bus.png";
import summerCamp from "../assets/summer-camp.png";
import winterCamp from "../assets/winter-camp.png";
import speechSupport from "../assets/speech-support.png";
import additionalSupport from "../assets/additional-support.png";

import library from "../assets/library.png";
import classrooms from "../assets/classrooms.png";
import outdoorGarden from "../assets/outdoor-garden.png";
import riskyPlay from "../assets/risky-play.png";
import identityRoom from "../assets/identity-room.png";
import firstAid from "../assets/first-aid-room.png";
import napRoom from "../assets/nap-room.png";
import constructionRoom from "../assets/construction-room.png";

function About() {
  const values = [
    {
      title: "Creativity",
      text: "Encouraging children to think outside the box and developing their artistic and creative skills.",
      icon: <Lightbulb />,
      color: "purple",
      iconBg: "#d990f8",
    },
    {
      title: "continuous Learning",
      text: "Encouraging children to think outside the box and developing their artistic and creative skills.",
      icon: <BookOpen />,
      color: "orange",
      iconBg: "#ffcda9",
    },
    {
      title: "Communication",
      text: "Encouraging children to think outside the box and developing their artistic and creative skills.",
      icon: <MessageCircle />,
      color: "green",
      iconBg: "#bce86c",
    },
    {
      title: "Respect",
      text: "Encouraging children to think outside the box and developing their artistic and creative skills.",
      icon: <Heart />,
      color: "yellow",
      iconBg: "#f8f98c",
    },
    {
      title: "Safety",
      text: "Encouraging children to think outside the box and developing their artistic and creative skills.",
      icon: <ShieldCheck />,
      color: "blue",
      iconBg: "#d8edf3",
    },
    {
      title: "Kindness",
      text: "Encouraging children to care, share and support one another.",
      icon: <Heart />,
      color: "pink",
      iconBg: "#f7c6d8",
    },
  ];

  const curriculum = [
    {
      title: "Every Child is Unique",
      text: "We respect each child’s abilities, interests, and individual needs.",
    },
    {
      title: "Positive Relationships",
      text: "We Build secure, respectful, and supportive relationships with children and families.",
    },
    {
      title: "Enabling Environments",
      text: "We provide safe and engaging environments that encourage exploration and discovery.",
    },
    {
      title: "Learning and Development",
      text: "We offer meaningful experiences that support children’s overall development.",
    },
  ];

  const services = [
    {
      title: "School Transportation",
      image: schoolBus,
    },
    {
      title: "Summer Camp",
      image: summerCamp,
    },
    {
      title: "Winter Camp",
      image: winterCamp,
    },
    {
      title: "Speech & Language Support",
      image: speechSupport,
    },
    {
      title: "Additional Support Services",
      image: additionalSupport,
    },
  ];

  const facilities = [
    {
      title: "Library",
      image: library,
      text: "A cozy space filled with books and stories. it encourage imagination, curiosity, and a love for reading.",
    },
    {
      title: "Classrooms",
      image: classrooms,
      text: "Bright, engaging rooms equipped with age-appropriate learning resources to foster cognitive and social development.",
    },
    {
      title: "Outdoor Garden",
      image: outdoorGarden,
      text: "A natural space where children can explore and play.it develops curiosity and helps children connect with nature.",
    },
    {
      title: "Risky Play Area",
      image: riskyPlay,
      text: "A safe space where children can try new challenges. it builds confidence, independence, and problem solving skills.",
    },
    {
      title: "UAE National Identity Room",
      image: identityRoom,
      text: "A special space to discover UAE culture, heritage, and traditions. it builds pride,respect, and a strong sense of belonging.",
    },
    {
      title: "First Aid Room",
      image: firstAid,
      text: "A safe and caring space for immediate support when needed. it helps ensure children’s health,safety, and well-being.",
    },
    {
      title: "Nap Room",
      image: napRoom,
      text: "A calm and comfortable space for rest and relaxation. it helps children recharge and feel safe and refreshed.",
    },
    {
      title: "Construction Room",
      image: constructionRoom,
      text: "A fun for building, designing, and creating. it develops creativity, planning, and fine motor skills.",
    },
  ];

  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-content">

          <div className="about-hero-left">
            <h1>A Place to Learn, Play and Grow</h1>

            <p className="hero-description">
              We believe childhood is a time of wonder, discovery and limitless
              possibility. Our nurturing environment helps every child build
              the confidence and skills for a brighter future.
            </p>

            <div className="why-section">
              <h2>
                Why Families Choose Kids
                <br />
                Land Nursery ?
              </h2>

              <p>
                For more than two decades, Kids Land Nursery has earned the
                trust of families -not when they first enroll their children,
                but also as they continue to choose us for each new stage of
                their children’s early learning journey.
              </p>

              <p>
                parents choose us because we believe that a child deserves
                more than simply a safe place. Every child deserves a nurturing
                learning environment that understands their individual needs,
                celebrates who they are, and helps them grow, learn, and
                develop with confidence
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

        <h2 className="section-title">Our Values</h2>

        <div className="values-slider">
          {values.map((value, index) => (
            <div
              className={`value-card ${value.color}`}
              key={index}
            >
              <div
                className="value-icon"
                style={{ backgroundColor: value.iconBg }}
              >
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>

              <span className="value-line"></span>
            </div>
          ))}
        </div>

      </section>

      {/* ================= EYFS ================= */}
      <section className="eyfs-section">

        <h2 className="section-title">
          EYFS Curriculum at kids Land Foundation
        </h2>

        <p className="eyfs-description">
          Kids Land Foundation follows the{" "}
          <strong>Early Years Foundation Stage(EYFS)</strong> frameworks,
          providing a safe, stimulating, and inclusive environment where
          children learn through play, exploration, and hands-on experiences,
          while supporting their individual needs and holistic development.
        </p>

        <div className="curriculum-grid">
          {curriculum.map((item, index) => (
            <div className="curriculum-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">

        <h2 className="section-title">Our Team</h2>

        <p className="team-description">
          At Kids Nursery, we believe that quality education and care begin
          with a qualified,specialized, and well-trained team working together
          to provide every child with a safe, supportive, and stimulating
          environment.
        </p>

        <div className="team-grid">

          <div className="team-card leadership">
            <div className="team-icon">
              <Lightbulb />
            </div>

            <h3>Leadership</h3>

            <div className="team-tags">
              <span>
                <CheckCircle2 /> Nursery Director
              </span>

              <span>
                <CheckCircle2 /> Assistant Director
              </span>
            </div>
          </div>

          <div className="team-card educational">
            <div className="team-icon">
              <BookOpen />
            </div>

            <h3>Educational Staff</h3>

            <div className="team-tags">
              <span>
                <CheckCircle2 /> Qualified Teachers
              </span>

              <span>
                <CheckCircle2 /> Teaching Assistants
              </span>
            </div>
          </div>

          <div className="team-card specialists">
            <div className="team-icon">
              <Shield />
            </div>

            <h3>Specialists & Coordination</h3>

            <div className="specialist-grid">
              <span>
                <Shield /> Health & Safety Officer
              </span>

              <span>
                <ClipboardList /> Curriculum Coordinator
              </span>

              <span>
                <Users /> Inclusion Coordinator
              </span>

              <span>
                <Shield /> Child Protection Coordinator
              </span>
            </div>
          </div>

          <div className="team-card support">
            <div className="team-icon">
              <Bus />
            </div>

            <h3>Support & Logistics</h3>

            <div className="support-list">
              <span>♟ Cleaning Staff</span>
              <span>▣ Authorized Drivers</span>
              <span>♟ Bus Supervisors</span>
              <span>▣ Bus Driver</span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">

        <h2 className="section-title">Our Services</h2>

        <p className="services-description">
          At Kids Land nursery, we provide a range of services designed to
          support children and families throughout the year, ensuring a safe,
          enriching, and supportive early learning experience.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <img
                src={service.image}
                alt={service.title}
              />

              <h3>{service.title}</h3>

            </div>
          ))}
        </div>

      </section>

      {/* ================= FACILITIES ================= */}
      <section className="facilities-section">

        <h2 className="section-title">Nursery Facilities</h2>

        <div className="facilities-grid">

          {facilities.map((facility, index) => (
            <div className="facility-card" key={index}>

              <img
                src={facility.image}
                alt={facility.title}
              />

              <h3>{facility.title}</h3>

              <p>{facility.text}</p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default About;
