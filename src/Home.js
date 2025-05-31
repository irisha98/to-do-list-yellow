import './App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';

import { useTranslation } from 'react-i18next';

const slides = [
        {src:process.env.PUBLIC_URL + '/images/mood.jpg', alt:'picture'},
        {src:process.env.PUBLIC_URL +'/images/inspiration.jpg', alt:'picture'},
        {src:process.env.PUBLIC_URL +'/images/planner.jpg', alt:'picture'},
        {src:process.env.PUBLIC_URL +'/images/recipes.jpg', alt:'picture'}
    ]
function Home () {
    const { t } = useTranslation();

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
        <h1>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
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