import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const MoviesCard: React.FC = (movie: any) => {

  return (
    <div className="Movies-сard">
      <div className="movies-card__wrapper">
        <NavLink className="movies-card__poster-link" to={`movie/${movie.id}`}><img className="movies-card__poster-img" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`} alt="poster" /></NavLink>
        <NavLink className="movies-card__title-link" to={`movie/${movie.id}`}><h2 className="movies-card__title">{movie.title}</h2></NavLink>
      </div>
    </div>
  );
}

export default MoviesCard;