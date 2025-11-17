import { useEffect, useState } from "react";
import { fetchMarsPhotos } from "../api";

const MarsPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchMarsPhotos().then((data) => setPhotos(data.photos.slice(0, 6))); 
  }, []);

  if (!photos.length) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
      {photos.map((photo) => (
        <div key={photo.id} className="bg-gray-800 p-3 rounded-lg">
          <img src={photo.img_src} alt="Mars Rover" className="w-full rounded-lg" />
          <p className="text-white text-sm mt-2">{photo.earth_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MarsPhotos;
