import styles from './SingleTvPage.module.css';
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies';
import { useParams } from 'react-router';
import TvPageCard from '../../components/Cards/SinglePageCard/TvPageCard/TvPageCard';

export default function SingleTvPage() {

    const {id} = useParams();

    return (
        <>
            {id && 
            <>
                <div className={styles.parallax}></div>
                <section className='container-fluid'>
                    <div className="row my-5">
                        <TvPageCard tvId={id} />
                    </div>
                    <RelatedMovies type={'tv'} movieId={id} />
                </section>
            </>}
        </>
    )
}
