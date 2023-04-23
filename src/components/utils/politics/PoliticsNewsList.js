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

  const id = uuidv4();

  return (
    <div className="headlines-container">
      <h2 className="page-heading">TECH NEWS</h2>
      <div className="headline-list">
        {politics.map((politic) => (
          <PoliticsNewsItem
            key={id}
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
