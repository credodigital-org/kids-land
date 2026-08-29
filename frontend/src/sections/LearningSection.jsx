import "./LearningSection.css";

import littleAngels from "../assets/little-angels.png";
import toddlers from "../assets/toddlers.png";
import discoveries from "../assets/discoveries.png";
import inventors from "../assets/inventors.png";
import { useLanguage } from "../context/LanguageContext";

const programs = [
  {
    id: 1,
    title: "Little Angels",
    age: "45 days -11 months",
    description:
      "Nurturing care and gentle introduction to learning",
    image: littleAngels,
    className: "little-angels",
  },
  {
    id: 2,
    title: "Toddlers",
    age: "1 - 2 Years",
    description:
      "Nurturing care and gentle introduction to learning",
    image: toddlers,
    className: "toddlers",
  },
  {
    id: 3,
    title: "Discoveries",
    age: "2 - 3 years",
    description:
      "Nurturing care and gentle introduction to learning",
    image: discoveries,
    className: "discoveries",
  },
  {
    id: 4,
    title: "Inventors",
    age: "3 - 4 years",
    description:
      "Nurturing care and gentle introduction to learning",
    image: inventors,
    className: "inventors",
  },
];

function LearningSection() {
  const { language } = useLanguage();
  const arabicPrograms = [
    { title: "الملائكة الصغار", age: "45 يومًا - 11 شهرًا", description: "بناء الأمان والثقة والعلاقات الإيجابية، ودعم التواصل المبكر والاستكشاف الحسي والنمو البدني." },
    { title: "الأطفال الصغار", age: "1 - 2 سنة", description: "تنمية التواصل والاستقلالية والمهارات الاجتماعية والعاطفية، وتشجيع النمو البدني والاستكشاف والتعلم من خلال اللعب." },
    { title: "المستكشفون", age: "2 - 3 سنوات", description: "تنمية اللغة والمهارات الاجتماعية والاستقلالية، وتشجيع حل المشكلات والاستكشاف والنمو الحركي." },
    { title: "المبتكرون", age: "3 - 4 سنوات", description: "تنمية التواصل ومهارات القراءة والرياضيات المبكرة، وبناء الاستقلالية والإبداع والثقة للاستعداد للروضة الأولى." },
  ];
  const displayedPrograms = language === "ar"
    ? programs.map((program, index) => ({ ...program, ...arabicPrograms[index] }))
    : programs;
  const copy = language === "ar"
    ? { label: "التعلّم", title: "نرعى كل مرحلة من مراحل النمو", subtitle: "نقدم برامج مناسبة لكل عمر، مصممة لدعم رحلة التعلم المبكرة لطفلكم.", more: "اعرف المزيد" }
    : { label: "LEARNING", title: "Nurturing Every Stage", subtitle: "We offer age-appropriate programs designed to support your child's early learning journey.", more: "LEARN MORE" };
  return (
    <section className="learning-section" id="learning" dir={language === "ar" ? "rtl" : "ltr"}>

      <div className="learning-container">

        {/* Section heading */}
        <div className="learning-header">

          <span className="learning-label">
            {copy.label}
          </span>

          <h2 className="learning-title">
            {copy.title}
          </h2>

          <p className="learning-subtitle">
            {copy.subtitle}
          </p>

        </div>


        {/* Program cards */}
        <div className="learning-grid">

          {displayedPrograms.map((program) => (
            <article
              className={`learning-card ${program.className}`}
              key={program.id}
            >

              {/* Image */}
              <div className="learning-image-wrapper">

                <img
                  src={program.image}
                  alt={program.title}
                  className="learning-image"
                />

              </div>


              {/* Content */}
              <div className="learning-card-content">

                <h3>
                  {program.title}
                </h3>

                <p className="learning-age">
                  {program.age}
                </p>

                <p className="learning-description">
                  {program.description}
                </p>

                <a
                  href="#contact"
                  className="learning-more"
                >
                  {copy.more}
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LearningSection;
