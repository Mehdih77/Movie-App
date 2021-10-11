import styles from './ByGenreSideBar.module.css';

export default function ByGenreSideBar() {
    return (
        <>
            <div className={styles.movie_by_genre_title}>
                <p>Genre: <span>Science Fiction</span></p>
            </div>
            <div className={styles.movie_by_genre_sorting}>
                <p>Sort By :</p>
                <form>
                    <label for="Popularity">
                        <input type="radio" id="Popularity" name="genre" value="Popularity"/>
                        Popularity
                    </label>
                    <label for="Revenue">
                        <input type="radio" id="Revenue" name="genre" value="Revenue"/>
                        Revenue
                    </label>
                    <label for="Vote Average">
                        <input type="radio" id="Vote Average" name="genre" value="Vote Average"/>
                        Vote Average
                    </label>
                    <label for="Release Date">
                        <input type="radio" id="Release Date" name="genre" value="Release Date"/>
                        Release Date
                    </label>
                </form>
            </div>
        </>
    )
}
