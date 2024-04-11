//import React from "react";
import MovieList from "../components/MovieList/MovieList.jsx";
import { getTrending } from "../services/api.js";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getHomePage() {
      try {
        const data = await getTrending();
        setFilms(data.results);
        console.log(data.results);
      } catch {
        console.log("error");
      }
    }
    getHomePage();
  }, []);

  return (
    <div>
      <p>Home page</p>
      <MovieList films={films} />
    </div>
  );
};

export default HomePage;
