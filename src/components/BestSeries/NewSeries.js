import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvs, getTvs } from "../../Redux/tvSlice";
import MovieCard from "../Cards/MovieCard/MovieCard";

export default function NewSeries() {
  const tvsList = useSelector(getTvs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchTvs({
        path: "airing_today",
      })
    );
  }, [dispatch]);

  const showTvsList = tvsList.slice(6,12).map((tv) => (
    <MovieCard
      key={tv.id}
      id={tv.id}
      type={"tv"}
      name={tv.name}
      img={tv.poster_path}
      year={tv.first_air_date.split("-").join().slice(0, 4)}
      allInformation={tv}
    />
  ));

  return <>{showTvsList}</>;
}
