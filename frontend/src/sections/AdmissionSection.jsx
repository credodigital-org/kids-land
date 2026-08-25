import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, CalendarDays, Download } from "lucide-react";
import "./AdmissionSection.css";
import globe from "../assets/image 219.png";
import plane from "../assets/plane.png";
import sun1 from "../assets/sun1.png";

import * as guidelinesService from "../services/guidelinesService";
import * as calendarService from "../services/calendarService";

function AdmissionSection() {
  const [guideline, setGuideline] = useState(null);
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    guidelinesService
      .getCurrentGuideline()
      .then(setGuideline)
      .catch(() => setGuideline(null)); // no active guideline uploaded yet - hide the download link

    calendarService
      .getCurrentCalendar()
      .then(setCalendar)
      .catch(() => setCalendar(null)); // no active calendar uploaded yet - hide the download link
  }, []);

  return (
    <section className="admission-section" id="admission">

      {/* Decorative student character */}
      <div className="admission-character">
        <div className="character-globe">
          <img src={globe}/>
        </div>
      </div>

      {/* Paper airplane */}
      <div className="admission-plane">
        <img src={plane}/>
      </div>

      {/* Sun */}
      <div className="admission-sun">
        <img src={sun1}/>
      </div>

      <div className="admission-container">

        <span className="admission-label">
          ADMISSION
        </span>

        <h2 className="admission-title">
          Joining Our Family
        </h2>

        <p className="admission-description">
          We make the enrollment process simple and welcoming
          for new families. Start your
          <br className="admission-desktop-break" />
          child's journey with us today.
        </p>

        <a
          href="#admission-steps"
          className="admission-button"
        >
          <span>View Admission Steps</span>

          <ArrowRight size={16} />
        </a>

        {/* Resource cards - pulled from the admin-managed uploads, not hardcoded */}
        <div className="admission-resources">

          {/* Parent's Guide */}
          <div className="resource-card">

            <div className="resource-icon resource-icon-purple">
              <BookOpen size={22} />
            </div>

            <h3 className="resource-title">Parent's Guide</h3>

            <p className="resource-description">
              Download our complete guide to know more about our programs,
              policies, daily routines, and how we care for your little ones.
            </p>

            {guideline ? (
              <a
                href={guideline.file}
                target="_blank"
                rel="noreferrer"
                className="resource-button"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>
            ) : (
              <span className="resource-unavailable">
                Guide coming soon
              </span>
            )}

          </div>

          {/* Academic Calendar */}
          <div className="resource-card">

            <div className="resource-icon resource-icon-green">
              <CalendarDays size={22} />
            </div>

            <h3 className="resource-title">Academic Calendar</h3>

            <p className="resource-description">
              Stay updated with important school dates, holidays, and special
              events throughout the year. Plan ahead and never miss a moment
              of your child's learning journey.
            </p>

            {calendar ? (
              <a
                href={calendar.file}
                target="_blank"
                rel="noreferrer"
                className="resource-button"
              >
                <Download size={15} />
                <span>Download Calendar</span>
              </a>
            ) : (
              <span className="resource-unavailable">
                Calendar coming soon
              </span>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdmissionSection;