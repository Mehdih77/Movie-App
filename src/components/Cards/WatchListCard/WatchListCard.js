import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../../Redux/watchListSlice";
import styles from "./WatchListCard.module.css";
import noImage from '../../../img/ava.jpg';

export default function WatchListCard({ id, img, name, year, time, detail }) {
  const [favorite, setFavorite] = useState(false);
  const [watched, setWatched] = useState(false);

  const noPoster =
  img === "" ||
  img === null ||
  img === undefined;
  let imageUrl = "";
  if (noPoster) {
    imageUrl = noImage;
  } else {
    imageUrl = `https://image.tmdb.org/t/p/w342/${img}`;
  }
  
  const dispatch = useDispatch();

  const handleRemoveFromWatchList = () => {
    dispatch(removeFromWatchList(id));
  };

  const handleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };
  const handleWatched = () => {
    setWatched((prevWatched) => !prevWatched);
  };

  return (
    <div className={`${styles.watch_list_card} col-12 col-md-6 col-xl-4`}>
      <div className={`${styles.watch_list_card_details}`}>
        <img src={imageUrl} alt="watch list" />
        <p>{name}</p>
        <div>
          <span>{year}</span>
          <span>{time}</span>
        </div>
        <p>{detail}</p>
      </div>
      <div className={`${styles.watch_list_card_btns}`}>
        <p>Where to Watch</p>
        <div>
          <button>
            <i className="fab fa-apple"></i>iTunes
          </button>
          <button>
            {" "}
            <img src="/images/hulu.png" alt="hulu" /> Hulu
          </button>
          <button>
            <i className="fab fa-amazon"></i>Amazon
          </button>
          <button>
            <img src="/images/netflix.png" alt="netflix" />
            Netflix
          </button>
        </div>
      </div>
      <div className={`${styles.watch_list_card_actions}`}>
        <button onClick={handleRemoveFromWatchList}>
          <i className="far fa-trash-alt"></i>
          <span>Remove</span>
        </button>
        <button onClick={handleWatched}>
          {watched ? (
            <>
              <i className="fas fa-check-circle"></i>
              <span>Watched</span>
            </>
          ) : (
            <>
              <i className="far fa-check-circle"></i>
              <span>Watched</span>
            </>
          )}
        </button>
        <button onClick={handleFavorite}>
          {favorite ? (
            <>
              <i className="fas fa-heart"></i>
              <span>Favorite</span>
            </>
          ) : (
            <>
              <i className="far fa-heart"></i>
              <span>Favorite</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
