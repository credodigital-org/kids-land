import "./LocationSection.css";
// import map from "../assets/location-map.png";
import location from "../assets/Background (4).png";
import call from "../assets/Background (5).png";
// import loc from "../assets/Background (6).png";
import open from "../assets/Container (2).png";

function LocationSection() {
  const openGoogleMaps = () => {
    window.open(
      " https://maps.app.goo.gl/PPyuBRYmgXsog6Te8?g_st=iw",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="location-section" id="location">

      <div className="location-container">

        {/* Heading */}
        <h2 className="location-title">
          Our Location
        </h2>


        <div className="location-content">

          {/* =================================
              MAP
          ================================= */}
          <div className="location-map">

            <div className="map-placeholder">

              <iframe
                src="https://www.google.com/maps?q=https://maps.app.goo.gl/PPyuBRYmgXsog6Te8?g_st=iw&output=embed"
                className="google-map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Kids Land Nursery Location"
              ></iframe>

            </div>

          </div>


          {/* =================================
              LOCATION DETAILS
          ================================= */}
          <div className="location-details">

            {/* Address */}
            <div className="location-item">

              <div className="location-item-icon address-icon">
                <img src={location} />
              </div>

              <div className="location-item-content">

                <h3>
                  Physical Address
                </h3>

                <p>
                  123 Learning Lane, Playtown, PT 56789
                </p>

              </div>

            </div>


            {/* Phone */}
            <div className="location-item">

              <div className="location-item-icon phone-icon">
                <img src={call} />
              </div>

              <div className="location-item-content">

                <h3>
                  Phone Number
                </h3>

                <p>
                  0503222033
                </p>

              </div>

            </div>


            {/* Google Maps */}
            <button
              className="google-map-button"
              onClick={openGoogleMaps}
            >
              <span className="map-button-icon">
                <img src={open}/>
              </span>

              Open in Google Maps
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LocationSection;