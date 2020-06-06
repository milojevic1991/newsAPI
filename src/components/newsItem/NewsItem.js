import React from 'react';
import classes from './NewsItem.module.css';
import { useRouteMatch, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

const NewsItem = ({ topNewsData }) => {
  const match = useRouteMatch();
  const { cat } = useParams();

  console.log('match u news item', match.url);
  const dispatch = useDispatch();
  return (
    <>
      {topNewsData.map((newsData, index) => (
        <div className={classes.newsItemWrapp}>
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
            // to={`/${encodeURIComponent(newsData.title)}`}

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
