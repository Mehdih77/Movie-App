import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvs, getTvs } from "../../Redux/tvSlice";
import MovieCard from '../Cards/MovieCard/MovieCard';

export default function PopularSeries() {
    const tvsList = useSelector(getTvs);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(
        fetchTvs({
          path: "popular",
        })
      );
    }, [dispatch]);
  
    const showTvsList = tvsList
      .slice(0,6)
      .map((tv) => (
        <MovieCard
          key={tv.id}
          id={tv.id}
          type={"tv"}
          name={tv.name}
          img={tv.poster_path}
          year={tv.first_air_date.split("-").join().slice(0, 4)}
          genres={"5 Season"}
          allInformation={tv}
        />
      ));
  
    return <>{showTvsList}</>;
}
