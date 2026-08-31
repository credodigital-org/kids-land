import React, { useEffect, useMemo, useState } from "react";
import { Download, CalendarDays, FileText } from "lucide-react";
import "./NewsletterSection.css";

// Replace these with your actual images
import parentImage from "../assets/unsplash_75yy5yhN8qE.png";
import calendarImage from "../assets/Frame.png";
import balloonImage from "../assets/Vector (1).png";
import { useLanguage } from "../context/LanguageContext";

import * as guidelinesService from "../services/guidelinesService";
import * as calendarService from "../services/calendarService";
import * as newspaperService from "../services/newspaperService";

const MONTH_NAMES_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTH_NAMES_AR = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

function Resources() {
  const { language } = useLanguage();
  const c = language === "ar" ? { guide: "دليل أولياء الأمور", guideText: "حمّلوا دليلنا الكامل لمعرفة المزيد عن برامجنا وسياساتنا وروتيننا اليومي وكيف نعتني بأطفالكم.", guideDownload: "تحميل إرشادات أولياء الأمور", pdf: "احصلوا على الدليل الكامل بصيغة PDF", downloadPdf: "تحميل PDF", calendar: "التقويم الأكاديمي", calendarText: "اطّلعوا على التواريخ الدراسية المهمة والعطلات والفعاليات الخاصة طوال العام. خططوا مسبقًا ولا تفوتوا أي لحظة من رحلة تعلم طفلكم.", downloadCalendar: "تحميل التقويم", newsletter: "النشرة الإخبارية", updated: "ابقوا على اطلاع", newsletterText: "اشتركوا في نشرتنا الإخبارية لتصلكم أحدث الأخبار والفعاليات والنصائح التعليمية من حضانة كيدز لاند.", download: "تحميل", downloadNewsletter: "تحميل النشرة", browseHeading: "تصفح وحمّل النشرات السابقة", footnote: "يمكنكم عرض وتحميل النشرات من أي سنة وتاريخ سابق", comingSoon: "قريبًا", month: "الشهر", year: "السنة", noEditions: "لا توجد نشرات متاحة بعد" } : { guide: "Parent’s Guide", guideText: "Download our complete guide to know more about our programs, policies, daily routines, and how we care for your little ones.", guideDownload: "Download Parent’s Guideline", pdf: "Get the complete guide in PDF format", downloadPdf: "Download PDF", calendar: "Academic Calendar", calendarText: "Stay updated with important school dates, holidays, and special events throughout the year. Plan ahead and never miss a moment of your child’s learning journey.", downloadCalendar: "Download Calendar", newsletter: "NEWSLETTER", updated: "Stay Updated", newsletterText: "Subscribe to our newsletter for the latest news, events, and educational tips from Kids Land Nursery.", download: "Download", downloadNewsletter: "Download Newsletter", browseHeading: "Browse & Download Past Newsletters", footnote: "You can view and download newsletters from any past year date", comingSoon: "Coming soon", month: "Month", year: "Year", noEditions: "No newsletters available yet" };
  const monthNames = language === "ar" ? MONTH_NAMES_AR : MONTH_NAMES_EN;

  // Whatever the admin currently has uploaded for guideline/calendar -
  // null means nothing active yet, in which case the button disables
  // itself instead of trying to download nothing.
  const [guideline, setGuideline] = useState(null);
  const [calendar, setCalendar] = useState(null);

  // The full newsletter archive, plus which year/month the visitor has
  // picked. Defaults to the most recent edition (the archive comes back
  // ordered by -edition_date, so editions[0] is the latest).
  const [editions, setEditions] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    guidelinesService.getCurrentGuideline().then(setGuideline).catch(() => setGuideline(null));
    calendarService.getCurrentCalendar().then(setCalendar).catch(() => setCalendar(null));
    newspaperService.getNewspaperArchive().then((data) => {
      setEditions(data);
      if (data.length > 0) {
        const [year, month] = data[0].edition_date.split("-");
        setSelectedYear(parseInt(year, 10));
        setSelectedMonth(parseInt(month, 10));
      }
    }).catch(() => setEditions([]));
  }, []);

  // Only years/months that actually have an uploaded edition are shown -
  // no point offering "January" if nothing was ever uploaded for it.
  const availableYears = useMemo(() => {
    const years = new Set(editions.map((e) => parseInt(e.edition_date.split("-")[0], 10)));
    return Array.from(years).sort((a, b) => b - a);
  }, [editions]);

  const availableMonthsForYear = useMemo(() => {
    return editions
      .filter((e) => parseInt(e.edition_date.split("-")[0], 10) === selectedYear)
      .map((e) => parseInt(e.edition_date.split("-")[1], 10))
      .sort((a, b) => a - b);
  }, [editions, selectedYear]);

  function handleYearChange(year) {
    setSelectedYear(year);
    // The previously-selected month might not exist in the new year -
    // fall back to whichever month is actually available.
    const monthsInYear = editions
      .filter((e) => parseInt(e.edition_date.split("-")[0], 10) === year)
      .map((e) => parseInt(e.edition_date.split("-")[1], 10));
    if (!monthsInYear.includes(selectedMonth)) {
      setSelectedMonth(monthsInYear[0] ?? null);
    }
  }

  const selectedEdition = editions.find((e) => {
    const [year, month] = e.edition_date.split("-");
    return parseInt(year, 10) === selectedYear && parseInt(month, 10) === selectedMonth;
  });

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

        <div className="newsletter-divider" />

        <div className="newsletter-browse-heading">
          {c.browseHeading}
        </div>

        {editions.length === 0 ? (
          <span className="newsletter-empty">{c.noEditions}</span>
        ) : (
          <div className="newsletter-selectors">
            <div className="newsletter-select-field">
              <label>{c.year}</label>
              <div className="newsletter-select-wrapper">
                <CalendarDays size={15} className="newsletter-select-icon" />
                <select
                  value={selectedYear ?? ""}
                  onChange={(e) => handleYearChange(parseInt(e.target.value, 10))}
                >
                  {availableYears.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="newsletter-select-field">
              <label>{c.month}</label>
              <div className="newsletter-select-wrapper">
                <CalendarDays size={15} className="newsletter-select-icon" />
                <select
                  value={selectedMonth ?? ""}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
                >
                  {availableMonthsForYear.map((m) => (
                    <option key={m} value={m}>{monthNames[m - 1]}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className="download-btn"
              onClick={() => openFile(selectedEdition?.file)}
              disabled={!selectedEdition}
            >
              <Download size={14} />
              {selectedEdition ? c.downloadNewsletter : c.comingSoon}
            </button>
          </div>
        )}

        <p className="newsletter-footnote">
          <FileText size={13} />
          {c.footnote}
        </p>

      </div>

    </section>
  );
}

export default Resources;
