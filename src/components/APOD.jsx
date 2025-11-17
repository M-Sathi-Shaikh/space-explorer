import { useEffect, useState } from "react";
import { fetchAPOD } from "../api";
import Hero from "./Hero";
import PlanetCards from "./PlanetCards";
import AstronautLoader from "./AstronautLoader";
import { motion } from "framer-motion";
import ScrollTop from "./ScrollTop";
import FloatingStars from "./FlotingStars";

const APOD = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAPOD().then(setData);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Stars background */}
      <FloatingStars count={36} />
      

      {/* Hero */}
      <Hero />

      {/* APOD card */}
      {!data ? (
        <AstronautLoader />
      ) : (
        <motion.div
          className="max-w-3xl mx-auto p-5 mt-8 bg-gray-800 text-white rounded-xl shadow-xl neon-border border-gray-700"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold">{data.title}</h2>
          <p className="text-sm text-gray-400">{data.date}</p>

          <motion.img
            src={data.url}
            alt={data.title}
            className="w-full rounded-lg mt-4 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          />

          <p className="mt-4 leading-relaxed text-gray-300">
            {data.explanation}
          </p>
        </motion.div>
      )}

      {/* Planet cards under APOD */}
      <PlanetCards />

      <ScrollTop />
    </div>
  );
};

export default APOD;
