import { useState, useEffect, useRef } from "react";

import MovieCast from "../components/MovieCast/MovieCast.jsx";
import MovieReviews from "../components/MovieReviews/MovieReviews.jsx";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getDetails } from "../services/api.js";
import css from "./MovieDetailsPages.module.css";
//import css from "../components/Navigation/Navigation.module.css";

const MovieDetailsPages = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function searchDetailsMovie() {
      try {
        setError(false);
        const data = await getDetails(movieId);
        setDetails(data);
      } catch (error) {
        setError(true);
      }
    }
    searchDetailsMovie();
  }, [movieId]);

  return (
    <div className={css.page}>
      <Link to={backLinkRef.current}>◀ Go back</Link>
      <div className={css.list}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title}
          width={200}
        />
        <div className={css.detal}>
          <h1>Title {details.title}</h1>
          <h2>Overview: </h2>
          <p>{details.overview}</p>
          <h2>Genres</h2>
          <p>{details.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className={css.info}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        {error && <p>oops. the request is not correct.</p>}
        <Routes>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPages;
