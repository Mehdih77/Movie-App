import { useEffect } from 'react';
import styles from './RelatedMovies.module.css';
import MovieCard from "../Cards/MovieCard/MovieCard";
import ResponsiveSlider from "../Sliders/ResponsiveSlider/ResponsiveSlider";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleMovieSimilar, getSingleMovieSimilar } from '../../Redux/singleMovieSlice';

export default function RelatedMovies({movieId}) {

    const movieSimilar = useSelector(getSingleMovieSimilar);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleMovieSimilar({
            id: movieId
        }));
    }, [movieId,dispatch])

    const showRelatedMovies = movieSimilar.slice(0,12).map(movie => (
        <div className='px-1'>
            <MovieCard 
                responsive={false}
                id={movie.id} 
                name={movie.title} 
                img={movie.poster_path} 
                year={movie.release_date.split("-").join().slice(0,4)} 
                genres={"Action"}
            />
        </div>
    ))

    return (
        <> 
        <h4 className={styles.related_movies_title}>RELATED MOVIES</h4>
        <ResponsiveSlider>
            {showRelatedMovies}
        </ResponsiveSlider>
    </>
    )
}
