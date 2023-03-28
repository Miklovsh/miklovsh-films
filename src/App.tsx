import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import RecommendationDetails from './components/RecommendationDetails';
import { Routes, Route } from 'react-router-dom';


const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/recommendation/:id" element={<RecommendationDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
