import { useState,useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscoverMovies, getMoviesList, getTotalResults } from '../../Redux/discoverSlice';
import Card from '../../components/Cards/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import TopTitleMovies from '../../components/TopTitleMovies/TopTitleMovies';

export default function TopRated() {
   
    const [currentPage, setCurrentPage] = useState(1)
    const moviesList = useSelector(getMoviesList);
    const totalResults = useSelector(getTotalResults);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDiscoverMovies({
            path: "top_rated",
            pageNumber: currentPage
        }));
    }, [currentPage,dispatch])

    // change the page number
    const changePage = useCallback((page) => {setCurrentPage(page)}, [setCurrentPage]);

    const showMoviesList = moviesList?.map(movie => (
        <div className="col-6 col-md-4 col-xl-2">
            <Card
                id={movie.id}
                img={movie.poster_path}
                name={movie.title} 
                star={movie.vote_average}
                year={movie.release_date.split("-").join().slice(0,4)} />
        </div>
    ))

    return (
        <section className='container mt-4' style={{minHeight:"472px"}}>
            <div className="row">
                <TopTitleMovies name={"Top Rated"} />
                {showMoviesList}
            </div>
            <Pagination currentPage={currentPage} changePage={changePage} totalResults={totalResults} />
        </section>
    )
}
