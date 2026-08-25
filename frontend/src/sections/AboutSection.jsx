import {
  Heart,
  Brain,
  Handshake,
  ArrowRight,
} from "lucide-react";

import schoolBuilding from "../assets/about-image.png";
import garden from "../assets/garden.png";

import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about-us">

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
            ABOUT US
          </span>


          <h2 className="about-title">
            A Place to Learn, Play
            <br />
            and Grow
          </h2>


          <p className="about-description">
            At Kids Land Nursery, we believe childhood is a time
            of wonder, discovery and limitless possibility.
          </p>


          <p className="about-description">
            Our nurturing environment, enriched curriculum and
            caring educators help every child build the confidence
            and skills for a brighter future.
          </p>


          {/* Features */}
          <div className="about-features">

            <div className="about-feature">

              <div className="feature-icon">
                <Heart size={15} />
              </div>

              <span>
                Child-centered approach
              </span>

            </div>


            <div className="about-feature">

              <div className="feature-icon">
                <Brain size={15} />
              </div>

              <span>
                Focus on social, emotional &amp;
                cognitive development
              </span>

            </div>


            <div className="about-feature">

              <div className="feature-icon">
                <Handshake size={15} />
              </div>

              <span>
                Strong parent partnership
              </span>

            </div>

          </div>


          {/* Button */}
          <a
            href="#learning"
            className="about-button"
          >
            <span>
              Learn More About Us
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