import { Download, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { getNewspaperArchive } from "../services/newspaperService";
import "./NewsletterSection.css";

// ===============================
// IMPORT YOUR IMAGES
// ===============================

import parentImg from "../assets/unsplash_75yy5yhN8qE.png";
import fram from "../assets/Frame.png";
import calendarImg from "../assets/Vector (1).png";


function ResourcesSection() {

  // =========================================
  // NEWSLETTER DATA
  // =========================================

  const [latestNewsletter, setLatestNewsletter] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const loadNewsletter = async () => {

      try {

        const editions = await getNewspaperArchive();

        if (editions && editions.length > 0) {
          setLatestNewsletter(editions[0]);
        }

      } catch (error) {

        console.error(
          "Failed to load newsletter:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadNewsletter();

  }, []);


  // =========================================
  // NEWSLETTER DOWNLOAD
  // =========================================

  const handleNewsletterDownload = () => {

    if (!latestNewsletter?.file) {

      alert(
        "Newsletter is currently unavailable."
      );

      return;
    }

    window.open(
      latestNewsletter.file,
      "_blank",
      "noopener,noreferrer"
    );

  };


  // =========================================
  // PARENT GUIDE DOWNLOAD
  // =========================================

  const handleParentGuide = () => {

    // Replace this with your actual PDF URL
    window.open(
      "/documents/parents-guide.pdf",
      "_blank",
      "noopener,noreferrer"
    );

  };


  // =========================================
  // CALENDAR DOWNLOAD
  // =========================================

  const handleCalendarDownload = () => {

    // Replace this with your actual PDF URL
    window.open(
      "/documents/academic-calendar.pdf",
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (

    <section className="resources-section">


      {/* =================================================
          TOP RESOURCE CARDS
      ================================================= */}

      <div className="resources-grid">


        {/* =================================================
            PARENT'S GUIDE
        ================================================= */}

        <div className="resource-card parent-guide-card">

          <div className="resource-content">

            <h2>
              Parent’s Guide
            </h2>


            <p>
              Download our complete guide to know more about
              our programs, policies, daily routines, and how
              we care for your little ones.
            </p>


            <h4>
              Download Parent’s Guideline
            </h4>


            <span className="pdf-info">
              Get the complete guide in PDF format
            </span>


            <button
              type="button"
              className="purple-download-button"
              onClick={handleParentGuide}
            >

              <Download size={11} />

              <span>
                Download PDF
              </span>

            </button>

          </div>


          {/* Parent illustration */}

          <img
            src={parentImg}
            alt="Parent guide"
            className="parent-decoration"
          />

        </div>



        {/* =================================================
            ACADEMIC CALENDAR
        ================================================= */}

        <div className="resource-card academic-card">


          <div className="resource-content">


            {/* Frame image */}

            <img
              src={fram}
              alt="Academic Calendar decoration"
              className="frame-decoration"
            />


            <h2>
              Academic Calendar
            </h2>


            <p>
              Stay updated with important school dates,
              holidays, and special events throughout the
              year. Plan ahead and never miss a moment of
              your child’s learning journey.
            </p>


            <h4>
              Download Calendar
            </h4>


            <button
              type="button"
              className="purple-download-button"
              onClick={handleCalendarDownload}
            >

              <CalendarDays size={12} />

              <span>
                Download Calendar
              </span>

            </button>

          </div>


          {/* Pink calendar decoration */}

          <img
            src={calendarImg}
            alt=""
            className="calendar-decoration"
          />

        </div>

      </div>



      {/* =================================================
          NEWSLETTER
      ================================================= */}

      <div className="newsletter-card">


        {/* Newsletter label */}

        <span className="newsletter-label">
          NEWSLETTER
        </span>


        {/* Newsletter title */}

        <h2 className="newsletter-title">
          Stay Updated
        </h2>


        {/* Newsletter description */}

        <p className="newsletter-description">
          Subscribe to our newsletter for the latest news,
          events, and educational tips from Kids Land Nursery.
        </p>


        {/* Newsletter button */}

        <button
          type="button"
          className="newsletter-download-button"
          onClick={handleNewsletterDownload}
          disabled={
            loading ||
            !latestNewsletter?.file
          }
        >

          {loading
            ? "Loading..."
            : "Download"
          }

        </button>

      </div>


    </section>

  );
}

export default ResourcesSection;