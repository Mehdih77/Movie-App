import { useCallback, useState } from "react";
import styles from "./BestSeries.module.css";
import NewSeries from "./NewSeries";
import PopularSeries from "./PopularSeries";
import TopRatedSeries from "./TopRatedSeries";
import bestSeriesBg from "../../img/best-series-bg.jpg";

export default function BestSeries() {
  const [newSeries, setNewSeries] = useState(true);
  const [popularSeries, setPopularSeries] = useState(false);
  const [topRatedSeries, setTopRatedSeries] = useState(false);

  const handleShowNewSeries = useCallback(() => {
    setPopularSeries(false);
    setTopRatedSeries(false);
    setNewSeries(true);
  }, []);

  const handleShowPopularSeries = useCallback(() => {
    setNewSeries(false);
    setTopRatedSeries(false);
    setPopularSeries(true);
  }, []);

  const handleTopRatedSeries = useCallback(() => {
    setTopRatedSeries(true);
    setPopularSeries(false);
    setNewSeries(false);
  }, []);

  return (
    <section
      style={{ backgroundImage: `url(${bestSeriesBg})` }}
      className={`${styles.best_series_wrapper} container-fluid`}>
      <div className="row">
        <div className={styles.best_series_title}>
          <p>featured</p>
          <p>Best Series</p>
          <p>News Season 5 Just flown in Watch and debate.</p>
        </div>
        <div className={styles.main_movies_tabs}>
          <button
            className={newSeries ? styles.active_tabs : styles.not_active_tab}
            onClick={handleShowNewSeries}>
            New
          </button>
          <button
            className={
              popularSeries ? styles.active_tabs : styles.not_active_tab
            }
            onClick={handleShowPopularSeries}>
            Popular
          </button>
          <button
            className={
              topRatedSeries ? styles.active_tabs : styles.not_active_tab
            }
            onClick={handleTopRatedSeries}>
            Top Rated
          </button>
        </div>
      </div>
      <div className={`${styles.best_series_content} row`}>
        {newSeries && <NewSeries />}
        {popularSeries && <PopularSeries />}
        {topRatedSeries && <TopRatedSeries />}
      </div>
    </section>
  );
}
