import CurrentSlider from '../Sliders/CurrentSlider/CurrentSlider';
import styles from './Top10Movies.module.css';
import bg_img from '../../img/test11.jpg';
import { Link } from 'react-router-dom';

export default function Top10Movies() {
    return (
        <>
            <h4 className={styles.top10_movies_title}>TOP10 MOVIES</h4>
            <CurrentSlider>
                <div className={`${styles.top10_movies_main} px-1`} >
                    <div style={{backgroundImage: `url(${bg_img})`}} >
                        <div className={`${styles.top10_movies_content}`}>
                            <h2>City dreams</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className={`${styles.top10_movies_btn}`}>
                                <button><Link><i className="fas fa-info"></i>Details</Link></button>
                                <button><Link><i className="fas fa-plus"></i>My List</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.top10_movies_main} px-1`} >
                    <div style={{backgroundImage: `url(${bg_img})`}} >
                        <div className={`${styles.top10_movies_content}`}>
                            <h2>City dreams</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className={`${styles.top10_movies_btn}`}>
                                <button><Link><i className="fas fa-info"></i>Details</Link></button>
                                <button><Link><i className="fas fa-plus"></i>My List</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.top10_movies_main} px-1`} >
                    <div style={{backgroundImage: `url(${bg_img})`}} >
                        <div className={`${styles.top10_movies_content}`}>
                            <h2>City dreams</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className={`${styles.top10_movies_btn}`}>
                                <button><Link><i className="fas fa-info"></i>Details</Link></button>
                                <button><Link><i className="fas fa-plus"></i>My List</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </CurrentSlider>
        </>
    )
}
