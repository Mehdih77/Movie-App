import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson, getPerson } from "../../../Redux/personSlice";
import styles from "./PersonCard.module.css";
import noImage from '../../../img/ava.jpg';

export default function PersonCard({ personId }) {
  const dispatch = useDispatch();
  const personInfo = useSelector(getPerson);

  useEffect(() => {
    dispatch(
      fetchPerson({
        id: personId,
      })
    );
  }, [personId, dispatch]);

  const noPoster =
    personInfo.profile_path === "" ||
    personInfo.profile_path === null ||
    personInfo.profile_path === undefined;

  let imageUrl = "";
  if (noPoster) {
    imageUrl = noImage;
  } else {
    imageUrl = `https://image.tmdb.org/t/p/w342/${personInfo.profile_path}`;
  }
  
  return (
    <div className={styles.person_card_wrapper}>
      <div className={styles.person_card_left}>
        <div>
          <img className="img-fluid" src={imageUrl} alt="person-page" />
        </div>
        <div className={styles.person_card_left_content}>
          <span>
            <i className="fas fa-star-half-alt"></i>Popularity:{" "}
            {personInfo.popularity}
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.imdb.com/name/${personInfo.imdb_id}/`}>
            <i className="fab fa-imdb"></i>
          </a>
        </div>
      </div>
      <div className={styles.person_card_right}>
        <h2>{personInfo.name}</h2>
        <div className={styles.person_card_right_info}>
          <p>
            <i className="fas fa-briefcase"></i> Career:{" "}
            <span>{personInfo.known_for_department}</span>
          </p>
          <p>
            <i className="fas fa-birthday-cake"></i> Date of birth:{" "}
            <span>{personInfo.birthday}</span>
          </p>
          <p>
            <i className="fas fa-star-half-alt"></i> Popularity:{" "}
            <span>{personInfo.popularity}</span>
          </p>
          <p>
            <i className="fas fa-globe-americas"></i> Born in:{" "}
            <span>{personInfo.place_of_birth}</span>
          </p>
        </div>
        <div className={styles.person_card_right_desc}>
          <p>Biography:</p>
          <p>{personInfo.biography}</p>
        </div>
      </div>
    </div>
  );
}
