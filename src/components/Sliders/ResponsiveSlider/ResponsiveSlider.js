import Slider from "react-slick";

export default function ResponsiveSlider({children}) {

    var settings = {
        className: "mx-4",
        arrows: false,
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    return (
        <div>
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    )
}
