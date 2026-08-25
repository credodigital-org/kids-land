// import Hero from "../components/Hero";
// import "./Home.css"; // (Optional, keep only if you have Home.css in src/pages/)

// function Home() {
//   return (
//     <main className="home-page">
//       <Hero />
//     </main>
//   );
// }

// export default Home;


import React from "react";
import Hero from "../sections/Hero";
import PrincipalMessage from "../sections/PrincipalMessage";
import VisionMission from "../sections/VisionMission";
import AboutSection from "../sections/AboutSection";
import LearningSection from "../sections/LearningSection";
import AdmissionSection from "../sections/AdmissionSection";
import GallerySection from "../sections/GallerySection";
import NewsletterSection from "../sections/NewsletterSection";
import TimingsTestimonials from "../sections/TimingsTestimonials";
import SocialSection from "../sections/SocialSection";
import LocationSection from "../sections/LocationSection";


export default function Home() {
  return (
    <>
      <Hero />

      <PrincipalMessage />
      
      <VisionMission />
      
      <AboutSection />
      
      <LearningSection />
      
      <AdmissionSection />
      
      <NewsletterSection />
      
      <GallerySection />
      
      <TimingsTestimonials />
      
      <SocialSection />
      
      <LocationSection />
    </>
  );
}