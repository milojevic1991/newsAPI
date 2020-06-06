import React, { useEffect } from 'react';
import NewsItem from '../../components/newsItem/NewsItem';
import classes from './TopNews.module.css';
import Loader from 'react-loader-spinner';
import { Route } from 'react-router-dom';

import MainNewsGrid from '../../components/mainNewsGrid/MainNewsGrid';

import Test from '../../test';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

const TopNews = () => {
  // const { cat } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    // dispatch(actions.topNewsAction('gb'));
    dispatch(actions.topNewsAction(state.topNewsReducer.isGB ? 'gb' : 'us'));
  }, [dispatch]);

  //
  return <MainNewsGrid mainNewsData={state} isTopNews={true} />;
};

export default TopNews;
