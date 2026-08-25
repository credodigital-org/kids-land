// TODO: build this as a routed page if it needs its own URL
// Import and assemble components from ../components/ here

// function Admissions() {
//   return (
//     <div className="Admissions-page">
//       {/* page content here */}
//     </div>
//   );
// }

// export default Admissions;


import React from "react";
import {
  ArrowRight,
  FileText,
  Flag,
  DoorOpen,
  PartyPopper,
  User,
  Phone,
  Baby,
  ClipboardList,
  ChevronDown,
} from "lucide-react";

import "./Admissions.css";

// Put your admission image inside src/assets/images/
import admissionImage from "../assets/admission.png";

function Admission() {
  return (
    <main className="admission-page">

      {/* ================= HERO ================= */}
      <section className="admission-hero">

        <div className="admission-hero-content">

          <p className="admission-open">
            Admission Open
          </p>

          <h1>
            A Great Start For Little
            <br />
            Futures
          </h1>

          <p className="admission-description">
            We provide a safe, caring and joyful environment where
            <br className="desktop-only" />
            children learn, play and grow together.
          </p>

          <div className="admission-buttons">

            <button className="apply-btn">
              Apply Now
              <ArrowRight size={17} />
            </button>

            <button className="enquire-btn">
              Enquire Now
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

        <div className="admission-hero-image">
          <img
            src={admissionImage}
            alt="Kids Land Nursery children"
          />
        </div>

      </section>


      {/* ================= SIMPLE STEPS ================= */}
      <section className="steps-section">

        <h2>Simple Steps to Join Us</h2>

        <div className="steps-grid">

          {/* STEP 1 */}
          <div className="step-card">

            <div className="step-icon purple-icon">
              <FileText size={23} />
            </div>

            <h3>1. Register</h3>

            <p>
              Fill out our online inquiry form
              <br />
              below to express your interest.
            </p>

          </div>


          {/* STEP 2 */}
          <div className="step-card">

            <div className="step-icon green-icon">
              <Flag size={23} />
            </div>

            <h3 className="green-title">2. Tour</h3>

            <p>
              Schedule a personalized tour
              <br />
              of our beautiful nursery
              <br />
              facilities.
            </p>

          </div>


          {/* STEP 3 */}
          <div className="step-card">

            <div className="step-icon yellow-icon">
              <DoorOpen size={23} />
            </div>

            <h3 className="yellow-title">3. Meet</h3>

            <p>
              A brief, friendly assessment
              <br />
              meeting with our Principal.
            </p>

          </div>


          {/* STEP 4 */}
          <div className="step-card">

            <div className="step-icon red-icon">
              <PartyPopper size={23} />
            </div>

            <h3 className="red-title">4. Enroll</h3>

            <p>
              Complete paperwork and
              <br />
              welcome to the Kids Land
              <br />
              family!
            </p>

          </div>

        </div>

      </section>


      {/* ================= REGISTER SECTION ================= */}
      <section className="register-section">

        <div className="register-card">

          <h2>Register Your Interest</h2>

          <p className="register-subtitle">
            fill out the form below and our admissions team will contact you
            shortly to arrange a tour.
          </p>


          <form className="admission-form">

            {/* ROW 1 */}
            <div className="form-row">

              <div className="input-box">

                <User size={18} />

                <input
                  type="text"
                  placeholder="Enter parent Name"
                />

              </div>


              <div className="input-box">

                <Phone size={18} />

                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                />

              </div>

            </div>


            {/* ROW 2 */}
            <div className="form-row">

              <div className="input-box">

                <Baby size={18} />

                <input
                  type="text"
                  placeholder="Enter Your Children's Name"
                />

              </div>


              <div className="input-box select-box">

                <ClipboardList size={18} />

                <select defaultValue="">
                  <option value="" disabled>
                    Select Age Group
                  </option>

                  <option value="little-angels">
                    Little Angels - 45 Days - 11 Months
                  </option>

                  <option value="toddlers">
                    Toddlers - 1 - 2 Years
                  </option>

                  <option value="discoveries">
                    Discoveries - 2 - 3 Years
                  </option>

                  <option value="inventors">
                    Inventors - 3 - 4 Years
                  </option>

                </select>

                <ChevronDown
                  className="select-arrow"
                  size={16}
                />

              </div>

            </div>


            {/* MESSAGE */}
            <div className="message-box">

              <User size={18} />

              <textarea
                placeholder="Any specific requirements or questions ?"
              />

            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="submit-btn"
            >
              Submit Inquiry
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Admission;
