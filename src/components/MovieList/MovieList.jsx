//import { Link } from "react-router-dom";

const MovieList = ({ films }) => {
  return (
    <ul>
      {" "}
      MovieList {films}
      {/* {films.map((movie) => {
        return (
          <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>   
          </li>
        );
      })} */}
    </ul>
  );
};

export default MovieList;
