import { useCallback, useState } from 'react';
import styles from './BestSeries.module.css';
import DramaSeries from './DramaSeries';
import ActionSeries from './ActionSeries';
import RomanceSeries from './RomanceSeries';
import bestSeriesBg from '../../img/best-series-bg.jpg';

export default function BestSeries() {
    
    const [dramaSeries, setDramaSeries] = useState(true);
    const [actionSeries, setActionSeries] = useState(false);
    const [romanceSeries, setRomanceSeries] = useState(false);

    const handleShowDramaSeries = useCallback(() => {
        setActionSeries(false);
        setRomanceSeries(false);
        setDramaSeries(true);
    },[]);

    const handleShowActionSeries = useCallback(() => {
        setDramaSeries(false);
        setRomanceSeries(false);
        setActionSeries(true);
    },[]);

    const handleRomanceSeries = useCallback(() => {
        setRomanceSeries(true);
        setActionSeries(false);
        setDramaSeries(false);
    },[]);


    return (
        <section style={{backgroundImage: `url(${bestSeriesBg})`}} className={`${styles.best_series_wrapper} container-fluid`}>
            <div className='row'>
                <div className={styles.best_series_title}>
                    <p>featured</p>
                    <p>Best Series</p>
                    <p>News Season 5 Just flown in Watch and debate.</p>
                </div>
                <div className={styles.main_movies_tabs}>
                    <button className={dramaSeries ? styles.active_tabs : styles.not_active_tab} onClick={handleShowDramaSeries}>Drama</button>
                    <button className={actionSeries ? styles.active_tabs : styles.not_active_tab} onClick={handleShowActionSeries}>Action</button>
                    <button className={romanceSeries ? styles.active_tabs: styles.not_active_tab} onClick={handleRomanceSeries}>Romance</button>
                </div>
            </div>
            <div className={`${styles.best_series_content} row`}>
                {dramaSeries && <DramaSeries />}
                {actionSeries && <ActionSeries />} 
                {romanceSeries && <RomanceSeries />}
            </div>
        </section>
    )
}
