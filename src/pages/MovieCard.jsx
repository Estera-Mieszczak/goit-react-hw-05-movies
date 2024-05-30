import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Addons } from "../components/Addons";
import { MovieInformation } from "../components/MovieInformation";
import { apiCall } from "../functions/apiCalls";
import css from "./MovieCard.module.css";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const queryMovieDetails = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const promise = apiCall(queryMovieDetails);
    promise
      .then((data) => setMovieDetails(data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {error === null ? (
        !isLoading && (
          <div>
            <button className={css.button}>
              <Link className={css.buttonlink} to={location?.state?.from ?? "/goit-react-hw-05-movies/"}>Go back</Link>
            </button>
            <MovieInformation movieDetails={movieDetails} />
            <Addons />
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        )
      ) : (
        <p>{error.message}</p>
      )}
    </>
  );
};