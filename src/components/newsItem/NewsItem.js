import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import classes from './NewsItem.module.css';
import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

//Unique key
import shortid from 'shortid';

const NewsItem = ({ topNewsData }) => {
  const match = useRouteMatch();
  const { cat } = useParams();

  const dispatch = useDispatch();
  return (
    <>
      {topNewsData.map((newsData) => (
        <div key={shortid.generate()} className={classes.newsItemWrapp}>
          <div className={classes.newsItemHeader}>
            <img src={newsData.urlToImage} />
          </div>
          <div className={classes.newsItemText}>
            <h2>{newsData.title}</h2>
            <p>{newsData.description}</p>
          </div>
          <Link
            onClick={() =>
              dispatch(
                match.url.length === 1 || match.url == '/search'
                  ? actions.readMoreBtn(newsData.title)
                  : actionsCat.readMoreBtnCat(newsData.title, cat)
              )
            }
            //Match url and add slash if app has categories
            to={`${
              match.url.length === 1 ? match.url : match.url + '/'
            }${encodeURIComponent(newsData.title)}`}
          >
            Read more...
          </Link>
        </div>
      ))}
    </>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  topNewsData: PropTypes.array.isRequired,
};
