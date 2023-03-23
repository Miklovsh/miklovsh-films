import { useEffect } from 'react';
import '../App.css';
import MoviesRecommendations from './MoviesRecommendations';
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import { useActions } from '../store/hooks/UseActions';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const { movies } = useTypedSelector(state => state.movies)
  const { fetchMovies } = useActions()
  const { id } = useParams();

  useEffect(() => {
    (fetchMovies())
  }, [])


  return (
    <div className="Movie-details">
      {movies.map(movie => {
        if (id == movie.id) {
          return <div className="movie-details__wrapper" key={movie.id}>
            <div className="movie-details__poster">
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie-details__content">
              <h1 className="movie-details__content-title">{movie.title}</h1>
              <h4 className="movie-details__content-date">Реліз - {movie.release_date}</h4>
              <h4 className="movie-details__content-category">Категорія: Бойовик, Фантастика, Трилер, Жахи</h4>
              <h4 className="movie-details__content-evaluation">Оцінка - {movie.vote_average}</h4>
              <h4 className="movie-details__content-diretion">Режисер: Tammy Klein, Glenn Campbell</h4>
              <h4 className="movie-details__content-role">В головній ролі: Maxi Witrak, Ego Mikitas, Tania Fox</h4>
              <h2 className="movie-details__content-description-title">Опис</h2>
              <p className="movie-details__content-description-text">{movie.overview}</p>
            </div>
          </div>
        }
      })}
      <MoviesRecommendations />
    </div>
  );
}

export default MovieDetails;