import styles from './TrendingNow.module.css';
import MovieCard from '../Cards/MovieCard/MovieCard';

export default function TrendingNow() {
    return (
        <section className="container-fluid">
            <h4 className={styles.trending_movies_title}>TRENDING NOW</h4>
            <div className="row">
                <MovieCard name={'the fast saga'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Action"}  />
                <MovieCard name={'the fast saga'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Action"}  />
                <MovieCard name={'the fast saga'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Action"}  />
                <MovieCard name={'the fast saga'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Action"}  />
                <MovieCard name={'the fast saga'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Action"}  />
                <MovieCard name={'the fast saga'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Action"}  />
            </div>
        </section>
    )
}
