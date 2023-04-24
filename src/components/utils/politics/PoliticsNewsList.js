import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPoliticsNewsAsync } from '../../../redux/politics/politicsSlice';
import PoliticsNewsItem from './PoliticsNewsItem';
import { v4 as uuidv4 } from 'uuid';
import '../../../styles/HeadlineList.css';

const PoliticsNewsList = () => {
  const dispatch = useDispatch();
  const { politics } = useSelector((state) => state.politic);

  useEffect(() => {
    dispatch(getPoliticsNewsAsync());
  }, [dispatch]);

  return (
    <div className="headlines-container">
      <div className="page-header">
        <h2 className="page-heading">POLITICS NEWS</h2>
      </div>
      <div className="headline-list">
        {politics.map((politic) => (
          <PoliticsNewsItem
            key={politic.title}
            title={politic.title}
            image={politic.urlToImage}
            author={politic.author}
            date={politic.publishedAt}
            description={politic.content}
            url={politic.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PoliticsNewsList;
