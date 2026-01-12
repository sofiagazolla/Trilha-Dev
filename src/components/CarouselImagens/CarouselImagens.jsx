import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './CarouselImagens.css'

function CustomPaging() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`./carousel/${i + 1}.jpeg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="./carousel/1.jpeg" />
        </div>
        <div>
          <img src="./carousel/2.jpeg" />
        </div>
        <div>
          <img src="./carousel/3.jpeg" />
        </div>
        <div>
          <img src="./carousel/4.jpeg" />
        </div>
        <div>
          <img src="./carousel/5.jpeg" />
        </div>
        <div>
          <img src="./carousel/6.jpeg" />
        </div>
      </Slider>
    </div>
  );
}
export default CustomPaging;