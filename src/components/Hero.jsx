import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[56vh] flex flex-col justify-center items-center text-center text-white px-5 overflow-hidden cosmic-bg">
      {/* stars are rendered globally; but keep a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold drop-shadow-lg z-10 hero-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Space Explorer
      </motion.h1>

      <motion.p
        className="mt-3 text-lg md:text-xl text-gray-300 max-w-2xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Explore NASA’s daily astronomy highlights, view stunning Mars rover photos, and learn about the planets.
      </motion.p>
    </div>
  );
};

export default Hero;
