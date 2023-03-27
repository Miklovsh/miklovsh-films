import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import { useActions } from '../store/hooks/UseActions';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const MoviesRecommendations: React.FC = () => {
  const { error, loading, recommendations } = useTypedSelector(state => state.recommendations)
  const { fetchRecommendations } = useActions()

  useEffect(() => {
    (fetchRecommendations());
  }, [])


  if (loading) {
    return <h1>Завантаження...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }


  return (
    <div className="Movies-recommendations">
      <div className="movies-recommendations__wrapper">
        <h3 className="movies-recommendations__title">Рекомендації</h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {recommendations.map(recomend => {
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