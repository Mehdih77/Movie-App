import Slider from "react-slick";
import test1 from '../../../img/test.jpg';
import OverlayMainCard from '../../Cards/OverlayMainCard/OverlayMainCard';

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
        <section className='container-fluid'>
            <Slider {...settings}>
                <OverlayMainCard img={test1} name={"City dreams"} year={"2021"} age={"+18"} time={"2h 36m"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}  />
                <OverlayMainCard img={test1} name={"The Earth"} year={"2021"} age={"+18"} time={"2h 36m"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}  />
                <OverlayMainCard img={test1} name={"F9"} year={"2021"} age={"+18"} time={"2h 36m"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}  />
                <OverlayMainCard img={test1} name={"Vikings"} year={"2021"} age={"+18"} time={"2h 36m"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}  />
                <OverlayMainCard img={test1} name={"City dreams"} year={"2021"} age={"+18"} time={"2h 36m"} detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}  />
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