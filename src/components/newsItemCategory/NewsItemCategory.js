import React from 'react';
import classes from './NewsItemCategory.module.css';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/categories';

const NewsItemCategory = ({ newsDataCat, category }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.newsDataCatWrapp}>
        <div className={classes.newsDataCatHeader}>
          <img src={newsDataCat.urlToImage} />
        </div>
        <h4>{newsDataCat.title}</h4>
        <Link
          className={classes.newsItemLink}
          onClick={() =>
            dispatch(actions.readMoreBtnCat(newsDataCat.title, category))
          }
          // onClick={() => console.log('cao')}
          to={`/categories/${category}/${encodeURIComponent(
            newsDataCat.title
          )}`}
        >
          Read more...
        </Link>
      </div>
    </>
  );
};

export default NewsItemCategory;
