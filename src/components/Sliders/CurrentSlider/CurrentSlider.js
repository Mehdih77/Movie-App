import Slider from "react-slick";
import "./CurrentSlider.css";

export default function CurrentSlider({children}) {

    const settings = {
        className: "center custom_current_slider",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
      };

    return ( 
    <div className='current_slider_arrows'> 
        <Slider {...settings}>
            {children}  
        </Slider> 
    </div>
    )
}