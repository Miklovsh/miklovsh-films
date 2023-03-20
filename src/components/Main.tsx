import { useEffect } from 'react';
import '../App.css';
import { useActions } from '../store/hooks/UseActions';
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import MoviesCard from './MoviesCard';


const Main: React.FC = () => {
  const { movies, loading, error } = useTypedSelector(state => state.movies)
  const { fetchMovies } = useActions()

  useEffect(() => {
    (fetchMovies())
  }, [])

  if (loading) {
    return <h1>Завантаження...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="Main">
      <div className="main__wrapper">
        {movies.map((movie, index) => {
          return <MoviesCard key={index} {...movie} />
        })}
      </div>
    </div>
  );
}

export default Main;