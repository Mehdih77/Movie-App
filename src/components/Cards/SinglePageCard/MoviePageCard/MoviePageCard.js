import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleMovie, fetchSingleMovieCredits, getSingleMovie, getSingleMovieCredits } from '../../../../Redux/singleMovieSlice';
import styles from '../SinglePageCard.module.css';

export default function MoviePageCard({movieId}) {

    const movieData = useSelector(getSingleMovie);
    const movieCredits = useSelector(getSingleMovieCredits);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSingleMovie({
            id: movieId
        }));
        dispatch(fetchSingleMovieCredits({
            id: movieId
        }));
    }, [movieId,dispatch])
    
    // movie data
    const imageUrl = `https://image.tmdb.org/t/p/w780/${movieData.poster_path}`;
    const movieLang = movieData.spoken_languages?.map(lang => `${lang.name}`).join(" , ") ;
    const movieGenre = movieData.genres?.map(genre => `${genre.name}`).join(" , ") ;
    const movieCompanies = movieData.production_companies?.map(companies => `${companies.name}`).join(" , ") ;
    const movieCountries = movieData.production_countries?.map(countries => `${countries.name}`).join(" , ") ;
    const director = movieCredits.crew?.filter(c => c.job === "Director");
    const castName = movieCredits.cast;

    return (
        <div className={styles.movie_page_card_wrapper}>
            <div className={styles.movie_page_card_left}>
                <div>
                    <img src={imageUrl} alt="movie-page"/>
                </div>
                <div className={styles.movie_page_card_left_content}>
                    <span>1080p</span>
                    <span>24p</span>
                    <a href={movieData.homepage} rel="noreferrer" target='_blank'>
                        <i className="fab fa-imdb"></i>
                    </a>
                    <span>
                        <i className="fas fa-star"></i>
                        {movieData.vote_average}</span>
                </div>
            </div>
            <div className={styles.movie_page_card_right}>
                <h2>{movieData.title}</h2>
                <div className={styles.movie_page_card_right_info}>
                    <div>
                        <p><i className="far fa-clock"></i>Duration: <span>{movieData.runtime}m</span></p>
                        <p><i className="fas fa-video"></i>Director: <span>{movieCredits.crew && director[0]?.name}</span></p>
                        <p><i className="fas fa-calendar-day"></i>Release Date: <span>{movieData.release_date}</span></p>
                        <p><i className="fas fa-language"></i>Language: <span>{movieData && movieLang}</span></p>
                    </div>
                    <div>
                        <p><i className="fas fa-film"></i>Genres: <span>{movieGenre}</span></p>
                        <p><i className="fas fa-dollar-sign"></i>Budget: <span>${movieData.budget}</span></p>
                        <p><i className="far fa-building"></i> Company: <span>{movieCompanies}</span></p>
                        <p><i className="fas fa-globe-americas"></i>Country: <span>{movieCountries}</span></p>
                    </div>
                </div>
                <p className={styles.movie_page_card_right_desc}>{movieData.overview}</p>
                <div className={styles.movie_page_card_right_cast}>
                    <div>
                        <p>Director</p>
                        <Link to={`/person/${movieCredits.crew && director[0]?.id}`}>{movieCredits.crew && director[0]?.name}</Link>
                    </div>
                    <div>
                        <p>Cast</p>
                        <div>
                            {castName?.slice(0,7).map(n => 
                                <Link id={n.id} to={`/person/${n.id}`}> {`${n.name}`} , </Link>
                            )}
                        </div>
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
