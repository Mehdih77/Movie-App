import styles from './SingleMoviePage.module.css';
import MoviePageCard from '../../components/Cards/MoviePageCard/MoviePageCard';
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies';

export default function SingleMoviePage() {
    return (
        <>
            <div className={styles.parallax}></div>
            <section className='container-fluid'>
                <div className="row my-5">
                    <MoviePageCard />
                </div>
                <RelatedMovies />
            </section>
        </>
    )
}
