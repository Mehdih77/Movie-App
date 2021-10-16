import { useEffect } from 'react';
import styles from './TrendingNow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetchTrending, getTrending} from '../../Redux/trendingSlice';
import MovieCard from '../Cards/MovieCard/MovieCard';

export default function TrendingNow() {

    const trendingList = useSelector(getTrending);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrending({
            type: "all"
        }));
    }, [dispatch])

    const showTrending = trendingList?.slice(6,12).map(movie => (
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
        <section className="container-fluid">
            <h4 className={styles.trending_movies_title}>TRENDING NOW</h4>
            <div className="row">
                {showTrending}
            </div>
        </section>
    )
}
