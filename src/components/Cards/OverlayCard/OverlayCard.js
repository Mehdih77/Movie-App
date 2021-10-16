import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWatchList } from '../../../Redux/watchListSlice';
import styles from './OverlayCard.module.css';

export default function OverlayCard({id,img,name,detail,allInformation}) {

    const imageUrl = `https://image.tmdb.org/t/p/original/${img}`;

    const dispatch = useDispatch();

    const handleAddToWatchList = () => {
        dispatch(addToWatchList(allInformation));
    };

    return (
        <div className={`${styles.overlay_card_main} px-1`}>
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }}>
                <img className={`${styles.overlay_card_img}`} src="/images/top10-movies-badge.png" alt={name} />
                <div className={`${styles.overlay_card_content}`}>
                    <h2>{name}</h2>
                    <p>{detail}</p>
                    <div className={`${styles.overlay_card_btn}`}>
                        <Link to={`/movies/${id}`}>
                            <button>
                                    <i className="fas fa-info"></i>Details
                            </button>
                        </Link>
                        <button onClick={handleAddToWatchList}>
                                <i className="fas fa-plus"></i>My List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
