import React from "react";
import { Download, CalendarDays } from "lucide-react";
import "./NewsletterSection.css";

// Replace these with your actual images
import parentImage from "../assets/unsplash_75yy5yhN8qE.png";
import calendarImage from "../assets/Frame.png";
import balloonImage from "../assets/Vector (1).png";

function Resources() {
  return (
    <section className="resources-page">

      {/* ================= TOP CARDS ================= */}
      <div className="resources-grid">

        {/* Parent's Guide */}
        <div className="resource-card parent-card">

          <div className="parent-content">
            <h2>Parent’s Guide</h2>

            <p>
              Download our complete guide to know more about our programs,
              policies, daily routines, and how we care for your little ones.
            </p>

            <h3>Download Parent’s Guideline</h3>

            <span className="file-text">
              Get the complete guide in PDF format
            </span>

            <button className="purple-btn">
              <Download size={12} />
              Download PDF
            </button>
          </div>

          <img
            src={parentImage}
            alt="Parent Guide"
            className="parent-image"
          />
        </div>


        {/* Academic Calendar */}
        <div className="resource-card calendar-card">

          <img
            src={calendarImage}
            alt="Academic Calendar"
            className="calendar-icon"
          />

          <div className="calendar-content">
            <h2>Academic Calendar</h2>

            <p>
              Stay updated with important school dates, holidays, and special
              events throughout the year. Plan ahead and never miss a moment
              of your child’s learning journey.
            </p>

            <h3>Download Calendar</h3>

            <button className="purple-btn calendar-btn">
              <CalendarDays size={14} />
              Download Calendar
            </button>
          </div>

          <img
            src={balloonImage}
            alt=""
            className="balloon-image"
          />
        </div>

      </div>


      {/* ================= NEWSLETTER ================= */}
      <div className="newsletter-card">

        <div className="newsletter-label">
          NEWSLETTER
        </div>

        <h2>Stay Updated</h2>

        <p>
          Subscribe to our newsletter for the latest news, events, and
          educational tips from Kids Land Nursery.
        </p>

        <button className="download-btn">
          Download
        </button>

      </div>

    </section>
  );
}

export default Resources;