import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Gallery.css";
import * as galleryService from "../services/galleryService";

const categories = [
  "All",
  "Classrooms",
  "Playground",
  "Events",
];

const shapes = [
  "shape-one",
  "shape-two",
  "shape-three",
  "shape-four",
  "shape-five",
  "shape-six",
  "shape-seven",
  "shape-eight",
  "shape-nine",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [galleryItems, setGalleryItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================
  // LOAD GALLERY FROM BACKEND
  // =====================================

  useEffect(() => {
    async function loadGallery() {
      try {
        setLoading(true);
        setError("");

        const data = await galleryService.getGalleryImages();

        setGalleryItems(data);
      } catch (err) {
        console.error("Failed to load gallery:", err);
        setError("Unable to load gallery images.");
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  // =====================================
  // FILTER BY CATEGORY
  // =====================================

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  // =====================================
  // VISIBLE IMAGES
  // =====================================

  const visibleItems = filteredItems.slice(
    0,
    visibleCount
  );

  // =====================================
  // CATEGORY CHANGE
  // =====================================

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    // Start again from first 9 images
    setVisibleCount(9);
  };

  // =====================================
  // LOAD MORE
  // =====================================

  const handleLoadMore = () => {
    setVisibleCount((previous) => previous + 9);
  };

  return (
    <main className="gallery-page">

      {/* =====================================
          GALLERY HERO
      ====================================== */}

      <section className="gallery-hero">

        <h1>Our Gallery</h1>

        <p>
          Explore moments of joy, learning, and creativity at
          Kids Land Nursery. Our
          <br className="desktop-break" />
          environment is designed to inspire little minds
          every day.
        </p>

      </section>


      {/* =====================================
          FILTER BUTTONS
      ====================================== */}

      <section className="gallery-filter-section">

        <div className="gallery-filters">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() =>
                handleCategoryChange(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

      </section>


      {/* =====================================
          GALLERY GRID
      ====================================== */}

      <section className="gallery-grid-section">

        {/* Loading */}

        {loading && (
          <div className="gallery-status">
            Loading gallery...
          </div>
        )}


        {/* Error */}

        {!loading && error && (
          <div className="gallery-status">
            {error}
          </div>
        )}


        {/* No images */}

        {!loading &&
          !error &&
          filteredItems.length === 0 && (
            <div className="gallery-status">
              No gallery images available.
            </div>
          )}


        {/* Images */}

        {!loading &&
          !error &&
          filteredItems.length > 0 && (

            <div className="gallery-grid">

              {visibleItems.map((item, index) => (

                <div
                  key={item.id}
                  className={`gallery-item ${
                    shapes[index % shapes.length]
                  }`}
                >

                  <img
                    src={item.image}
                    alt={
                      item.title ||
                      `Kids Land Nursery ${item.category}`
                    }
                    loading="lazy"
                  />

                </div>

              ))}

            </div>

          )}


        {/* =====================================
            LOAD MORE
        ====================================== */}

        {!loading &&
          !error &&
          visibleCount < filteredItems.length && (

            <button
              type="button"
              className="load-more-btn"
              onClick={handleLoadMore}
            >
              <span>Load More</span>
              <ArrowRight size={27} />
            </button>

          )}

      </section>

    </main>
  );
}

export default Gallery;