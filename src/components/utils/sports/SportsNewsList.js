import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSportsNewsAsync } from '../../../redux/sports/sportsSlice';
import SportsNewsItem from './SportNewsItem';
import { v4 as uuidv4 } from 'uuid';
import '../../../styles/HeadlineList.css';

const SportsNewsList = () => {
  const dispatch = useDispatch();
  const { sports } = useSelector((state) => state.sport);

  useEffect(() => {
    dispatch(getSportsNewsAsync());
  }, [dispatch]);

  const id = uuidv4();

  return (
    <div className="headlines-container">
      <h2 className="page-heading">SPORTS NEWS</h2>
      <div className="headline-list">
        {sports.map((technology) => (
          <SportsNewsItem
            key={id}
            title={technology.title}
            image={technology.urlToImage}
            author={technology.author}
            date={technology.publishedAt}
            description={technology.content}
            url={technology.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SportsNewsList;
