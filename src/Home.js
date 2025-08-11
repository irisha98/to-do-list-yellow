import './App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';

const slides = [
        {src:process.env.PUBLIC_URL + '/images/mood.jpg', alt:'picture'},
        {src:process.env.PUBLIC_URL +'/images/inspiration.jpg', alt:'picture'},
        {src:process.env.PUBLIC_URL +'/images/planner.jpg', alt:'picture'},
        {src:process.env.PUBLIC_URL +'/images/recipes.jpg', alt:'picture'}
    ]
function Home () {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
    return <div className='home'>
        <h1>SelfCare Space</h1>
        <p>Your cozy space for self-care</p>
         <div className="slider-wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="slide-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
}
 export default Home;