import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechNewsAsync } from '../../../redux/technology/technologySlice';
import TechnologyItem from './TechnologyItem';
import techCategories from '../techCategories';
import '../../../styles/HeadlineList.css';

const TechnologyList = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    'softwaredevelopment'
  );
  const dispatch = useDispatch();
  const { technologies } = useSelector((state) => state.technology);

  useEffect(() => {
    dispatch(getTechNewsAsync(selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleChange = (event) => {
    const category = event.target.value;
    console.log(category);
    setSelectedCategory(category);
    dispatch(getTechNewsAsync(category));
  };

  return (
    <div className="headlines-container">
      <div className="page-header">
        <h2 className="page-heading">TECH NEWS</h2>
        <div className="filter-container">
          <label htmlFor="countries" className="filter-heading">
            Filter by Tech Category:
          </label>
          <select
            className="select-container"
            id="categories"
            value={selectedCategory}
            onChange={handleChange}
          >
            <option value="">--Select a category--</option>
            {techCategories.map((category) => (
              <option
                className="option"
                key={category.code}
                value={category.code}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="headline-list">
        {technologies.map((technology) => (
          <TechnologyItem
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
    </div>
  );
};

export default TechnologyList;
