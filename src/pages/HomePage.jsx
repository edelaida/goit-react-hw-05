//import React from "react";
import MovieList from "../components/MovieList/MovieList.jsx";
import { useState, useEffect } from "react";
import { getTrending } from "../services/Api.js";
import Loader from "../components/Loader/Loader.jsx";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getHomePage() {
      try {
        const data = await getTrending();
        setFilms(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getHomePage();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>oops. the request is not correct.</p>}
      <MovieList films={films} />
    </div>
  );
};

export default HomePage;
