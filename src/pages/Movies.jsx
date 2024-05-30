import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { apiCall } from "../functions/apiCalls";
import css from "./Movies.module.css";

export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValueLocked, setInputValueLocked] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValueLocked(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const querySearchedMovies = `https://api.themoviedb.org/3/search/movie?query=${inputValueLocked}&include_adult=false&language=en-US&page=1`;
    const promise = apiCall(querySearchedMovies);
    promise
      .then((data) => {
        setSearchedMovies(data.results);
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [inputValueLocked]);

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputbox}>
            <input
            className={css.input}
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="type movie to search"
            />
        </div>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {error === null ? (
        !isLoading && (
          <ul className={css.list}>
            {searchedMovies.map((movie) => (
              <li className={css.item} key={movie.id}>
                <Link className={css.list} to={`/goit-react-hw-05-movies/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};