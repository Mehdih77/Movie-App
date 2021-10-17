import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../../components/Cards/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import {
  fetchSearch,
  getSearchMovie,
  getSerachTotalResult,
} from "../../Redux/searchSlice";
import styles from "./Discover.module.css";

export default function MovieBySearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const { movie } = useParams();
  const dispatch = useDispatch();
  const searchList = useSelector(getSearchMovie);
  const totalResults = useSelector(getSerachTotalResult);

  useEffect(() => {
    dispatch(
      fetchSearch({
        query: movie,
        pageNumber: currentPage,
      })
    );
  }, [currentPage,dispatch,movie]);

  // change the page number
  const changePage = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const showSearchList = searchList?.map((movie) => (
    <div className="col-6 col-md-4 col-xl-2">
      <Card
        id={movie.id}
        key={movie.id}
        type={movie.media_type}
        img={movie.poster_path}
        name={movie.title || movie.name}
        star={movie.vote_average}
        year={
          movie.release_date?.split("-").join().slice(0, 4) &&
          movie.first_air_date?.split("-").join().slice(0, 4)
        }
      />
    </div>
  ));
  return (
    <section
      className={`${styles.discover_page} container mt-4`}
      style={{ minHeight: "497px" }}>
      <div className="row">
        <h4 className={styles.search_keyword_title}>
          <span>Search Keywords:</span> <span>{movie}</span>
        </h4>
        {showSearchList}
      </div>
      <Pagination
        currentPage={currentPage}
        changePage={changePage}
        totalResults={totalResults}
      />
    </section>
  );
}
