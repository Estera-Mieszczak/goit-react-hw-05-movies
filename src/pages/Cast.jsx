import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCall } from "../functions/apiCalls";
import css from "./Cast.module.css";

export const Cast = () => {
  const [castData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const queryCastData = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const promise = apiCall(queryCastData);
    promise
      .then((data) => {
        setCastData(data.cast);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {error === null ? (
        !isLoading && (
          <ul className={css.list}>
            {castData.map((cast) => (
              <li className={css.item} key={cast.id}>
                <img
                  alt=""
                  className={css.image}
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`}
                />
                <p className={css.name}>{cast.name}</p>
                <p className={css.paragraph}>Character: {cast.character}</p>
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