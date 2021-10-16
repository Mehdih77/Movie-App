import { useSelector } from "react-redux";
import { selectAllWatchList } from "../../Redux/watchListSlice";
import WatchListCard from "../Cards/WatchListCard/WatchListCard";
import styles from "./DashboardComponents.module.css";

export default function WatchList() {
  const watchListItems = useSelector(selectAllWatchList);

  const showWatchList = watchListItems.map((item) => (
    <WatchListCard
      id={item.id}
      key={item.id}
      img={item.poster_path}
      name={item.name || item.title}
      year={
        item.release_date?.split("-").join().slice(0, 4) ||
        item.first_air_date?.split("-").join().slice(0, 4)
      }
      detail={item.overview}
    />
  ));

  return (
    <div className="row" style={{ minHeight: "407px" }}>
      {showWatchList.length > 0 ? (
        showWatchList
      ) : (
        <div className={styles.empty_watch_list}>
          <i className="fas fa-compact-disc"></i>
          <p>Your Watch List Is Empty...</p>
        </div>
      )}
    </div>
  );
}
