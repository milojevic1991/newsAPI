import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NewsItemCategory.module.css';

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

NewsItemCategory.propTypes = {
  newsDataCat: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};
