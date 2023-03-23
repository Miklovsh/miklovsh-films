import { useEffect } from 'react';
import '../App.css';
import { useActions } from '../store/hooks/UseActions';
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import MoviesCard from './MoviesCard';


const Main: React.FC = () => {
  const { page, error, loading, movies } = useTypedSelector(state => state.movies)
  const { fetchMovies, SetMoviesPage } = useActions()
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    (fetchMovies(page))
  }, [page])


  if (loading) {
    return <h1>Завантаження...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }


  return (
    <div className="Main">
      <div className="main__wrapper">
        {movies.map((movie: object, index: number) => {
          return <MoviesCard key={index} {...movie} />
        })}
      </div>
      <div className="main__pagination">
        {pages.map(p =>
          <div className={p == page ? "main__pagination-number pagination-active" : "main__pagination-number"} onClick={() => SetMoviesPage(p)}>
            {p}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;