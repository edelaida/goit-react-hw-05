import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import css from "./MovieCast.module.css";
import { getCredits } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [moviecast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await getCredits(movieId);
        console.log(data);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <p>getCredits</p>

      <ul>
        {moviecast.map((cast) => (
          <li key={cast.id}>
            <p>{cast.name}</p>
            <p>Character {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

{
  /* <ul className={css.cast_list}>
        {casts.map((cast) => {
          return (
            <li key={cast.id} className={css.cast_item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                width="200"
                height="300"
              />
              <p className={css.cast_name}>{cast.name}</p>
              <p>Character {cast.character}</p>
            </li>
          );
        })}
      </ul> */
}
