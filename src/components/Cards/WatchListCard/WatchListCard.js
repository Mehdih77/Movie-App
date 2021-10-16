import { useDispatch } from 'react-redux';
import { removeFromWatchList } from '../../../Redux/watchListSlice';
import styles from './WatchListCard.module.css';

export default function WatchListCard({id,img,name,year,time,detail}) {

    const imageUrl = `https://image.tmdb.org/t/p/w342/${img}`;
    const dispatch = useDispatch();

    const handleRemoveFromWatchList = () => {
        dispatch(removeFromWatchList(id));
    }

    return (
        <div className={`${styles.watch_list_card} col-12 col-md-6 col-xl-4`}>
            <div className={`${styles.watch_list_card_details}`}>
                <img src={imageUrl} alt="watch list"/>
                <p>{name}</p>
                <div>
                    <span>{year}</span>
                    <span>{time}</span>
                </div>
                <p>{detail}
                </p>
            </div>
            <div className={`${styles.watch_list_card_btns}`}>
                <p>Where to Watch</p>
                <div>
                    <button><i className="fab fa-apple"></i>iTunes</button>
                    <button> <img src="/images/hulu.png" alt="hulu" /> Hulu</button>
                    <button><i className="fab fa-amazon"></i>Amazon</button>
                    <button><img src="/images/netflix.png" alt="netflix" />Netflix</button>
                </div>
            </div>
            <div className={`${styles.watch_list_card_actions}`}>
                <button onClick={handleRemoveFromWatchList}>
                    <i className="far fa-trash-alt"></i>
                    <span>Remove</span>
                </button>
                <button>
                    <i className="far fa-check-circle"></i>
                    <span>Watched</span>
                </button>
                <button>
                    <i className="far fa-heart"></i>
                    <span>Favorite</span>
                </button>

            </div>
        </div>
    )
}
