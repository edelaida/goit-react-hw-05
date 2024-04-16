import MovieList from "../components/MovieList/MovieList.jsx";
import { useState, useEffect } from "react";
import { searchMovie } from "../services/api.js";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Loader from "../components/Loader/Loader.jsx";

const MoviesPages = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length === 0) return;

    async function searchNewMovie() {
      try {
        setError(false);
        setLoading(true);
        const data = await searchMovie(query);
        setFilms((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    searchNewMovie();
  }, [query]);

  const onSearchBar = (film) => {
    setQuery(film);
    setFilms([]);
  };

  return (
    <div>
      <SearchBar onSearchBar={onSearchBar} />
      {loading && <Loader />}
      {error && <p>oops. the request is not correct.</p>}
      {films && <MovieList films={films} />}
    </div>
  );
};

export default MoviesPages;
