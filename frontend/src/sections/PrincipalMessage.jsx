import { Volume2 } from "lucide-react";
import principalImage from "../assets/principal.png";
import "./PrincipalMessage.css";
import cloud from "../assets/cloud.png";
import sunImage from "../assets/sun.png";
import rain from "../assets/rain.png";
import { useLanguage } from "../context/LanguageContext";

function PrincipalMessage() {
  const { language, t } = useLanguage();

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
          <h2 className="principal-title" dir={language === "ar" ? "rtl" : "ltr"}>
            {t("principal.title")}
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
          <div className="principal-text" dir={language === "ar" ? "rtl" : "ltr"}>

            <p className="dear-parents">
              {t("principal.dearParents")}
            </p>

            <p className="purple-message">
              {t("principal.p1")}
            </p>

            <p>
              {t("principal.p2")}
            </p>

            <p>
              {t("principal.p3")}
            </p>

            <p>
              {t("principal.p4")}
            </p>

            <p>
              {t("principal.p5")}
            </p>

            <p className="principal-signature">
              {t("principal.signature")}
            </p>

          </div>


          {/* Arabic Button */}
          {/* <button className="arabic-button">
            اقرأ بالعربية
          </button> */}

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