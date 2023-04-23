import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopHeadlinesAsync } from '../../../redux/headlines/headlinesSlice';
import HeadlineLink from './HeadlineLink';
import { v4 as uuidv4 } from 'uuid';
import '../../../styles/HeadlineList.css';

const HeadlinesList = () => {
  const dispatch = useDispatch();
  const { headlines } = useSelector((state) => state.headline);

  useEffect(() => {
    dispatch(getTopHeadlinesAsync());
  }, [dispatch]);

  const id = uuidv4();

  return (
    <div className="headlines-container">
      <h2 className="page-heading">YOUR HEADLINES</h2>
      <div className="headline-list">
        {headlines.map((headline) => (
          <HeadlineLink
            key={id}
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
