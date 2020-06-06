import React, { useEffect } from 'react';
import NewsItem from '../../components/newsItem/NewsItem';
import classes from './MainNewsGrid.module.css';
import Loader from 'react-loader-spinner';
import Title from '../UI/title/Title';
import Wrapper from '../UI/wrapper/Wrapper';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

import { useParams } from 'react-router';

const MainNewsGrid = ({ mainNewsData, isTopNews }) => {
  const { cat } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.topNewsReducer);

  useEffect(() => {
    dispatch(actions.topNewsAction(state.isGB ? 'gb' : 'us'));
    dispatch(actionsCat.categoriesAction(state.isGB ? 'gb' : 'us', cat));
  }, [dispatch]);

  return (
    <Wrapper>
      <Title
        title={`Top News from`}
        country={state.isGB ? 'Great Britain' : 'USA'}
      />

      {mainNewsData.topNewsReducer.finished &&
      !mainNewsData.topNewsReducer.loading ? (
        <NewsItem
          topNewsData={
            isTopNews
              ? mainNewsData.topNewsReducer.topNewsData
              : mainNewsData.categoriesReducer[cat]
          }
        />
      ) : (
        <Loader type="Oval" color="#b0b0b0" height={100} width={100} />
      )}
    </Wrapper>
  );
};

export default MainNewsGrid;
