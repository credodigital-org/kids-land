import "./LearningSection.css";

import littleAngels from "../assets/little-angels.png";
import toddlers from "../assets/toddlers.png";
import discoveries from "../assets/discoveries.png";
import inventors from "../assets/inventors.png";

const programs = [
  {
    id: 1,
    title: "Little Angels",
    age: "45 days -11 months",
    description:
      "Nurturing care and gentle introduction to learning",
    image: littleAngels,
    className: "little-angels",
  },
  {
    id: 2,
    title: "Toddlers",
    age: "1 - 2 Years",
    description:
      "Nurturing care and gentle introduction to learning",
    image: toddlers,
    className: "toddlers",
  },
  {
    id: 3,
    title: "Discoveries",
    age: "2 - 3 years",
    description:
      "Nurturing care and gentle introduction to learning",
    image: discoveries,
    className: "discoveries",
  },
  {
    id: 4,
    title: "Inventors",
    age: "3 - 4 years",
    description:
      "Nurturing care and gentle introduction to learning",
    image: inventors,
    className: "inventors",
  },
];

function LearningSection() {
  return (
    <section className="learning-section" id="learning">

      <div className="learning-container">

        {/* Section heading */}
        <div className="learning-header">

          <span className="learning-label">
            LEARNING
          </span>

          <h2 className="learning-title">
            Nurturing Every Stage
          </h2>

          <p className="learning-subtitle">
            We offer age-appropriate programs designed to support
            your child's early
            <br className="desktop-break" />
            learning journey.
          </p>

        </div>


        {/* Program cards */}
        <div className="learning-grid">

          {programs.map((program) => (
            <article
              className={`learning-card ${program.className}`}
              key={program.id}
            >

              {/* Image */}
              <div className="learning-image-wrapper">

                <img
                  src={program.image}
                  alt={program.title}
                  className="learning-image"
                />

              </div>


              {/* Content */}
              <div className="learning-card-content">

                <h3>
                  {program.title}
                </h3>

                <p className="learning-age">
                  {program.age}
                </p>

                <p className="learning-description">
                  {program.description}
                </p>

                <a
                  href="#contact"
                  className="learning-more"
                >
                  LEARN MORE
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LearningSection;