// import Navbar from "./components/Navbar";
// import PrincipalMessage from "./components/PrincipalMessage";
// import VisionMission from "./components/VisionMission";
// import AboutSection from "./components/AboutSection";
// import LearningSection from "./components/LearningSection";
// import Home from "./pages/Home";
// import AdmissionSection from "./components/AdmissionSection";
// import GallerySection from "./components/GallerySection";
// import NewsletterSection from "./components/NewsletterSection";
// import TimingsTestimonials from "./components/TimingsTestimonials";
// import SocialSection from "./components/SocialSection";
// import LocationSection from "./components/LocationSection";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Home />

//       <PrincipalMessage />

//       <VisionMission />

//       <AboutSection />

//       <LearningSection />

//       <AdmissionSection />

//       <GallerySection />

//       <NewsletterSection />

//       <TimingsTestimonials />

//       <SocialSection />

//       <LocationSection />

//       <Footer />
//     </>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';

// Page Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Learning from "./pages/Learning";
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import HealthSafety from "./pages/Health&Safety";
// import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';

// Admin panel - separate from the public site, gated behind login.
import { AuthProvider } from "./admin/context/AuthContext";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import GalleryPage from "./admin/pages/GalleryPage";
import CalendarPage from "./admin/pages/CalendarPage";
import NewspaperPage from "./admin/pages/NewspaperPage";
import GuidelinesPage from "./admin/pages/GuidelinesPage";
import TestimonialsPage from "./admin/pages/TestimonialsPage";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />

        <Routes>
          {/* Public site - Navbar/Footer via PublicLayout, not shown in admin */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/home" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutUs /></PublicLayout>} />
          <Route path="/learning" element={<PublicLayout><Learning /></PublicLayout>} />
          <Route path="/admission" element={<PublicLayout><Admissions /></PublicLayout>} />
          <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
          <Route path="/Health-Safety" element={<PublicLayout><HealthSafety /></PublicLayout>} />
          {/* <Route path="/programs" element={<Programs />} />
          <Route path="/contactus" element={<ContactUs />} /> */}

          {/* Admin panel */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/gallery" element={<ProtectedRoute><GalleryPage /></ProtectedRoute>} />
          <Route path="/admin/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
          <Route path="/admin/newspaper" element={<ProtectedRoute><NewspaperPage /></ProtectedRoute>} />
          <Route path="/admin/guidelines" element={<ProtectedRoute><GuidelinesPage /></ProtectedRoute>} />
          <Route path="/admin/testimonials" element={<ProtectedRoute><TestimonialsPage /></ProtectedRoute>} />
          {/* Add new admin routes above this line when new sections are added */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}