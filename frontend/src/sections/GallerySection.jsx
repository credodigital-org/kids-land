import { useEffect, useState } from "react";
import "./GallerySection.css";

import photographer from "../assets/image 222.png";
import book from "../assets/image 223.png";

import * as galleryService from "../services/galleryService";

function GallerySection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    galleryService
      .getGalleryImages()
      .then(setImages)
      .catch(() => setImages([])); // fail quiet on the public site - section just shows empty
  }, []);

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-header">

          <span className="gallery-label">
            GALLERY
          </span>

          <h2 className="gallery-title">
            Life at Kids Land
          </h2>

        </div>


        {/* Gallery Images - pulled from the admin-managed gallery, not hardcoded */}
        <div className="gallery-images">

          {images.slice(0, 4).map((img) => (
            <div className="gallery-image-box" key={img.id}>
              <img
                src={img.image}
                alt={img.title || "Kids Land gallery photo"}
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
            <span>View Full Gallery</span>

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
