import { useContext } from 'react';
import '../App.css';
import MoviesCard from './MoviesCard';
import Context from '../Context';

const Main: React.FC = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const value = useContext(Context);

  const SetMoviesPage = (page: number) => {
    value.setPage(page);
    return page
  }


  return (
    <div className="Main">
      <div className="main__search">
        <button className="main__search-btn" onClick={value.searchMovies}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill='#ED1B24' /></svg></button>
        <input className="main__search-input" onChange={e => value.setQuery(e.target.value)} value={value.query} type="text" placeholder="Пошук" />
      </div>
      {value.errorSearch && (
        <h1 className="error">{value.errorSearch}</h1>
      )}
      <div className="main__wrapper">
        {value.errorMovies && (
          <h1 className="error">{value.errorMovies}</h1>
        )}
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