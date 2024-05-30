import { Link } from "react-router-dom";
import css from "./Addons.module.css";

export const Addons = () => {
  return (
    <div className={css.headerbox}>
      <h1 className={css.header}>Additional Information<span className={css.headerline}>|</span> </h1>
      <nav className={css.navigation}>
        <Link className={css.link} to="cast">Cast</Link>
        <Link className={css.link} to="reviews">Reviews</Link>
      </nav>
    </div>
  );
};