import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Gallery.css";
import * as galleryService from "../services/galleryService";
import { useLanguage } from "../context/LanguageContext";

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
  const { language } = useLanguage();
  const copy = language === "ar" ? { title: "معرضنا", intro: "استكشفوا لحظات الفرح والتعلّم والإبداع في حضانة كيدز لاند. صُممت بيئتنا لإلهام العقول الصغيرة كل يوم.", loading: "جارٍ تحميل المعرض...", unavailable: "تعذر تحميل صور المعرض.", empty: "لا توجد صور متاحة في المعرض.", more: "عرض المزيد", cats: ["الكل", "الفصول الدراسية", "منطقة اللعب", "الفعاليات"] } : { title: "Our Gallery", intro: "Explore moments of joy, learning, and creativity at Kids Land Nursery. Our environment is designed to inspire little minds every day.", loading: "Loading gallery...", unavailable: "Unable to load gallery images.", empty: "No gallery images available.", more: "Load More", cats: categories };
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
        setError(copy.unavailable);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, [language]);

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
    <main className="gallery-page" dir={language === "ar" ? "rtl" : "ltr"}>

      {/* =====================================
          GALLERY HERO
      ====================================== */}

      <section className="gallery-hero">

        <h1>{copy.title}</h1>

        <p>
          {copy.intro}
        </p>

      </section>


      {/* =====================================
          FILTER BUTTONS
      ====================================== */}

      <section className="gallery-filter-section">

        <div className="gallery-filters">

          {categories.map((category, index) => (
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
              {copy.cats[index]}
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
            {copy.loading}
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
              {copy.empty}
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
              <span>{copy.more}</span>
              <ArrowRight size={27} />
            </button>

          )}

      </section>

    </main>
  );
}

export default Gallery;
