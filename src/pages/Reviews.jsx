import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCall } from "../functions/apiCalls";
import css from "./Reviews.module.css";

export const Reviews = () => {
  const [reviewsData, setCastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const reviewsData = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    const promise = apiCall(reviewsData);
    promise
      .then((data) => {
        setCastData(data.results);
        console.log(data.results);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {error === null ? (
        !isLoading && (
          <ul className={css.list}>
            {reviewsData.map((review) => (
              <li className={css.item} key={review.id}>
                <p className={css.paragraph}>{review.author}</p>
                <article className={css.article}>{review.content}</article>
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