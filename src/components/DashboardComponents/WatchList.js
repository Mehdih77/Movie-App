import WatchListCard from '../Cards/WatchListCard/WatchListCard';
import styles from './DashboardComponents.module.css';

export default function WatchList() {
    return (
        <div className='row'>
            <WatchListCard img={'/images/movie4.jpg'} name={"vikings"} year={"2013"} time={"2h 36m"} detail={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate laboriosam voluptas, ullam quia nostrum aliquid aliquam veniam sequi magnam dolore asperiores placeat quis voluptates fugiat fugit adipisci. Optio, ex.'} />
            <WatchListCard img={'/images/movie4.jpg'} name={"vikings"} year={"2013"} time={"2h 36m"} detail={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate laboriosam voluptas, ullam quia nostrum aliquid aliquam veniam sequi magnam dolore asperiores placeat quis voluptates fugiat fugit adipisci. Optio, ex.'} />
            <WatchListCard img={'/images/movie4.jpg'} name={"vikings"} year={"2013"} time={"2h 36m"} detail={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate laboriosam voluptas, ullam quia nostrum aliquid aliquam veniam sequi magnam dolore asperiores placeat quis voluptates fugiat fugit adipisci. Optio, ex.'} />
            <WatchListCard img={'/images/movie4.jpg'} name={"vikings"} year={"2013"} time={"2h 36m"} detail={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptate laboriosam voluptas, ullam quia nostrum aliquid aliquam veniam sequi magnam dolore asperiores placeat quis voluptates fugiat fugit adipisci. Optio, ex.'} />
        </div>
    )
}

