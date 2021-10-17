import { useState,useEffect,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Cards/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { fetchGenresMovie, getGenresMovie, getGenresTotalResult } from '../../Redux/genreSlice';
import { useParams } from 'react-router';
import TopTitleMovies from '../../components/TopTitleMovies/TopTitleMovies';
import ByGenreSideBar from '../../components/ByGenreSideBar/ByGenreSideBar';

export default function MovieByGenrePage() {

    const [currentPage, setCurrentPage] = useState(1);
    const genreList = useSelector(getGenresMovie);
    const totalResults = useSelector(getGenresTotalResult);
    const dispatch = useDispatch();

    const {name,id} =useParams();

    useEffect(() => {
        dispatch(fetchGenresMovie({
            genreId: id,
            pageNumber: currentPage
        }));
    }, [currentPage,dispatch,id])

    // change the page number
    const changePage = useCallback((page) => {setCurrentPage(page)}, [setCurrentPage]);

    const showMoviesList = genreList.map(movie => (
        <div className="col-6 col-md-4 col-xl-2">
            <Card 
                id={movie.id}
                key={movie.id}
                img={movie.poster_path}
                name={movie.title} 
                star={movie.vote_average}
                year={movie.release_date?.split("-").join().slice(0,4)} />
        </div>
    ))

    return (
        <section className='container mt-4' style={{minHeight:"472px"}}>
            <div className="row">
                <TopTitleMovies name={name} />
                {showMoviesList}
            </div>
            <Pagination currentPage={currentPage} changePage={changePage} totalResults={totalResults} />
        </section>
    )
}
