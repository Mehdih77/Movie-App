import { useEffect } from "react";
import styles from "./RelatedMovies.module.css";
import MovieCard from "../Cards/MovieCard/MovieCard";
import ResponsiveSlider from "../Sliders/ResponsiveSlider/ResponsiveSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleMovieSimilar,
  getSingleMovieSimilar,
} from "../../Redux/singleMovieSlice";
import { fetchSingleTvSimilar, getSingleTvSimilar } from "../../Redux/singleTvSlice";

export default function RelatedMovies({ movieId, type }) {
  const movieSimilar = useSelector(getSingleMovieSimilar);
  const tvSimilar = useSelector(getSingleTvSimilar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "movie") {
      dispatch(
        fetchSingleMovieSimilar({
          id: movieId,
        })
      );
    } else {
      dispatch(
        fetchSingleTvSimilar({
          id: movieId,
        })
      );
    }
  }, [movieId, dispatch]);

  const x = type === "movie" ? movieSimilar : tvSimilar;

  const showRelatedMovies = x.slice(0, 12).map((movie) => (
    <div className="px-1">
      <MovieCard
        responsive={false}
        id={movie.id}
        name={movie.title}
        img={movie.poster_path}
        year={movie.release_date?.split("-").join().slice(0, 4) || movie.first_air_date?.split("-").join().slice(0, 4)}
        genres={"Action"}
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
