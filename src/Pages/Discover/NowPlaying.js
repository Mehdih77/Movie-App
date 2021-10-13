import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Cards/Card/Card';
import { fetchDiscoverMovies, getMoviesList } from '../../Redux/discoverSlice';
import styles from './Discover.module.css';

export default function NowPlaying() {

    const moviesList = useSelector(getMoviesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscoverMovies({
            path: "now_playing",
            pageNumber: 2
        }));
    }, [])


    const showMoviesList = moviesList.map(movie => (
        <div className="col-6 col-md-4 col-xl-2">
            <Card img={movie.poster_path}
                  name={movie.title} 
                  star={movie.vote_average} 
                  year={movie.release_date.split("-").join().slice(0,4)} />
        </div>
    ))
    

    return (
        <section className={`${styles.discover_page} container mt-4`} style={{minHeight:"472px"}}>
            <div className="row">
                <h4 className={styles.discover_title}>Now Playing Movies</h4>
                {showMoviesList}
            </div>
        </section>
    )
}
