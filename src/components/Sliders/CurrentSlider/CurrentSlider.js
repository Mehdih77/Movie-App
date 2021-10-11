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
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
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