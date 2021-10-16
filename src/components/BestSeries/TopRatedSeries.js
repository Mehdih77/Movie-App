import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvs, getTvs } from "../../Redux/tvSlice";
import MovieCard from "../Cards/MovieCard/MovieCard";

export default function TopRatedSeries() {
  const tvsList = useSelector(getTvs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchTvs({
        path: "top_rated",
      })
    );
  }, [dispatch]);

  const showTvsList = tvsList
    .slice(0,6)
    .map((tv) => (
      <MovieCard
        type={"tv"}
        id={tv.id}
        key={tv.id}
        name={tv.name}
        img={tv.poster_path}
        year={tv.first_air_date.split("-").join().slice(0, 4)}
        allInformation={tv}
      />
    ));

  return <>{showTvsList}</>;
}
