import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieCast.module.css";
import { getCredits } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [moviecast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await getCredits(movieId);
        console.log(data.cast);
        setMovieCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <ul>
      {moviecast.map((cast) => {
        return (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="120"
            />
            <p className={css.cast_name}>{cast.name}</p>
            <p>Character {cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
