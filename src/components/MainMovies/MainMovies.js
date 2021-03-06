import { useCallback, useState } from 'react';
import styles from './MainMovies.module.css';
import Featured from './Featured';
import Movies from './Movies';
import Shows from './Shows';

const MainMovies = () => {

    const [featured, setFeatured] = useState(true);
    const [movies, setMovies] = useState(false);
    const [shows, setShows] = useState(false);

    const handleShowFeatured = useCallback(() => {
        setMovies(false);
        setShows(false);
        setFeatured(true);
    },[]);

    const handleShowMovies = useCallback(() => {
        setFeatured(false);
        setShows(false);
        setMovies(true);
    },[]);

    const handleShowShows = useCallback(() => {
        setShows(true);
        setMovies(false);
        setFeatured(false);
    },[]);

    return (
        <>
            <section className="container-fluid">
                <div className='row'>
                    <div className={styles.main_movies_tabs}>
                        <button className={featured ? styles.active_tabs : styles.not_active_tab} onClick={handleShowFeatured}>Featured</button>
                        <button className={movies ? styles.active_tabs : styles.not_active_tab} onClick={handleShowMovies}>Movies</button>
                        <button className={shows ? styles.active_tabs: styles.not_active_tab} onClick={handleShowShows}>Shows</button>
                    </div>
                </div>
                <div className="row">
                    {featured && <Featured />}
                    {movies && <Movies />} 
                    {shows && <Shows />}
                </div>
            </section>
        </>
    )
}

export default MainMovies;