import { useState, useEffect } from "react";
import { getDetails } from "../services/api.js";
// import MovieCast from "../components/MovieCast/MovieCast.jsx";
// import MovieReviews from "../components/MovieReviews/MovieReviews.jsx";
import { useParams } from "react-router-dom";

const MovieDetailsPages = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);

  console.log(movieId);
  useEffect(() => {
    console.log(movieId);
    async function searchDetailsMovie() {
      try {
        setError(false);
        const data = await getDetails(movieId);
        setDetails(data);
        console.log(data);
      } catch (error) {
        setError(true);
      }
    }

    searchDetailsMovie();
  }, [movieId]);

  return (
    <div>
      <h1>Title {details.title}</h1>
      <h2>Overview: </h2>
      <p>{details.overview}</p>
      <h2>Genres</h2>
      {error && <p>oops. the request is not correct.</p>}
    </div>
  );
};

export default MovieDetailsPages;
