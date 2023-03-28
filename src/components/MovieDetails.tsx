import { useEffect } from 'react';
import '../App.css';
import MoviesRecommendations from './MoviesRecommendations';
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import { useActions } from '../store/hooks/UseActions';
import { NavLink, useParams } from 'react-router-dom';


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
      <NavLink className="movie-details__home" to={'/'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" fill='#f1f1f1' /></svg>На головну сторінку</NavLink>
      {movies.map(movie => {
        if (id == movie.id) {
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