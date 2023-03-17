import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import MoviesFavorites from './components/MoviesFavorites';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <MoviesFavorites /> */}
      {/* <MovieDetails /> */}
      <Footer />
    </div>
  );
}

export default App;
