import '../App.css';
import MoviesCard from './MoviesCard';


const Main = () => {

  return (
    <div className="Main">
      <div className="main__wrapper">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
    </div>
  );
}

export default Main;