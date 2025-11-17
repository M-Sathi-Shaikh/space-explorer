import { motion } from "framer-motion";

const planets = [
  { name: "Mercury", desc: "Smallest, closest to Sun.", radius: "2,440 km" },
  { name: "Venus", desc: "Thick toxic atmosphere.", radius: "6,052 km" },
  { name: "Earth", desc: "Our home.", radius: "6,371 km" },
  { name: "Mars", desc: "The Red Planet.", radius: "3,390 km" },
  { name: "Jupiter", desc: "Gas giant, huge storms.", radius: "69,911 km" },
  { name: "Saturn", desc: "Ringed gas giant.", radius: "58,232 km" },
  { name: "Uranus", desc: "Ice giant, tilted axis.", radius: "25,362 km" },
  { name: "Neptune", desc: "Farthest ice giant.", radius: "24,622 km" }
];

const PlanetCards = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold mb-4 text-white">Planets</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {planets.map((p, i) => (
          <motion.div
            key={p.name}
            className="bg-gray-800 p-4 rounded-xl neon-border border-gray-700 shadow-md"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 * i, duration: 0.5 }}
          >
            <div className="text-lg font-semibold text-white">{p.name}</div>
            <div className="text-sm text-gray-300 mt-2">{p.desc}</div>
            <div className="text-xs text-gray-400 mt-3">Radius: {p.radius}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlanetCards;
