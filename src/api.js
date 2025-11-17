const API_KEY = "4t9xg84HQs4HEyhmnqxwaW64qNHazPYk5wyQE9SY"; 

export const fetchAPOD = async () => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  return response.json();
};

export const fetchMarsPhotos = async () => {
  const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
  return response.json();
};
