import { useContext } from 'react';
import '../App.css';
import MoviesCard from './MoviesCard';
import Context from '../Context';

const Main: React.FC = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const value = useContext(Context);

  if (value.loading) {
    value.setLoading(true);
    return <h1>Завантаження...</h1>
  }

  if (value.error) {
    value.setError('Виникла помилка, спробуйте трохи пізніше!')
    return <h1>{value.error}</h1>
  }

  const SetMoviesPage = (page: number) => {
    value.setPage(page);
    return page
  }


  return (
    <div className="Main">
      <div className="main__wrapper">
        {value.movies.map((movie: any) =>
          <MoviesCard key={movie.id} {...movie} />
        )}
      </div>
      <div className="main__pagination">
        {pages.map(p =>
          <div className={p == value.page ? "main__pagination-number pagination-active" : "main__pagination-number"} onClick={() => SetMoviesPage(p)}>
            {p}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;