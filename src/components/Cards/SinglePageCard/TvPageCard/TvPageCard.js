import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSingleTv,
  fetchSingleTvCredits,
  getSingleTv,
  getSingleTvCredits,
} from "../../../../Redux/singleTvSlice";
import { addToWatchList } from "../../../../Redux/watchListSlice";
import styles from "../SinglePageCard.module.css";
import noImage from "../../../../img/ava.jpg";
import Loader from "../../../Loader/Loader";
import { fetchVideoTv, getVideo } from "../../../../Redux/videoSlice";
import ModalVideo from "react-modal-video";

export default function TvPageCard({ tvId }) {
  const tvData = useSelector(getSingleTv);
  const tvCredits = useSelector(getSingleTvCredits);
  const videoTrailer = useSelector(getVideo);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(
      fetchSingleTv({
        id: tvId,
      })
    );
    dispatch(
      fetchSingleTvCredits({
        id: tvId,
      })
    );
    dispatch(
      fetchVideoTv({
        id: tvId,
      })
    );
  }, [tvId, dispatch]);

  const handleAddToWatchList = () => {
    dispatch(addToWatchList(tvData));
  };

  // tv data
  const noPoster =
    tvData?.poster_path === "" ||
    tvData?.poster_path === null ||
    tvData?.poster_path === undefined;
  let imageUrl = "";
  if (noPoster) {
    imageUrl = noImage;
  } else {
    imageUrl = `https://image.tmdb.org/t/p/w780/${tvData?.poster_path}`;
  }
  const movieLang = tvData.spoken_languages
    ?.map((lang) => `${lang.name}`)
    .join(" , ");
  const movieGenre = tvData.genres?.map((genre) => `${genre.name}`).join(" , ");
  const tvNetworks = tvData.networks
    ?.map((network) => `${network.name}`)
    .join(" , ");
  const tvCompany = tvData.production_companies
    ?.map((company) => `${company.name}`)
    .join(" , ");
  const movieCountries = tvData.production_countries
    ?.map((countries) => `${countries.name}`)
    .join(" , ");
  const director = tvCredits.crew?.filter((c) => c.job === "Director");
  const director2 = tvData.created_by?.map((d) => d.name).join(" , ");
  const director2id = tvData.created_by?.map((d) => d.id);
  const castName = tvCredits.cast;

  // show spinner before loading poster/image
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => setLoading(false);
  }, []);

  const onLoading = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  // video Modal
  const [isOpen, setOpen] = useState(false);
  let videoId = "";
  if (videoTrailer[0] === undefined) {
    videoId = null;
  } else {
    videoId = videoTrailer[0].key;
  }
  const handleOpenModal = useCallback(
    (e) => {
      e.preventDefault();
      setOpen(true);
    },
    [setOpen]
  );

  return (
    <div className={styles.movie_page_card_wrapper}>
      <div className={styles.movie_page_card_left}>
        <div>
          {noPoster ? (
            <img className="img-fluid" src={noImage} alt="Sorry, No Poster" />
          ) : (
            <>
              {!loading ? <Loader /> : null}
              <img
                onLoad={onLoading}
                className="img-fluid"
                src={imageUrl}
                alt={tvData.title}
              />
            </>
          )}
        </div>
        <div className={styles.movie_page_card_left_content}>
          <span>1080p</span>
          <span>24p</span>
          <a href={tvData.homepage} rel="noreferrer" target="_blank">
            <i className="fab fa-imdb"></i>
          </a>
          <span>
            <i className="fas fa-star"></i>
            {tvData.vote_average}
          </span>
        </div>
      </div>
      <div className={styles.movie_page_card_right}>
        <h2>{tvData.title}</h2>
        <div className={styles.movie_page_card_right_info}>
          <div>
            <p>
              <i className="far fa-clock"></i>Episode Duration:{" "}
              <span>{tvData.episode_run_time?.join().slice(0, 2)}m</span>
            </p>
            <p>
              <i className="fas fa-video"></i>Director:{" "}
              <span>{(tvCredits.crew && director[0]?.name) || director2}</span>
            </p>
            <p>
              <i className="fas fa-film"></i>Genres: <span>{movieGenre}</span>
            </p>
            <p>
              <i className="fas fa-calendar-day"></i>Release Date:{" "}
              <span>{tvData.first_air_date}</span>
            </p>
            <p>
              <i className="fas fa-info"></i>Status:{" "}
              <span>{tvData.status}</span>
            </p>
            <p>
              <i className="fas fa-language"></i>Language:{" "}
              <span>{tvData && movieLang}</span>
            </p>
          </div>
          <div>
            <p>
              <i className="fas fa-quote-left"></i>Type:{" "}
              <span>{tvData.type}</span>
            </p>
            <p>
              <i className="fab fa-artstation"></i>Seasons:{" "}
              <span>{tvData.number_of_seasons}</span>
            </p>
            <p>
              <i className="fab fa-artstation"></i>Episodes:{" "}
              <span>{tvData.number_of_episodes}</span>
            </p>
            <p>
              <i className="fas fa-ethernet"></i> Network:{" "}
              <span>{tvNetworks}</span>
            </p>
            <p>
              <i className="far fa-building"></i> Company:{" "}
              <span>{tvCompany}</span>
            </p>
            <p>
              <i className="fas fa-globe-americas"></i>Country:{" "}
              <span>{movieCountries}</span>
            </p>
          </div>
        </div>
        <p className={styles.movie_page_card_right_desc}>{tvData.overview}</p>
        <div className={styles.movie_page_card_right_cast}>
          <div>
            <p>Director</p>
            <Link to={`/person/${director2id}`}>
              {" "}
              {(tvCredits.crew && director[0]?.name) || director2}
            </Link>
          </div>
          <div>
            <p>Cast</p>
            <div>
              {castName?.slice(0, 7).map((n) => (
                <Link to={`/person/${n.id}`}> {`${n.name}`} , </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.movie_page_card_right_btns}>
          <button>
            <i className="fas fa-play"></i>Play
          </button>
          <button onClick={handleAddToWatchList}>
            <i className="fas fa-plus"></i>My List
          </button>
          <button onClick={handleOpenModal}>
            <i className="fas fa-film"></i>Trailer
          </button>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setOpen(false)}
          />
          <button>
            <i className="fas fa-share-alt"></i>Share
          </button>
        </div>
      </div>
    </div>
  );
}
