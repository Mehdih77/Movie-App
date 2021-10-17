import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToWatchList } from "../../../Redux/watchListSlice";
import styles from "./MovieCard.module.css";
import noImage from '../../../img/ava.jpg';

export default function MovieCard({
  responsive = true,
  id,
  img,
  year,
  firstAirDate,
  genres,
  title,
  name,
  age,
  type,
  allInformation,
}) {

  
  const noPoster = img === "" || img === null || img === undefined;

  let imageUrl = "";
  if (noPoster) {
      imageUrl = noImage
  } else {
      imageUrl = `https://image.tmdb.org/t/p/w342/${img}`;
  }

  const dispatch = useDispatch();

  const handleAddToWatchList = () => {
    dispatch(addToWatchList(allInformation));
  };

  return (
    <div className={responsive ? "col-6 col-md-4 col-xl-2" : null}>
      <div className={styles.card}>
        <div className={styles.card_icon}>
          <Link to={type === "tv" ? `/tv/${id}` : `/movies/${id}`}>
            <button title="More Detail">
              <i className="fas fa-info"></i>
            </button>
          </Link>
          <button onClick={handleAddToWatchList} title="Add To Watch List">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <img className="img-fluid" src={imageUrl} alt={title} />
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
  );
}
