import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PersonCard from "../../components/Cards/PersonCard/PersonCard";
import RelatedMovies from "../../components/RelatedMovies/RelatedMovies";
import { fetchPerson, getPerson } from "../../Redux/personSlice";
import styles from "./Person.module.css";

export default function Person() {
  const { id } = useParams();
  const personData = useSelector(getPerson);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
        fetchPerson({
        id,
      })
    );
  }, [id, dispatch]);

  const style = {
    backgroundImage: `linear-gradient(
            to right,
            rgb(12, 21, 26),
            rgba(0, 0, 0, 0.69)
        ),
        url(https://image.tmdb.org/t/p/original/${personData.profile_path})`,
  };

  return (
    <>
      <div style={style} className={styles.parallax}></div>
      <section className="container-fluid">
        <div className="row my-5">
          <PersonCard personId={id} />
        </div>
        <RelatedMovies type={"person"} Id={id} />
      </section>
    </>
  );
}
