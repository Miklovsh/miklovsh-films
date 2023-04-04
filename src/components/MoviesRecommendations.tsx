import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../Context';


const MoviesRecommendations: React.FC = () => {
  const value = useContext(Context);


  return (
    <div className="Movies-recommendations">
      <div className="movies-recommendations__wrapper">
        <h3 className="movies-recommendations__title">Рекомендації</h3>
        {value.errorRecomend && (
          <h1 className="error">{value.errorRecomend}</h1>
        )}
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {value.recommendations.map((recomend: any) => {
            return <SwiperSlide>
              <NavLink className="movies-recommendations__img-link" to={`recommendation/${recomend.id}`}><img className="movies-recommendations__img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${recomend.backdrop_path}`} /></NavLink>
              <NavLink className="movies-recommendations__name-link" to={`recommendation/${recomend.id}`}><h2 className="movies-recommendations__name">{recomend.name}</h2></NavLink>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MoviesRecommendations;