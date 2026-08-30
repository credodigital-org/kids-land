import React, { useEffect, useState } from "react";
import { Download, CalendarDays } from "lucide-react";
import "./NewsletterSection.css";

// Replace these with your actual images
import parentImage from "../assets/unsplash_75yy5yhN8qE.png";
import calendarImage from "../assets/Frame.png";
import balloonImage from "../assets/Vector (1).png";
import { useLanguage } from "../context/LanguageContext";

import * as guidelinesService from "../services/guidelinesService";
import * as calendarService from "../services/calendarService";
import * as newsletterService from "../services/newsletterService";

function Resources() {
  const { language } = useLanguage();
  const c = language === "ar" ? { guide: "دليل أولياء الأمور", guideText: "حمّلوا دليلنا الكامل لمعرفة المزيد عن برامجنا وسياساتنا وروتيننا اليومي وكيف نعتني بأطفالكم.", guideDownload: "تحميل إرشادات أولياء الأمور", pdf: "احصلوا على الدليل الكامل بصيغة PDF", downloadPdf: "تحميل PDF", calendar: "التقويم الأكاديمي", calendarText: "اطّلعوا على التواريخ الدراسية المهمة والعطلات والفعاليات الخاصة طوال العام. خططوا مسبقًا ولا تفوتوا أي لحظة من رحلة تعلم طفلكم.", downloadCalendar: "تحميل التقويم", newsletter: "النشرة الإخبارية", updated: "ابقوا على اطلاع", newsletterText: "اشتركوا في نشرتنا للحصول على أحدث الأخبار والفعاليات والنصائح التعليمية من حضانة كيدز لاند.", download: "تحميل", comingSoon: "قريبًا" } : { guide: "Parent’s Guide", guideText: "Download our complete guide to know more about our programs, policies, daily routines, and how we care for your little ones.", guideDownload: "Download Parent’s Guideline", pdf: "Get the complete guide in PDF format", downloadPdf: "Download PDF", calendar: "Academic Calendar", calendarText: "Stay updated with important school dates, holidays, and special events throughout the year. Plan ahead and never miss a moment of your child’s learning journey.", downloadCalendar: "Download Calendar", newsletter: "NEWSLETTER", updated: "Stay Updated", newsletterText: "Subscribe to our newsletter for the latest news, events, and educational tips from Kids Land Nursery.", download: "Download", comingSoon: "Coming soon" };

  // Whatever the admin currently has uploaded for each of these three -
  // null means nothing active yet, in which case the button disables
  // itself instead of trying to download nothing.
  const [guideline, setGuideline] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [newsletter, setNewsletter] = useState(null);

  useEffect(() => {
    guidelinesService.getCurrentGuideline().then(setGuideline).catch(() => setGuideline(null));
    calendarService.getCurrentCalendar().then(setCalendar).catch(() => setCalendar(null));
    newsletterService.getCurrentNewsletter().then(setNewsletter).catch(() => setNewsletter(null));
  }, []);

  function openFile(fileUrl) {
    if (!fileUrl) return;
    window.open(fileUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="resources-page" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* ================= TOP CARDS ================= */}
      <div className="resources-grid">

        {/* Parent's Guide */}
        <div className="resource-card parent-card">

          <div className="parent-content">
            <h2>{c.guide}</h2>

            <p>
              {c.guideText}
            </p>

            <h3>{c.guideDownload}</h3>

            <span className="file-text">
              {c.pdf}
            </span>

            <button
              className="purple-btn"
              onClick={() => openFile(guideline?.file)}
              disabled={!guideline}
            >
              <Download size={12} />
              {guideline ? c.downloadPdf : c.comingSoon}
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
            <h2>{c.calendar}</h2>

            <p>
              {c.calendarText}
            </p>

            <h3>{c.downloadCalendar}</h3>

            <button
              className="purple-btn calendar-btn"
              onClick={() => openFile(calendar?.file)}
              disabled={!calendar}
            >
              <CalendarDays size={14} />
              {calendar ? c.downloadCalendar : c.comingSoon}
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
          {c.newsletter}
        </div>

        <h2>{c.updated}</h2>

        <p>
          {c.newsletterText}
        </p>

        <button
          className="download-btn"
          onClick={() => openFile(newsletter?.file)}
          disabled={!newsletter}
        >
          {newsletter ? c.download : c.comingSoon}
        </button>

      </div>

    </section>
  );
}

export default Resources;
