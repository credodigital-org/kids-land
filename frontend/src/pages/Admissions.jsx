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
import { useLanguage } from "../context/LanguageContext";

function Admission() {
  const { language } = useLanguage();
  const c = language === "ar" ? { open:"القبول مفتوح", title:"بداية رائعة لمستقبل صغير", intro:"نوفر بيئة آمنة ومحبة ومليئة بالبهجة حيث يتعلم الأطفال ويلعبون وينمون معًا.", apply:"قدّم الآن", enquire:"استفسر الآن", steps:"خطوات بسيطة للانضمام إلينا", register:"1. التسجيل", registerText:"املأ نموذج الاستفسار الإلكتروني أدناه لتعبّر عن اهتمامك.", tour:"2. جولة", tourText:"احجز جولة شخصية في مرافق حضانتنا الجميلة.", meet:"3. لقاء", meetText:"لقاء تقييم قصير وودود مع مديرة الحضانة.", enroll:"4. التسجيل النهائي", enrollText:"أكمل الأوراق وانضم إلى عائلة كيدز لاند!", interest:"سجّل اهتمامك", formIntro:"املأ النموذج أدناه وسيتواصل معك فريق القبول قريبًا لترتيب جولة.", parent:"أدخل اسم ولي الأمر", phone:"أدخل رقم هاتفك", child:"أدخل اسم طفلك", age:"اختر الفئة العمرية", question:"هل لديك أي متطلبات أو أسئلة محددة؟", submit:"إرسال الاستفسار", groups:["الملائكة الصغار - 45 يومًا - 11 شهرًا","الأطفال الصغار - 1 - 2 سنة","المستكشفون - 2 - 3 سنوات","المبتكرون - 3 - 4 سنوات"] } : { open:"Admission Open", title:"A Great Start For Little Futures", intro:"We provide a safe, caring and joyful environment where children learn, play and grow together.", apply:"Apply Now", enquire:"Enquire Now", steps:"Simple Steps to Join Us", register:"1. Register", registerText:"Fill out our online inquiry form below to express your interest.", tour:"2. Tour", tourText:"Schedule a personalized tour of our beautiful nursery facilities.", meet:"3. Meet", meetText:"A brief, friendly assessment meeting with our Principal.", enroll:"4. Enroll", enrollText:"Complete paperwork and welcome to the Kids Land family!", interest:"Register Your Interest", formIntro:"Fill out the form below and our admissions team will contact you shortly to arrange a tour.", parent:"Enter parent Name", phone:"Enter Your Phone Number", child:"Enter Your Children's Name", age:"Select Age Group", question:"Any specific requirements or questions?", submit:"Submit Inquiry", groups:["Little Angels - 45 Days - 11 Months","Toddlers - 1 - 2 Years","Discoveries - 2 - 3 Years","Inventors - 3 - 4 Years"] };
  return (
    <main className="admission-page" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="admission-hero">

        <div className="admission-hero-content">

          <p className="admission-open">
            {c.open}
          </p>

          <h1>
            {c.title}
          </h1>

          <p className="admission-description">
            {c.intro}
          </p>

          <div className="admission-buttons">

            <button className="apply-btn">
              {c.apply}
              <ArrowRight size={17} />
            </button>

            <button className="enquire-btn">
              {c.enquire}
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

        <h2>{c.steps}</h2>

        <div className="steps-grid">

          {/* STEP 1 */}
          <div className="step-card">

            <div className="step-icon purple-icon">
              <FileText size={23} />
            </div>

            <h3>{c.register}</h3>

            <p>
              {c.registerText}
            </p>

          </div>


          {/* STEP 2 */}
          <div className="step-card">

            <div className="step-icon green-icon">
              <Flag size={23} />
            </div>

            <h3 className="green-title">{c.tour}</h3>

            <p>
              {c.tourText}
            </p>

          </div>


          {/* STEP 3 */}
          <div className="step-card">

            <div className="step-icon yellow-icon">
              <DoorOpen size={23} />
            </div>

            <h3 className="yellow-title">{c.meet}</h3>

            <p>
              {c.meetText}
            </p>

          </div>


          {/* STEP 4 */}
          <div className="step-card">

            <div className="step-icon red-icon">
              <PartyPopper size={23} />
            </div>

            <h3 className="red-title">{c.enroll}</h3>

            <p>
              {c.enrollText}
            </p>

          </div>

        </div>

      </section>


      {/* ================= REGISTER SECTION ================= */}
      <section className="register-section">

        <div className="register-card">

          <h2>{c.interest}</h2>

          <p className="register-subtitle">
            {c.formIntro}
          </p>


          <form className="admission-form">

            {/* ROW 1 */}
            <div className="form-row">

              <div className="input-box">

                <User size={18} />

                <input
                  type="text"
                  placeholder={c.parent}
                />

              </div>


              <div className="input-box">

                <Phone size={18} />

                <input
                  type="tel"
                  placeholder={c.phone}
                />

              </div>

            </div>


            {/* ROW 2 */}
            <div className="form-row">

              <div className="input-box">

                <Baby size={18} />

                <input
                  type="text"
                  placeholder={c.child}
                />

              </div>


              <div className="input-box select-box">

                <ClipboardList size={18} />

                <select defaultValue="">
                  <option value="" disabled>
                    {c.age}
                  </option>

                  <option value="little-angels">
                    {c.groups[0]}
                  </option>

                  <option value="toddlers">
                    {c.groups[1]}
                  </option>

                  <option value="discoveries">
                    {c.groups[2]}
                  </option>

                  <option value="inventors">
                    {c.groups[3]}
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
                placeholder={c.question}
              />

            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="submit-btn"
            >
              {c.submit}
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Admission;
