import styles from './SingleTvPage.module.css';
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies';
import { useParams } from 'react-router';
import TvPageCard from '../../components/Cards/SinglePageCard/TvPageCard/TvPageCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleTv, getSingleTv } from '../../Redux/singleTvSlice';
import { useEffect } from 'react';

export default function SingleTvPage() {

    const {id} = useParams();

    const tvData = useSelector(getSingleTv);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleTv({
            id
        }));
    }, [id,dispatch]);

    const style = { 
        backgroundImage: `linear-gradient(
            to right,
            rgb(12, 21, 26),
            rgba(0, 0, 0, 0.69)
        ),
        url(https://image.tmdb.org/t/p/original/${tvData.backdrop_path})`
    };


    return (
        <>
            {id && 
            <>
                <div style={style} className={styles.parallax}></div>
                <section className='container-fluid'>
                    <div className="row my-5">
                        <TvPageCard tvId={id} />
                    </div>
                    <RelatedMovies type={'tv'} Id={id} />
                </section>
            </>}
        </>
    )
}
