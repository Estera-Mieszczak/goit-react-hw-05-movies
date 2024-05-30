import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { apiCall } from "../functions/apiCalls";
import css from "./Home.module.css";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryTrendingMovies =
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const promise = apiCall(queryTrendingMovies);
    promise
      .then((data) => setTrendingMovies(data.results))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {error === null ? (
        <div>
          <h1 className={css.header}>Trending today</h1>
          {!isLoading && <MoviesList trendingMovies={trendingMovies} />}
        </div>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};