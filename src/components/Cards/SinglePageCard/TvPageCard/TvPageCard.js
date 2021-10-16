import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleTv, fetchSingleTvCredits, getSingleTv, getSingleTvCredits } from '../../../../Redux/singleTvSlice';
import styles from '../SinglePageCard.module.css';

export default function TvPageCard({tvId}) {

    const tvData = useSelector(getSingleTv);
    const tvCredits = useSelector(getSingleTvCredits);
    const dispatch = useDispatch();

    console.log(tvData);
    
    useEffect(() => {
        dispatch(fetchSingleTv({
            id: tvId
        }));
        dispatch(fetchSingleTvCredits({
            id: tvId
        }));
    }, [tvId,dispatch])
    
    // tv data
    const imageUrl = `https://image.tmdb.org/t/p/w780/${tvData?.poster_path}`;
    const movieLang = tvData.spoken_languages?.map(lang => `${lang.name}`).join(" , ") ;
    const movieGenre = tvData.genres?.map(genre => `${genre.name}`).join(" , ") ;
    const tvNetworks = tvData.networks?.map(network => `${network.name}`).join(" , ") ;
    const tvCompany = tvData.production_companies?.map(company => `${company.name}`).join(" , ") ;
    const movieCountries = tvData.production_countries?.map(countries => `${countries.name}`).join(" , ") ;
    const director = tvCredits.crew?.filter(c => c.job === "Director");
    const director2 = tvData.created_by?.map(d => d.name).join(" , ");
    const castName = tvCredits.cast;

    return (
        <div className={styles.movie_page_card_wrapper}>
            <div className={styles.movie_page_card_left}>
                <div>
                    <img src={imageUrl} alt="movie-page"/>
                </div>
                <div className={styles.movie_page_card_left_content}>
                    <span>1080p</span>
                    <span>24p</span>
                    <a href={tvData.homepage} rel="noreferrer" target='_blank'>
                        <i className="fab fa-imdb"></i>
                    </a>
                    <span>
                        <i className="fas fa-star"></i>
                        {tvData.vote_average}</span>
                </div>
            </div>
            <div className={styles.movie_page_card_right}>
                <h2>{tvData.title}</h2>
                <div className={styles.movie_page_card_right_info}>
                    <div>
                        <p><i className="far fa-clock"></i>Episode Duration: <span>{tvData.episode_run_time?.join().slice(0,2)}m</span></p>
                        <p><i className="fas fa-video"></i>Director: <span>{(tvCredits.crew && director[0]?.name) || director2}</span></p>
                        <p><i className="fas fa-film"></i>Genres: <span>{movieGenre}</span></p>
                        <p><i className="fas fa-calendar-day"></i>Release Date: <span>{tvData.first_air_date}</span></p>
                        <p><i className="fas fa-info"></i>Status: <span>{tvData.status}</span></p>
                        <p><i className="fas fa-language"></i>Language: <span>{tvData && movieLang}</span></p>
                    </div>
                    <div>
                        <p><i className="fas fa-quote-left"></i>Type: <span>{tvData.type}</span></p>
                        <p><i className="fab fa-artstation"></i>Seasons: <span>{tvData.number_of_seasons}</span></p>
                        <p><i className="fab fa-artstation"></i>Episodes: <span>{tvData.number_of_episodes}</span></p>
                        <p><i className="fas fa-ethernet"></i> Network: <span>{tvNetworks}</span></p>
                        <p><i className="far fa-building"></i> Company: <span>{tvCompany}</span></p>
                        <p><i className="fas fa-globe-americas"></i>Country: <span>{movieCountries}</span></p>
                    </div>
                </div>
                <p className={styles.movie_page_card_right_desc}>{tvData.overview}</p>
                <div className={styles.movie_page_card_right_cast}>
                    <div>
                        <p>Director</p>
                        <Link>{tvCredits.crew && director[0]?.name || director2}</Link>
                    </div>
                    <div>
                        <p>Cast</p>
                        <div>
                            {castName?.slice(0,7).map(n => 
                                <Link to={`/person/${n.id}`}>{`${n.name}`} , </Link>
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
