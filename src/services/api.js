import axios from "axios";

const API_KEY = "ef60607e393bd10347238ac4e8aab00c";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjYwNjA3ZTM5M2JkMTAzNDcyMzhhYzRlOGFhYjAwYyIsInN1YiI6IjY2MTRmNmYyOGVlMGE5MDE2NWE0NWJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V3k90YL5GDLG9k0oSuMIe0xi4_8MNXBx7kIwCVHpKOA",
};
axios.defaults.params = {
  language: "en-US",
  api_Key: API_KEY,
};

// const instance = axios.create({
//   baseURL: baseURL,
//   params: API_KEY,
// });

export const getTrending = async () => {
  try {
    const { data } = await axios.get("trending/movie/day");
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// export const searchMovie = async (query) => {
//   try {
//     const { data } = await axios.get(`/search/movie?query=${movie}`);
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     throw error;
//   }
// };

// export const getDetails = async (movie_id) => {
//   const { data } = await axios.get(`movie/${movie_id}`);
//   try {
//     const { data } = await instance.get(`trending/movie/day`);
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     throw error;
//   }
// };

// export const getCredits = async (movie_id) => {
//   const { data } = await axios.get(`/movie/${movie_id}/credits`);
//   try {
//     const { data } = await instance.get(`trending/movie/day`);
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     throw error;
//   }
// };

// export const getReviews = async (movie_id) => {
//   const { data } = await axios.get(`movie/${movie_id}/reviews`);
//   try {
//     const { data } = await instance.get(`trending/movie/day`);
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     throw error;
//   }
// };
