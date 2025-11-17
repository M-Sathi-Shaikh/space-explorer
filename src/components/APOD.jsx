import { useEffect, useState } from "react";
import { fetchAPOD } from "../api";

const APOD = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAPOD().then(setData);
  }, []);

  if (!data) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-5 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-sm text-gray-400">{data.date}</p>
      <img src={data.url} alt={data.title} className="w-full rounded-lg mt-3" />
      <p className="mt-3">{data.explanation}</p>
    </div>
  );
};

export default APOD;
