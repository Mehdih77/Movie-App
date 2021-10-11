import styles from './SuggestedForYou.module.css';
import ResponsiveSlider from '../Sliders/ResponsiveSlider/ResponsiveSlider';
import MovieCard from '../Cards/MovieCard/MovieCard';

export default function SuggestedForYou() {
    return (
        <> 
        <h4 className={styles.suggested_for_you_title}>SUGGESTED FOR YOU</h4>
        <ResponsiveSlider>
            <div className='px-1'>
                <MovieCard responsive={false} name={'shang-chi'} img={"/images/movie5.jpg"} year={'2021'} age={'+18'} genres={"Action"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
            <div className='px-1'>
                <MovieCard responsive={false} name={'Iron Door'} img={"/images/movie5.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            </div>
        </ResponsiveSlider>
    </>
    )
}
