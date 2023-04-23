import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechNewsAsync } from '../../../redux/technology/technologySlice';
import TechnologyItem from './TechnologyItem';
import { v4 as uuidv4 } from 'uuid';
import '../../../styles/HeadlineList.css';

const TechnologyList = () => {
  const dispatch = useDispatch();
  const { technologies } = useSelector((state) => state.technology);

  useEffect(() => {
    dispatch(getTechNewsAsync());
  }, [dispatch]);

  const id = uuidv4();

  return (
    <div className="headlines-container">
      <h2 className="page-heading">TECH NEWS</h2>
      <div className="headline-list">
        {technologies.map((technology) => (
          <TechnologyItem
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

export default TechnologyList;
