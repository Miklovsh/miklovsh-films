import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import RecommendationDetails from './components/RecommendationDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import Context from './Context';
import FadeLoader from "react-spinners/FadeLoader";

const App: React.FC = () => {

  const [movies, setMovies] = useState<[]>([]);
  const [genres, setGenres] = useState<[]>([]);
  const [recommendations, setRecommendations] = useState<[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMovies, setErrorMovies] = useState<null | string>(null);
  const [errorRecomend, setErrorRecomend] = useState<null | string>(null);
  const [errorSearch, setErrorSearch] = useState<null | string>(null);

  async function fetchMovies(page: number = 1) {
    try {
      let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ebddff987af3641a51115c7e7984a474&language=uk-UA&page=${page}`, {
        params: { _page: page }
      })
      setMovies(response.data.results.slice(0, 9));
    } catch {
      setErrorMovies('Не вдалося завантажити список фільмів!');
    }
  }

  useEffect(() => {
    fetchMovies(page)
  }, [page])


  async function fetchGenres() {
    try {
      let response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=ebddff987af3641a51115c7e7984a474&language=uk-UA`)
      setGenres(response.data.genres);
    } catch { }
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  async function fetchRecommendations() {
    try {
      let response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=ebddff987af3641a51115c7e7984a474&language=uk-UA&page=1`)
      setRecommendations(response.data.results.slice(0, 10));
    } catch {
      setErrorRecomend('Не вдалося завантажити список рекомендації!');
    }
  }

  useEffect(() => {
    fetchRecommendations()
  }, [])


  const searchMovies = (e: any) => {
    if (e) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ebddff987af3641a51115c7e7984a474&language=uk-UA&query=${query}`).then((response) => {
        setMovies(response.data.results);
      }, (errorSearch) => {
        setErrorSearch('При пошуку виникла помилка!');
      })
    } if (query === '') {
      setErrorSearch('Введіть назву фільму!');
    }
  }


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


  const value = {
    movies,
    genres,
    recommendations,
    page,
    setPage,
    loading,
    setLoading,
    errorMovies,
    errorRecomend,
    searchMovies,
    errorSearch,
    query,
    setQuery
  }

  return (
    <Context.Provider value={value}>
      {loading ? (
        <div className="loading">
          <FadeLoader
            color={'#f1f1f1'}
            loading={loading}
          />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movie/:id/recommendation/:id" element={<RecommendationDetails />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Context.Provider>
  );
}

export default App;
