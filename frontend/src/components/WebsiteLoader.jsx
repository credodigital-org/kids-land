import React, { useEffect, useState } from "react";
import "./WebsiteLoader.css";
import logo from "../assets/logo.png";

function WebsiteLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setHide(true);

          setTimeout(() => {
            setLoading(false);
          }, 600);
        }, 300);
      }

      setProgress(value);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`website-loader ${hide ? "loader-hide" : ""}`}>

      <div className="loader-content">

        {/* Animated Logo */}
        <div className="loader-logo">
          <img src={logo} alt="Kids Land Nursery" />
        </div>

        {/* Spinner */}
        <div className="loader-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Loading Text */}
        <h2>Kids Land Nursery</h2>

        <p>Loading your little world...</p>

        {/* Progress */}
        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <span className="loader-percent">
          {progress}%
        </span>

      </div>

      {/* Decorative bubbles */}
      <span className="loader-bubble bubble-one"></span>
      <span className="loader-bubble bubble-two"></span>
      <span className="loader-bubble bubble-three"></span>
      <span className="loader-bubble bubble-four"></span>

    </div>
  );
}

export default WebsiteLoader;