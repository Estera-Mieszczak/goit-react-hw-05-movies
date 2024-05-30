import PropTypes from "prop-types";
import { MoviesListItem } from "./MovieListItem";
import css from "./MoviesList.module.css";

export const MoviesList = ({ trendingMovies }) => (
  <ul className={css.list}>
    {trendingMovies.map((movie) => (
      <MoviesListItem key={movie.id} movie={movie} />
    ))}
  </ul>
);

MoviesList.propTypes = {
  trendingMovies: PropTypes.array,
};