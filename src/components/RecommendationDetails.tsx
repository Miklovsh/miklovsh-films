import { useEffect } from 'react';
import '../App.css';
import { useTypedSelector } from '../store/hooks/UseTypedSelector';
import { useActions } from '../store/hooks/UseActions';
import { useParams } from 'react-router-dom';



const RecommendationsDetails: React.FC = () => {
  const { error, loading, recommendations } = useTypedSelector(state => state.recommendations)
  const { genres } = useTypedSelector(state => state.genres)
  const { fetchRecommendations, fetchGenres } = useActions();
  const { id } = useParams()

  useEffect(() => {
    (fetchRecommendations());
    (fetchGenres())
  }, [])


  if (loading) {
    return <h1>Завантаження...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }



  return (
    <div className="Movie-details recommendation">
      {recommendations.map(recomend => {
        if (id == recomend.id) {
          return <div className="movie-details__wrapper" key={recomend.id}>
            <div className="movie-details__poster">
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${recomend.poster_path}`} alt="poster" />
            </div>
            <div className="movie-details__content">
              <h1 className="movie-details__content-title">{recomend.title}</h1>
              <h4 className="movie-details__content-date">Дата першого показу - {recomend.first_air_date}</h4>
              <div className="movie-details__content-categories">
                <h4 className="movie-details__content-category">Жанр: </h4>
                {genres.map(gener => {
                  for (let i = 0; i < recomend.genre_ids.length; i++) {
                    if (recomend.genre_ids[i] === gener.id) {
                      return <h4 className="movie-details__content-category">{gener.name}</h4>
                    }
                  }
                })}
              </div>
              <h4 className="movie-details__content-evaluation">Оцінка - {recomend.vote_average}</h4>
              <h2 className="movie-details__content-description-title">Опис</h2>
              <p className="movie-details__content-description-text">{recomend.overview}</p>
            </div>
          </div>
        }
      })}
    </div>
  );
}

export default RecommendationsDetails;