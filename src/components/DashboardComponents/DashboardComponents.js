import { useState } from "react";
import styles from './DashboardComponents.module.css';
import ProfileSettings from "./ProfileSettings";
import WatchList from "./WatchList";

export default function DashboardComponents() {

    const [profileSetting, setProfileSetting] = useState(true);
    const [watchList, setWatchList] = useState(false);

    const handleShowProfileSetting = () => {
        setProfileSetting(true);
        setWatchList(false)
    };

    const handleShowWatchList = () => {
        setProfileSetting(false);
        setWatchList(true);
    }

    return (
        <>
            <section className='container'>
            <div className='row'>
                    <div className={styles.main_movies_tabs}>
                        <button className={profileSetting ? styles.active_tabs : styles.not_active_tab} onClick={handleShowProfileSetting}>Profile Settings</button>
                        <button className={watchList ? styles.active_tabs : styles.not_active_tab} onClick={handleShowWatchList}>Watch List</button>
                    </div>
                </div>
                <div className="row">
                    {profileSetting && <ProfileSettings />}
                    {watchList && <WatchList />}
                </div>
            </section>

        </>
    )
}
