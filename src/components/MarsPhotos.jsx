import { useEffect, useState } from "react";
import { fetchMarsPhotos } from "../api";
import AstronautLoader from "./AstronautLoader";
import { motion } from "framer-motion";

const MarsPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchMarsPhotos().then((data) => setPhotos(data.photos.slice(0, 12)));
  }, []);

  if (!photos.length) return <AstronautLoader />;

  return (
    <div className="max-w-6xl mx-auto p-5 mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Mars Rover Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="bg-gray-800 p-3 rounded-xl neon-border border-gray-700 shadow-md hover:scale-105 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
          >
            <img src={photo.img_src} alt="Mars Rover" className="w-full rounded-lg" />
            <p className="text-white text-sm mt-2">{photo.earth_date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarsPhotos;
