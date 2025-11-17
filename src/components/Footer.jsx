import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Project Info */}
        <div>
          <h2 className="text-3xl font-bold text-white">🚀 Space Explorer</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A NASA-powered web experience that brings astronomy, planets, and Mars rover missions 
            right to your screen.  
            <br /><br />
            Built with ❤️ using ReactJS, Tailwind CSS, and NASA Open APIs.
          </p>
        </div>

        {/* Developer Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">👨‍💻 Developer</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Developed by <span className="text-white font-medium">Muhammad Sathi</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mt-4">

            <a href="https://www.facebook.com/shaikh.sathi.33" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-white transition cursor-pointer" />
            </a>

            <a href="https://www.instagram.com/shaikh.sathi/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/in/muhammad-sathi-shaikh-b495322a7/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white transition cursor-pointer" />
            </a>

            <a href="https://github.com/M-Sathi-Shaikh" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white transition cursor-pointer" />
            </a>

            

          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-14 border-t border-gray-700 pt-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Space Explorer — Built by Muhammad Sathi.
      </div>
    </footer>
  );
};

export default Footer;
