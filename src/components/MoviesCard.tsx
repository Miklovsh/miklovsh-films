import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const MoviesCard: React.FC = (movie: any) => {

  const url = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`

  return (
    <div className="Movies-сard">
      <div className="movies-card__wrapper">
        <NavLink className="movies-card__poster-link" to={`movie/${movie.id}`}><img className="movies-card__poster-img" src={url} alt="poster" /></NavLink>
        <NavLink className="movies-card__title-link" to={`movie/${movie.id}`}><h2 className="movies-card__title">{movie.title}</h2></NavLink>
        <button className="movies-card__favorite-add"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg></button>
      </div>
    </div>
  );
}

export default MoviesCard;