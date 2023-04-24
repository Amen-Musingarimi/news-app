import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSportsNewsAsync } from '../../../redux/sports/sportsSlice';
import SportsNewsItem from './SportNewsItem';
import sportsArray from '../sports';
import '../../../styles/HeadlineList.css';

const SportsNewsList = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedTournament, setSelectedTournament] = useState('laliga');
  const dispatch = useDispatch();
  const { sports } = useSelector((state) => state.sport);

  useEffect(() => {
    if (selectedTournament !== '') {
      dispatch(getSportsNewsAsync(selectedTournament));
    }
  }, [dispatch, selectedTournament]);

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
    setSelectedTournament('');
  };

  const handleTournamentChange = (event) => {
    setSelectedTournament(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedTournament !== '') {
      dispatch(getSportsNewsAsync(selectedTournament));
    }
  };

  return (
    <div className="headlines-container">
      <div className="page-header">
        <h2 className="page-heading">YOUR HEADLINES</h2>
        <div className="filter-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="sports" className="filter-heading">
              Filter by sport:
            </label>
            <select
              className="select-container"
              id="sports"
              value={selectedSport}
              onChange={handleSportChange}
            >
              <option value="">--Select a sport--</option>
              {Object.keys(sportsArray).map((sport) => (
                <option className="option" key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
            {selectedSport && (
              <select
                className="select-container"
                id="tournaments"
                value={selectedTournament}
                onChange={handleTournamentChange}
              >
                <option value="">--Select a tournament--</option>
                {Object.keys(sportsArray[selectedSport]).map((tournament) => (
                  <option
                    className="option"
                    key={tournament}
                    value={sportsArray[selectedSport][tournament]}
                  >
                    {tournament}
                  </option>
                ))}
              </select>
            )}
          </form>
        </div>
      </div>
      {sports.length > 0 ? (
        <div className="headline-list">
          {sports.map((technology) => (
            <SportsNewsItem
              key={technology.title}
              title={technology.title}
              image={technology.urlToImage}
              author={technology.author}
              date={technology.publishedAt}
              description={technology.content}
              url={technology.url}
            />
          ))}
        </div>
      ) : (
        <p className="error-message">
          No sports news available for selected filters
        </p>
      )}
    </div>
  );
};

export default SportsNewsList;
