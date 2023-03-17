import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";


const MoviesRecommendations = () => {
  return (
    <div className="Movies-recommendations">
      <div className="movies-recommendations__wrapper">
        <h3 className="movies-recommendations__title">Рекомендації</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a className="movies-recommendations__img-link" href="#"><img className="movies-recommendations__img" src="./test-recomend.jpg" /></a>
            <a className="movies-recommendations__name-link" href='#'><h2 className="movies-recommendations__name">Сталевий алхімік: Помста Шрама (2022)</h2></a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="movies-recommendations__img-link" href="#"><img className="movies-recommendations__img" src="./test-recomend.jpg" /></a>
            <a className="movies-recommendations__name-link" href='#'><h2 className="movies-recommendations__name">Сталевий алхімік: Помста Шрама (2022)</h2></a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="movies-recommendations__img-link" href="#"><img className="movies-recommendations__img" src="./test-recomend.jpg" /></a>
            <a className="movies-recommendations__name-link" href='#'><h2 className="movies-recommendations__name">Сталевий алхімік: Помста Шрама (2022)</h2></a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="movies-recommendations__img-link" href="#"><img className="movies-recommendations__img" src="./test-recomend.jpg" /></a>
            <a className="movies-recommendations__name-link" href='#'><h2 className="movies-recommendations__name">Сталевий алхімік: Помста Шрама (2022)</h2></a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="movies-recommendations__img-link" href="#"><img className="movies-recommendations__img" src="./test-recomend.jpg" /></a>
            <a className="movies-recommendations__name-link" href='#'><h2 className="movies-recommendations__name">Сталевий алхімік: Помста Шрама (2022)</h2></a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="movies-recommendations__img-link" href="#"><img className="movies-recommendations__img" src="./test-recomend.jpg" /></a>
            <a className="movies-recommendations__name-link" href='#'><h2 className="movies-recommendations__name">Сталевий алхімік: Помста Шрама (2022)</h2></a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MoviesRecommendations;