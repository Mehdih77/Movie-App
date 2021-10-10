import MovieCard from '../MovieCard/MovieCard';

export default function Movies() {
    return (
        <>
            <MovieCard name={'Iron Door'} img={"/images/movie2.jpg"} year={'2020'} age={'+18'} genres={"Drama"}  />
            <MovieCard name={'Iron Door'} img={"/images/movie2.jpg"} year={'2020'} age={'+16'} genres={"Drama"}  />
            <MovieCard name={'Iron Door'} img={"/images/movie2.jpg"} year={'2020'} age={'+16'} genres={"Drama"}  />
            <MovieCard name={'Iron Door'} img={"/images/movie2.jpg"} year={'2020'} age={'+16'} genres={"Drama"}  />
            <MovieCard name={'Iron Door'} img={"/images/movie2.jpg"} year={'2020'} age={'+16'} genres={"Drama"}  />
            <MovieCard name={'Iron Door'} img={"/images/movie2.jpg"} year={'2020'} age={'+10'} genres={"Drama"}  />
        </>
    )
}
