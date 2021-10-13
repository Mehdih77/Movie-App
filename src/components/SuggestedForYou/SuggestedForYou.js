import styles from './SuggestedForYou.module.css';
import ResponsiveSlider from '../Sliders/ResponsiveSlider/ResponsiveSlider';
import MovieCard from '../Cards/MovieCard/MovieCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchDiscoverMovies, getMoviesList} from '../../Redux/discoverSlice';

export default function SuggestedForYou() {

    const moviesList = useSelector(getMoviesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscoverMovies({
            path: "top_rated",
        }));
    }, [dispatch])

    const showMoviesList = moviesList.slice(8,20).map(movie => (
        <div className='px-1'>
            <MovieCard 
                responsive={false}
                id={movie.id} 
                name={movie.title} 
                img={movie.poster_path} 
                year={movie.release_date.split("-").join().slice(0,4)} 
                age={'+18'} 
                genres={"Action"}  />
        </div>
    ))

    return (
        <> 
        <h4 className={styles.suggested_for_you_title}>SUGGESTED FOR YOU</h4>
        <ResponsiveSlider>
            {showMoviesList}
        </ResponsiveSlider>
    </>
    )
}
