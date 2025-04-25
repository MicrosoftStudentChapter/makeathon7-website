
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import AboutUs from "./pages/AboutUs";
import Tracks from "./pages/Tracks";
import Sponsors from "./pages/Sponsors";
import AppPolicy from "./pages/AppPolicy";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";


function AppContent() {
  return (

    <div className="app-container">
      <HamburgerMenu />
      <div className="content-container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Navigate to="/" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tracks" element={<Tracks />} /> 
          {/* Redirect /sponsors to the home page */}
          <Route path="/sponsors" element={<Navigate to="/" />} />
          <Route path="/policy" element={<AppPolicy />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
