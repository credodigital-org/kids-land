import { useEffect, useState } from "react";
import "./TimingsTestimonials.css";
import rain from "../assets/rain-removebg-preview 1.png";
import calender from "../assets/Background (2).png";
import clock from "../assets/Container.png";
import party from "../assets/Background (3).png";
import sun  from "../assets/Container (1).png";

import * as testimonialsService from "../services/testimonialsService";
import { useLanguage } from "../context/LanguageContext";

// Cards cycle through these three color variants regardless of how many
// testimonials the admin has added - keeps the original design's look.
const CARD_COLORS = ["testimonial-purple", "testimonial-green", "testimonial-coral"];

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TimingsTestimonials() {
  const { language } = useLanguage();
  const c = language === "ar" ? { title: "مواعيد الحضانة", intro: "جدول منظم ومرن، صُمم ليمنح أطفالكم أفضل توازن بين التعلم واللعب والراحة.", weekdays: "الاثنين - الخميس", weekdaysText: "أيام التعلم الأساسية", friday: "الجمعة", fridayText: "نصف يوم والاستعداد لعطلة نهاية الأسبوع", to: "إلى", testimonials: "آراء أولياء الأمور" } : { title: "Nursery Timings", intro: "A structured yet flexible schedule designed to give your little ones the best balance of learning, play, and rest.", weekdays: "Mon - Thu", weekdaysText: "Core Learning Days", friday: "Friday", fridayText: "Half Day & Weekend Prep", to: "TO", testimonials: "Testimonials" };
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    testimonialsService
      .getTestimonials()
      .then(setTestimonials)
      .catch(() => setTestimonials([]));
  }, []);

  return (
    <section className="timings-testimonials" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* =====================================
          NURSERY TIMINGS
      ===================================== */}

      <div className="timings-container">

        {/* Left Content */}
        <div className="timings-intro">

          <h2 className="timings-title">
            <span className="timings-clock-icon">◷</span>
            {c.title}
          </h2>

          <p className="timings-description">
            {c.intro}
          </p>

          <div className="timings-rainbow">
            <img src={rain} />
          </div>

        </div>


        {/* Timing Cards */}
        <div className="timing-cards">

          {/* Monday - Thursday */}
          <div className="timing-card timing-card-green">

            <div className="timing-card-top">

              <div className="timing-icon calendar-icon">
                <img src={calender}/>
              </div>

              <div>
                <h3>{c.weekdays}</h3>

                <p>
                  {c.weekdaysText}
                </p>
              </div>

            </div>


            <div className="timing-hours">

              <div className="time-symbol clock-pink">
                <img src={clock} />
              </div>

              <div className="time-value">
                <strong>7:00 AM</strong>

                <span className="to-text">
                  {c.to}
                </span>

                <strong>5:00 PM</strong>
              </div>

            </div>

          </div>


          {/* Friday */}
          <div className="timing-card timing-card-blue">

            <div className="timing-card-top">

              <div className="timing-icon party-icon">
                <img src={party} />
              </div>

              <div>
                <h3>{c.friday}</h3>

                <p>
                  {c.fridayText}
                </p>
              </div>

            </div>


            <div className="timing-hours">

              <div className="time-symbol sun-symbol">
                <img src={sun} />
              </div>

              <div className="time-value">
                <strong>7:00 AM</strong>

                <span className="to-text">
                  {c.to}
                </span>

                <strong>12:00 PM</strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          TESTIMONIALS
      ===================================== */}

      <div className="testimonials-container">

        <div className="testimonials-heading">
          {c.testimonials}
        </div>


        <div className="testimonial-grid">

          {testimonials.map((t, i) => (
            <div
              className={`testimonial-card ${CARD_COLORS[i % CARD_COLORS.length]}`}
              key={t.id}
            >

              <div className="testimonial-person">

                <div className="testimonial-avatar">
                  {t.photo ? (
                    <img src={t.photo} alt={t.parent_name} />
                  ) : (
                    <span>{initials(t.parent_name)}</span>
                  )}
                </div>

                <div>
                  <h3>{t.parent_name}</h3>
                </div>

              </div>


              <div className="stars">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>


              <p className="testimonial-text">
                "{t.message}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TimingsTestimonials;
