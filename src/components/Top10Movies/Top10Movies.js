import { useEffect } from 'react';
import styles from './Top10Movies.module.css';
import { fetchDiscoverMovies, getMoviesList } from '../../Redux/discoverSlice';
import { useDispatch, useSelector } from 'react-redux';
import CurrentSlider from '../Sliders/CurrentSlider/CurrentSlider';
import OverlayCard from '../Cards/OverlayCard/OverlayCard';

export default function Top10Movies() {

    const moviesList = useSelector(getMoviesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscoverMovies({
            path: "top_rated",
        }));
    }, [dispatch])

    const showMoviesList = moviesList.slice(6,12).map(movie => (
        <OverlayCard
            key={movie.id}
            id={movie.id}
            img={movie.backdrop_path} 
            name={movie.title} 
            detail={movie.overview}
            allInformation={movie} />
    ))

    return (
        <>
            <h4 className={styles.top10_movies_title}>TOP10 MOVIES</h4>
            <CurrentSlider>
                {showMoviesList}
            </CurrentSlider>
        </>
    )
}
