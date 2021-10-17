import { useEffect } from "react";
import styles from "./RelatedMovies.module.css";
import MovieCard from "../Cards/MovieCard/MovieCard";
import ResponsiveSlider from "../Sliders/ResponsiveSlider/ResponsiveSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleMovieSimilar,
  getSingleMovieSimilar,
} from "../../Redux/singleMovieSlice";
import {
  fetchSingleTvSimilar,
  getSingleTvSimilar,
} from "../../Redux/singleTvSlice";
import {
  getSinglePersonSimilar,
  fetchPersonSimilar,
} from "../../Redux/personSlice";

export default function RelatedMovies({ Id, type }) {
  const movieSimilar = useSelector(getSingleMovieSimilar);
  const tvSimilar = useSelector(getSingleTvSimilar);
  const personSimilar = useSelector(getSinglePersonSimilar);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (type) {
      case "movie":
        dispatch(
          fetchSingleMovieSimilar({
            id: Id,
          })
        );
        break;
      case "tv":
        dispatch(
          fetchSingleTvSimilar({
            id: Id,
          })
        );
        break;
      case "person":
        dispatch(
          fetchPersonSimilar({
            id: Id,
          })
        );
        break;
      default:
        break;
    }
  }, [Id, type, dispatch]);

  const similarType =
    (type === "movie" && movieSimilar) ||
    (type === "tv" && tvSimilar) ||
    (type === "person" && personSimilar);

  const showRelatedMovies = similarType.slice(0, 12).map((movie) => (
    <div className="px-1">
      <MovieCard
        responsive={false}
        id={movie.id}
        key={movie.id}
        name={movie.title}
        img={movie.poster_path}
        year={
          movie.release_date?.split("-").join().slice(0, 4) ||
          movie.first_air_date?.split("-").join().slice(0, 4)
        }
        genres={"Action"}
        allInformation={movie}
      />
    </div>
  ));

  return (
    <>
      <h4 className={styles.related_movies_title}>RELATED MOVIES</h4>
      <ResponsiveSlider>{showRelatedMovies}</ResponsiveSlider>
    </>
  );
}
