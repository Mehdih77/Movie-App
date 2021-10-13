import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchDiscoverMovies, getMoviesList } from '../../Redux/discoverSlice';
import MovieCard from '../Cards/MovieCard/MovieCard';
import ResponsiveSlider from "../Sliders/ResponsiveSlider/ResponsiveSlider";
import styles from './PopularMovies.module.css';

export default function PopularMovies() {

    const moviesList = useSelector(getMoviesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscoverMovies({
            path: "popular",
        }));
    }, [dispatch])

    const showMoviesList = moviesList.slice(0,12).map(movie => (
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
        <h4 className={styles.popular_movies_title}>POPULAR MOVIES</h4>
        <ResponsiveSlider>
            {showMoviesList}
        </ResponsiveSlider>
    </>
    )
}