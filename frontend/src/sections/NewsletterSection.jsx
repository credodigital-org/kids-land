import { useEffect, useState } from "react";
import { getNewspaperArchive } from "../services/newspaperService";
import "./NewsletterSection.css";

function NewsletterSection() {
  const [latestNewsletter, setLatestNewsletter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewsletter = async () => {
      try {
        const editions = await getNewspaperArchive();

        if (editions && editions.length > 0) {
          setLatestNewsletter(editions[0]);
        }
      } catch (error) {
        console.error("Failed to load newsletter:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNewsletter();
  }, []);

  const handleDownload = () => {
    if (!latestNewsletter?.file) {
      alert("Newsletter is currently unavailable.");
      return;
    }

    window.open(
      latestNewsletter.file,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-container">

        <span className="newsletter-label">
          NEWSLETTER
        </span>

        <div className="newsletter-card">

          <h2 className="newsletter-title">
            Stay Updated
          </h2>

          <p className="newsletter-description">
            Subscribe to our newsletter for the latest news,
            events, and educational tips from Kids Land Nursery.
          </p>

          <button
            type="button"
            className="newsletter-download-button"
            onClick={handleDownload}
            disabled={loading || !latestNewsletter?.file}
          >
            {loading ? "Loading..." : "Download"}
          </button>

        </div>

      </div>
    </section>
  );
}

export default NewsletterSection;