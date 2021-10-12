import styles from './MoviePageCard.module.css';

export default function MoviePageCard() {
    return (
        <div className={styles.movie_page_card_wrapper}>
            <div className={styles.movie_page_card_left}>
                <div>
                    <img src="/images/movie5.jpg" alt="movie-page"/>
                </div>
                <div className={styles.movie_page_card_left_content}>
                    <span>1080p</span>
                    <span>24p</span>
                    <span>
                        <i className="fab fa-imdb"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                        7.1</span>
                </div>
            </div>
            <div className={styles.movie_page_card_right}>
                <h2>THE DARK KNIGHT RISES</h2>
                <div className={styles.movie_page_card_right_info}>
                    <span><i className="far fa-user"></i> 18+</span>
                    <span><i className="far fa-clock"></i> 2hr 45min</span>
                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                    <span><i className="fas fa-video"></i> Action</span>
                    <span><i className="fas fa-globe-americas"></i> United States</span>
                </div>
                <p className={styles.movie_page_card_right_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={styles.movie_page_card_right_cast}>
                    <div>
                        <p>Director</p>
                        <p>Christopher Nolan</p>
                    </div>
                    <div>
                        <p>Cast</p>
                        <p>Christian Bale, Michael Cain, Gary Oldman, Anne Hathway, Tom Hardy, Marion
                            Cotillard
                        </p>
                    </div>
                </div>
                <div className={styles.movie_page_card_right_btns}>
                    <button><i className="fas fa-play"></i>Play</button>
                    <button><i className="fas fa-plus"></i>My List</button>
                    <button><i className="fas fa-film"></i>Trailer</button>
                    <button><i className="fas fa-share-alt"></i>Share</button>
                </div>
            </div>
        </div>
    )
}
