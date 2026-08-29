import { useEffect, useState } from "react";
import "./GallerySection.css";

import photographer from "../assets/image 222.png";
import book from "../assets/image 223.png";

import * as galleryService from "../services/galleryService";
import { useLanguage } from "../context/LanguageContext";

function GallerySection() {
  const { language } = useLanguage();
  const c = language === "ar" ? { label: "المعرض", title: "الحياة في كيدز لاند", button: "عرض المعرض كاملًا", alt: "صورة من معرض كيدز لاند" } : { label: "GALLERY", title: "Life at Kids Land", button: "View Full Gallery", alt: "Kids Land gallery photo" };
  const [images, setImages] = useState([]);

  useEffect(() => {
    galleryService
      .getGalleryImages()
      .then(setImages)
      .catch(() => setImages([])); // fail quiet on the public site - section just shows empty
  }, []);

  return (
    <section className="gallery-section" id="gallery" dir={language === "ar" ? "rtl" : "ltr"}>

      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-header">

          <span className="gallery-label">
            {c.label}
          </span>

          <h2 className="gallery-title">
            {c.title}
          </h2>

        </div>


        {/* Gallery Images - pulled from the admin-managed gallery, not hardcoded */}
        <div className="gallery-images">

          {images.slice(0, 4).map((img) => (
            <div className="gallery-image-box" key={img.id}>
              <img
                src={img.image}
                alt={img.title || c.alt}
              />
            </div>
          ))}

        </div>


        {/* Button */}
        <div className="gallery-button-wrapper">

          <a
            href="#gallery"
            className="gallery-button"
          >
            <span>{c.button}</span>

            <span className="gallery-grid-icon">
              ▦
            </span>
          </a>

        </div>

      </div>


      {/* Photographer decoration */}
      <div className="gallery-photographer">
        <img src={photographer} />
      </div>

      <div className="gallery-decoration gallery-decoration-two">
        <img src={book} />
      </div>

    </section>
  );
}

export default GallerySection;
