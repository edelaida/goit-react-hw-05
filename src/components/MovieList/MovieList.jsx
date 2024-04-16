import { Link } from "react-router-dom";

const MovieList = ({ films }) => {
  //const location = useLocation;
  return (
    <ul>
      {films.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
