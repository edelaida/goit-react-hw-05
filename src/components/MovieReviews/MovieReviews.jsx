import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import { getReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [moviereviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await getReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  if (moviereviews.length !== 0) {
    return (
      <ul className={css.review_list}>
        {moviereviews.map((review) => (
          <li key={review.id}>
            <h3 className={css.author}>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>Not found</div>;
  }
};

export default MovieReviews;
