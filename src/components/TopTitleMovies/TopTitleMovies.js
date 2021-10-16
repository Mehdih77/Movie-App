import styles from './TopTitleMovies.module.css';

export default function TopTitleMovies({name}) {

    // used in Discover Pages && Genres Page
    return (
        <>
            <h4 className={styles.discover_title}>{name} Movies</h4>   
        </>
    )
}
