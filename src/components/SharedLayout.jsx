import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.navigation}>
          <Link className={css.link} to="/goit-react-hw-05-movies">
            Home
          </Link>
          <Link className={css.link} to="/goit-react-hw-05-movies/movies">
            Movies
          </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};