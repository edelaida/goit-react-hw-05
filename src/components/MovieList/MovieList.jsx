import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.block}>
      {films.map((movie) => {
        return (
          <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
