import { useEffect } from 'react';
import '../App.css';
import MoviesRecommendations from './MoviesRecommendations';
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import { useActions } from '../store/hooks/UseActions';
import { useParams } from 'react-router-dom';


const MovieDetails: React.FC = () => {
  const { page, error, loading, movies } = useTypedSelector(state => state.movies)
  const { genres } = useTypedSelector(state => state.genres)
  const { fetchMovies, fetchGenres } = useActions()
  const { id } = useParams();


  useEffect(() => {
    (fetchMovies(page));
    (fetchGenres())
  }, [page])


  if (loading) {
    return <h1>Завантаження...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="Movie-details">
      {movies.map(movie => {
        if (id == movie.id ) {
          return <div className="movie-details__wrapper" key={movie.id}>
            <div className="movie-details__poster">
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie-details__content">
              <h1 className="movie-details__content-title">{movie.title}</h1>
              <h4 className="movie-details__content-date">Реліз - {movie.release_date}</h4>
              <div className="movie-details__content-categories">
                <h4 className="movie-details__content-category">Жанр: </h4>
                {genres.map(gener => {
                  for (let i = 0; i < movie.genre_ids.length; i++) {
                    if (movie.genre_ids[i] === gener.id) {
                      return <h4 className="movie-details__content-category">{gener.name}</h4>
                    }
                  }
                })}
              </div>
              <h4 className="movie-details__content-evaluation">Оцінка - {movie.vote_average}</h4>
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