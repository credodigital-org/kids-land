import { Eye, Rocket, Star } from "lucide-react";

import schoolBuilding from "../assets/school-building.png";
import kidsRed from "../assets/kids-red.png";
import kidsPlaying from "../assets/kids-playing.png";

import "./VisionMission.css";

function VisionMission() {
  return (
    <section className="vision-mission-section" id="vision-mission">

      {/* Rainbow decoration */}
      


      <div className="vision-mission-container">

        {/* =================================
            VISION CARD
        ================================= */}
        <article className="vision-card">

          {/* School image */}
          <div className="vision-image">
            <img
              src={schoolBuilding}
              alt="Kids Land Nursery building"
            />
          </div>


          {/* Heading */}
          <div className="vision-heading">

            <div className="vision-icon">
              <Eye size={22} />
            </div>

            <h2>
              Our Vision
            </h2>

          </div>


          {/* Description */}
          <p className="vision-description">
            To provide a world-class educational
            environment that nurtures and
            prepares a creative generation.
          </p>


          {/* Arabic button */}
          <button className="vision-arabic-button">
            اقرأ بالعربية
          </button>

        </article>


        {/* =================================
            MISSION CARD
        ================================= */}
        <article className="mission-card">

          {/* Kids image top */}
          <div className="mission-top-image">
            <img
              src={kidsRed}
              alt="Kids at Kids Land Nursery"
            />
          </div>


          {/* Heading */}
          <div className="mission-heading">

            <div className="mission-icon">
              <Rocket size={20} />
            </div>

            <h2>
              Our Mission
            </h2>

          </div>


          {/* Description */}
          <p className="mission-description">
            To nurture children based on the
            authentic values and principles of
            our community, develop their social
            communication skills, and instill
            strong moral values through a
            stimulating, child-centered
            environment that supports their
            growth and prepares them for future
            stages of education.We believe that
            creativity and innovation begin in
            the early years.
          </p>


          {/* Arabic button */}
          <button className="mission-arabic-button">
            اقرأ بالعربية
          </button>


          {/* Bottom kids image */}
          <div className="mission-bottom-image">
            <img
              src={kidsPlaying}
              alt="Children playing outdoors"
            />
          </div>

        </article>


        {/* Decorative star */}
        <div className="vision-star">
          <Star size={25} fill="currentColor" />
        </div>

      </div>

    </section>
  );
}

export default VisionMission;