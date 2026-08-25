import { Volume2 } from "lucide-react";
import principalImage from "../assets/principal.png";
import "./PrincipalMessage.css";
import cloud from "../assets/cloud.png";
import sunImage from "../assets/sun.png";
import rain from "../assets/rain.png";

function PrincipalMessage() {
  return (
    <section className="principal-section" id="principal-message">

      <div className="principal-wrapper">

        {/* Cloud Decoration */}
        <div className="principal-cloud">
          <img src={cloud} alt="Principal" />
        </div>


        {/* Main Card */}
        <div className="principal-card">

          {/* Heading */}
          <h2 className="principal-title">
            A Message from the Nursery Principal
          </h2>


          {/* Principal Image */}
          <div className="principal-photo-wrapper">
            <img
              src={principalImage}
              alt="Nursery Principal"
              className="principal-photo"
            />
          </div>


          {/* Message */}
          <div className="principal-text">

            <p className="dear-parents">
              Dear Parents,
            </p>

            <p className="purple-message">
              It is my great pleasure to welcome you to Kids Land Nursery
              and sincerely thank you for the trust you have placed in us.
            </p>

            <p>
              Since 2004, we have been committed to providing a safe,
              nurturing, and inspiring environment where every child is
              valued, supported, and encouraged to reach their full potential.
              Our approach combines high-quality care and education in line
              with the EYFS framework and ADEK standards.
            </p>

            <p>
              We believe every child is unique, and we respect their
              individual abilities, interests, and developmental needs.
              We also strive to nurture children who are proud of their
              Arabic language and national identity and guided by values
              of compassion, respect, and tolerance.
            </p>

            <p>
              We believe that a strong partnership between families and
              the nursery is essential for children's success. Through trust,
              communication, and collaboration, we can give every child the
              best possible start in life.
            </p>

            <p>
              We look forward to another year filled with learning,
              happiness, growth, and wonderful memories. Since 2004...
              Creating the Beginnings, Every Child Deserves.
              With our highest respect and appreciation,
            </p>

            <p className="principal-signature">
              Nursery Principal
            </p>

          </div>


          {/* Arabic Button */}
          <button className="arabic-button">
            اقرأ بالعربية
          </button>

        </div>


        {/* Sun Decoration */}
        <div className="principal-sun">
          <img src={sunImage} alt="Sun" />
        </div>

      </div>

       <div className="rainbow">
        <img src={rain}/>
      </div>

    </section>
  );
}

export default PrincipalMessage;