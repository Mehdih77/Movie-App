import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchTrending , getTrending} from '../../Redux/trendingSlice';
import MovieCard from '../Cards/MovieCard/MovieCard';

export default function Movies() {
    const trendingList = useSelector(getTrending);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrending({
            type: "movie"
        }));
    }, [dispatch])

    const showTrending = trendingList?.slice(0,6).map(movie => (
        <MovieCard
            key={movie.id}
            id={movie.id}
            type={movie.media_type}
            title={movie.title}
            name={movie.name}
            img={movie.poster_path} 
            year={movie.release_date?.split("-").join().slice(0,4)}
            firstAirDate={movie.first_air_date?.split("-").join().slice(0,4)}
            age={'+16'} 
            genres={"Drama"}
            allInformation={movie} />
    ))


    return (
        <>
            {showTrending}
        </>
    )
}
