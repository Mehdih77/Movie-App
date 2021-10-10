import MovieCard from '../MovieCard/MovieCard';
import ResponsiveSlider from "../Sliders/ResponsiveSlider/ResponsiveSlider";
import styles from './PopularMovies.module.css';

export default function PopularMovies() {
    return ( 
    <> 
        <h4 className={styles.popular_movies_title}>POPULAR MOVIES</h4>
        <ResponsiveSlider>
            <div className='px-1'>
                <MovieCard responsive={false} name={'shang-chi'} img={"/images/movie4.jpg"} year={'2021'} age={'+18'} genres={"Action"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie4.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
        </ResponsiveSlider>
    </>
    )
}