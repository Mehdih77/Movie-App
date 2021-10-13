import styles from './SingleMoviePage.module.css';
import MoviePageCard from '../../components/Cards/MoviePageCard/MoviePageCard';
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies';
import { useParams } from 'react-router';

export default function SingleMoviePage() {

    const {id} = useParams();

    return (
        <>
            {id && 
            <>
                <div className={styles.parallax}></div>
                <section className='container-fluid'>
                    <div className="row my-5">
                        <MoviePageCard movieId={id} />
                    </div>
                    <RelatedMovies movieId={id} />
                </section>
            </>}
        </>
    )
}
