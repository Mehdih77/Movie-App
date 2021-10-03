import { Link } from 'react-router-dom';
import styles from './MainMovies.module.css';

export default function Shows() {
    return (
        <>
            <div className="col-6 col-md-4 col-xl-2">
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src="/images/movie3.jpg" alt="movies" />
                    <div className={styles.card_content}>
                        <p>Iron Door</p>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src="/images/movie3.jpg" alt="movies" />
                    <div className={styles.card_content}>
                        <p>Iron Door</p>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src="/images/movie3.jpg" alt="movies" />
                    <div className={styles.card_content}>
                        <p>Iron Door</p>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src="/images/movie3.jpg" alt="movies" />
                    <div className={styles.card_content}>
                        <p>Iron Door</p>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src="/images/movie3.jpg" alt="movies" />
                    <div className={styles.card_content}>
                        <p>Iron Door</p>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-xl-2">
                <div className={styles.card}>
                    <div className={styles.card_icon}>
                        <button title='More Detail'><Link><i className="fas fa-info"></i></Link></button>
                        <button title='Add To Watch List'><i className="fas fa-plus"></i></button>
                    </div>
                    <img className='img-fluid' src="/images/movie3.jpg" alt="movies" />
                    <div className={styles.card_content}>
                        <p>Iron Door</p>
                        <div>
                            <span>2021</span>
                            <span>+18</span>
                            <span>Action</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
