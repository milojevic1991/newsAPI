import React, { useEffect } from 'react';
import NewsItem from '../../components/newsItem/NewsItem';
import classes from './TopNews.module.css';
import Loader from 'react-loader-spinner';
import { Route } from 'react-router-dom';

import Test from '../../test';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/topNews';

const TopNews = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.topNewsReducer);

  useEffect(() => {
    dispatch(actions.topNewsAction('gb'));
    console.log('top news container', state);
  }, [dispatch]);

  console.log('newsItems', state);

  return (
    <div className={classes.topNewsWrapp}>
      <h1>Top News from {state.isGB ? 'Great Britain' : 'USA'}</h1>

      {state.finished && !state.loading ? (
        <NewsItem topNewsData={state.topNewsArr} />
      ) : (
        <Loader type="Oval" color="#b0b0b0" height={100} width={100} />
      )}

      {/* <NewsItem topNewsData={state} /> */}
      {/* <Route path="/:id" component={Test}></Route> */}
    </div>
    // <Route path="/:id" component={Test}></Route>
  );
};

export default TopNews;
