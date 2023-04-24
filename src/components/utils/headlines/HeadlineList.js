import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopHeadlinesAsync } from '../../../redux/headlines/headlinesSlice';
import { v4 as uuidv4 } from 'uuid';
import HeadlineLink from './HeadlineLink';
import countries from '../contries';
import '../../../styles/HeadlineList.css';

const HeadlinesList = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const dispatch = useDispatch();
  const { headlines } = useSelector((state) => state.headline);

  useEffect(() => {
    dispatch(getTopHeadlinesAsync(selectedCountry));
  }, [dispatch, selectedCountry]);

  const handleChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    dispatch(getTopHeadlinesAsync(countryCode));
  };

  return (
    <div className="headlines-container">
      <div className="page-header">
        <h2 className="page-heading">YOUR HEADLINES</h2>
        <div className="filter-container">
          <label htmlFor="countries" className="filter-heading">
            Filter by country:
          </label>
          <select
            className="select-container"
            id="countries"
            value={selectedCountry}
            onChange={handleChange}
          >
            <option value="">--Select a country--</option>
            {countries.map((country) => (
              <option
                className="option"
                key={country.code}
                value={country.code}
              >
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="headline-list">
        {headlines.map((headline) => (
          <HeadlineLink
            key={uuidv4()}
            title={headline.title}
            image={headline.urlToImage}
            author={headline.author}
            date={headline.publishedAt}
            description={headline.content}
            url={headline.url}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadlinesList;
