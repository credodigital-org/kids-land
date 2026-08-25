// Wraps every public page with Navbar + Footer
// Usage: put this around the page content in each page file (Home.jsx, About.jsx, etc.)

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;
