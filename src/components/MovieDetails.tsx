import '../App.css';
import MoviesRecommendations from './MoviesRecommendations';

const MovieDetails = () => {

  // const url = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/movie.poster_path`

  return (
    <div className="Movie-details">
      <div className="movie-details__wrapper">
        <div className="movie-details__poster">
          <img src="./test-detail.jpg" alt="poster" />
        </div>
        <div className="movie-details__content">
          <h1 className="movie-details__content-title">435</h1>
          <h4 className="movie-details__content-date">Реліз - 12/08/2022</h4>
          <h4 className="movie-details__content-category">Категорія: Бойовик, Фантастика, Трилер, Жахи</h4>
          <h4 className="movie-details__content-evaluation">Оцінка - 6.5</h4>
          <h4 className="movie-details__content-diretion">Режисер: Tammy Klein, Glenn Campbell</h4>
          <h4 className="movie-details__content-role">В головній ролі: Maxi Witrak, Ego Mikitas, Tania Fox</h4>
          <h2 className="movie-details__content-description-title">Опис</h2>
          <p className="movie-details__content-description-text">Decades ago, the USSR developed unkillable sharks and launched them to the moon. Today, a team of American astronauts will endure the fight of their lives.</p>
        </div>
      </div>
      <MoviesRecommendations />
    </div>
  );
}

export default MovieDetails;