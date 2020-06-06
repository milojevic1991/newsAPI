import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainNewsGrid from '../../components/mainNewsGrid/MainNewsGrid';
import * as actions from '../../store/actions/topNews';
// import * as actionsCat from '../../store/actions/categories';

const TopNews = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.topNewsAction(state.topNewsReducer.isGB ? 'gb' : 'us'));
  }, [dispatch]);

  return <MainNewsGrid mainNewsData={state} isTopNews={true} />;
};

export default TopNews;
