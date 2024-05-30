import "modern-normalize";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MovieCard } from "./pages/MovieCard";
import { Cast } from "./pages/Cast";
import { Reviews } from "./pages/Reviews";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};