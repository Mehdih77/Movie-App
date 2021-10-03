import styles from './MainSlider.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from '../../img/test.jpg';
import { Link } from 'react-router-dom';

export default function MainSlider() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className={`${styles.slider_wrapper} container-fluid`}>
            <Slider {...settings}>
                <div className={`${styles.slider_item}`}>
                    <div style={{backgroundImage: `url(${test1})`, width:"100%", height:"100%"}} className={`${styles.slider_content}`}>
                        <div className={`${styles.slider_body}`}>
                            <div className={`${styles.slider_body_badge}`}>New</div>
                            <h2>City dreams</h2>
                            <div className={`${styles.slider_body_date}`}>
                                <span>2021</span>
                                <span>+18</span>
                                <span>2h 6m</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className={`${styles.slider_body_btn}`}>
                                <button><Link><i className="fas fa-info"></i>Details</Link></button>
                                <button><Link><i className="fas fa-plus"></i>My List</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.slider_item}`}>
                    <div style={{backgroundImage: `url(${test1})`, width:"100%", height:"100%"}} className={`${styles.slider_content}`}>
                        <div className={`${styles.slider_body}`}>
                            <div className={`${styles.slider_body_badge}`}>New</div>
                            <h2>City dreams</h2>
                            <div className={`${styles.slider_body_date}`}>
                                <span>2021</span>
                                <span>+18</span>
                                <span>2h 6m</span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className={`${styles.slider_body_btn}`}>
                                <button><Link><i className="fas fa-info"></i>Details</Link></button>
                                <button><Link><i className="fas fa-plus"></i>My List</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
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