import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import TechnologyList from './components/utils/technology/TechnologyList';
import PoliticsNewsList from './components/utils/politics/PoliticsNewsList';
import SportsNewsList from './components/utils/sports/SportsNewsList';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology" element={<TechnologyList />} />
        <Route path="/politics" element={<PoliticsNewsList />} />
        <Route path="/sports" element={<SportsNewsList />} />
      </Routes>
    </div>
  );
}

export default App;
