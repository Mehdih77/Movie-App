import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWatchList } from '../../../Redux/watchListSlice';
import styles from './MovieCard.module.css';

export default function MovieCard({responsive = true,id,img,year,firstAirDate,genres,title,name,age,type,allInformation}) {

    const imageUrl = `https://image.tmdb.org/t/p/w342/${img}`;

    const dispatch = useDispatch();

    const handleAddToWatchList = () => {
        dispatch(addToWatchList(allInformation));
    };

    return (
        <div className={responsive ? "col-6 col-md-4 col-xl-2" : null}>
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link to={ type === "tv" ? `/tv/${id}` : `/movies/${id}`}><i className="fas fa-info"></i></Link></button>
                        <button onClick={handleAddToWatchList} title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src={imageUrl} alt={title} />
                    <div className={styles.card_content}>
                        <p>{title || name}</p>
                        <div>
                            <span>{firstAirDate || year}</span>
                            <span>{age}</span>
                            <span>{type}</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}
