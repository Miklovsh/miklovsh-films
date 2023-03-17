import '../App.css';
import MoviesCard from './MoviesCard';

const MoviesFavorites = () => {

  return (
    <div className="Movies-favorites">
      <div className="movies-favorites__wrapper">
        <h2 className="movies-favorites__message">У вас немає обраних фільмів</h2>
        {/* <MoviesCard /> */}
      </div>
    </div>
  );
}

export default MoviesFavorites;