import PropTypes from "prop-types";
import css from "./MovieInformation.module.css";

export const MovieInformation = ({ movieDetails }) => {
  return (
    <div className={css.container} key={movieDetails.imdb_id}>
      <div className={css.imagebox}>
            <img
              alt=""
              className={css.image}
              src={`https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`}
            />
      </div>
      <div className={css.description}>
        <h1 className={css.title}>{movieDetails.title}</h1>
        <p className={css.filmdataname}>User score: <span className={css.filmdata}>{movieDetails.vote_average}</span></p>
        <p className={css.filmdataname}>Overview: <span className={css.filmdata}>{movieDetails.overview}</span></p>
        {movieDetails.genres.map((genre) => (
          <p key={genre.id} className={css.filmdata}>
            <span className={css.filmdataname}>Genres:</span> {genre.name}
          </p>
        ))}
      </div>
    </div>
  );
};

MovieInformation.propTypes = {
  movieDetails: PropTypes.object,
};