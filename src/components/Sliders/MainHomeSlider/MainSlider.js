import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {fetchDiscoverMovies, getMoviesList} from '../../../Redux/discoverSlice';
import Slider from "react-slick";
import OverlayMainCard from '../../Cards/OverlayMainCard/OverlayMainCard';

export default function MainSlider() {

  const moviesList = useSelector(getMoviesList);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchDiscoverMovies({
          path: "now_playing"
      }));
  }, [dispatch])

  const showMovies = moviesList.slice(0,6).map(movie => (
    <OverlayMainCard 
      key={movie.id}
      id={movie.id}
      img={movie.backdrop_path} 
      name={movie.title} 
      year={movie.release_date.split("-").join().slice(0,4)}
      age={"+18"} 
      time={"2h 36m"} 
      detail={movie.overview}  />
  ))


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className='container-fluid'>
            <Slider {...settings}>
              {showMovies}
            </Slider>
        </section>
    )
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",
        marginRight: "30px", zIndex:"99" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginLeft:"30px", zIndex:"99" }}
        onClick={onClick}
      />
    );
  }