import { useState, useEffect } from "react";
import { getDetails } from "../services/api.js";
import MovieCast from "../components/MovieCast/MovieCast.jsx";
import MovieReviews from "../components/MovieReviews/MovieReviews.jsx";
import { Outlet, useParams } from "react-router-dom";

const MovieDetailsPages = () => {
  const { movie_id } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    //if (query.length === 0) return;

    async function searchDetailsMovie() {
      try {
        setError(false);
        const data = await getDetails(movie_id);
        setDetails(data);
      } catch (error) {
        setError(true);
      }
    }

    searchDetailsMovie();
  }, [movie_id]);

  return (
    <div>
      <div>
        {/* <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.title}
            width={300}
          />
          <Link to={backLinkRef.current} >
							◀ Go back
						</Link>
        </div> */}
        <h1>Title {details.title}</h1>
        <h2>Overview: </h2>
        <p>{details.overview}</p>
        <h2>Genres</h2>
        {/* <p>{details.genres.map(genre => genre.name).join(", ")}</p> */}
      </div>
      <div>
        <h2>Additional information</h2>
        {/* <ul>
						<li>
							<Link to="cast">Cast</Link>
						</li>
						<li>
							<Link to="reviews">Reviews</Link>
						</li>
					</ul> */}
      </div>
      <Outlet />
      {error && <p>oops. the request is not correct.</p>}
      {details && <MovieCast details={details} />}
      {details && <MovieReviews films={details} />}
    </div>
  );
};

export default MovieDetailsPages;
