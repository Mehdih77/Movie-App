import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleMovie, getSingleMovie } from '../../Redux/singleMovieSlice';
import styles from './SingleMoviePage.module.css';
import MoviePageCard from '../../components/Cards/SinglePageCard/MoviePageCard/MoviePageCard';
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies';

export default function SingleMoviePage() {

    const {id} = useParams();
    const movieData = useSelector(getSingleMovie);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleMovie({
            id
        }));
    }, [id,dispatch]);

    const style = { 
        backgroundImage: `linear-gradient(
            to right,
            rgb(12, 21, 26),
            rgba(0, 0, 0, 0.69)
        ),
        url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`
    };


    return (
        <>
            {id && 
            <>
                <div style={style} className={styles.parallax}></div>
                <section className='container-fluid'>
                    <div className="row my-5">
                        <MoviePageCard movieId={id} />
                    </div>
                    <RelatedMovies type={'movie'} movieId={id} />
                </section>
            </>}
        </>
    )
}
