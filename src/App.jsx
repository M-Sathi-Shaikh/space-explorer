import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import APOD from "./components/APOD";
import MarsPhotos from "./components/MarsPhotos";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-5 bg-gray-800 flex justify-center space-x-4">
          <Link className="text-lg font-bold" to="/">APOD</Link>
          <Link className="text-lg font-bold" to="/mars">Mars Photos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<APOD />} />
          <Route path="/mars" element={<MarsPhotos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
