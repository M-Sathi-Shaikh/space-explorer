import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-40">
      <nav className="glass-nav px-5 py-3 flex items-center justify-between max-w-6xl mx-auto rounded-b-xl">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-extrabold text-white">🚀 Space Explorer</Link>
          <div className="hidden md:flex items-center gap-3 text-sm text-gray-300">
            <Link to="/" className="hover:text-blue-400 transition">APOD</Link>
            <Link to="/mars" className="hover:text-blue-400 transition">Mars Photos</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/M-Sathi-Shaikh" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
