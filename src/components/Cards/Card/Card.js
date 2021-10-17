import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import noImage from "../../../img/ava.jpg";
import Loader from "../../Loader/Loader";

export default function Card({ id, img, name, year, star, type }) {
  const noPoster = img === "" || img === null || img === undefined;

  let imageUrl = "";
  if (noPoster) {
    imageUrl = noImage;
  } else {
    imageUrl = `https://image.tmdb.org/t/p/w342/${img}`;
  }

  // show spinner before loading poster/image
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const onLoading = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  return (
    <div className={styles.card_wrapper}>
      <Link to={type === "tv" ? `/tv/${id}` : `/movies/${id}`}>
          
        {noPoster ? (
          <img className="img-fluid" src={noImage} alt="Sorry, No Poster" />
        ) : (
          <>
            {!loading ? <Loader /> : null}
            <img
              onLoad={onLoading}
              className="img-fluid"
              src={imageUrl}
              alt={name}
            />
          </>
        )}

        <div className={styles.card_content}>
          <p>{name ? name : "Unknown"}</p>
          <div className={styles.card_content_bottom}>
            <span>{year}</span>
            <span>
              <i className="fas fa-star"></i> {star}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
