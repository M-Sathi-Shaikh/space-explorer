import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import APOD from "./components/APOD";
import MarsPhotos from "./components/MarsPhotos";
import Navbar from "./components/Navbar";
import FloatingStars from "./components/FlotingStarts";
import Footer from "./components/Footer";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<APOD />} />
        <Route path="/mars" element={<MarsPhotos />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-white flex flex-col relative cosmic-bg">
        <FloatingStars count={28} />
        
        <Navbar />

        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
