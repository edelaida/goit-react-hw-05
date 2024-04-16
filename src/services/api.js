import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjYwNjA3ZTM5M2JkMTAzNDcyMzhhYzRlOGFhYjAwYyIsInN1YiI6IjY2MTRmNmYyOGVlMGE5MDE2NWE0NWJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V3k90YL5GDLG9k0oSuMIe0xi4_8MNXBx7kIwCVHpKOA",
};
axios.defaults.params = {
  language: "en-US",
};

export const getTrending = async () => {
  try {
    const { data } = await axios.get("trending/movie/day");
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const searchMovie = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const getDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const getCredits = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const getReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};
