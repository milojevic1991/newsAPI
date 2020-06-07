import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainNewsGrid from '../../components/mainNewsGrid/MainNewsGrid';
import * as actionsCat from '../../store/actions/categories';

/**
 * Top News Main component.Displays all the Top News from GB and USA.
 */

const TopNews = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCat.readMoreBtnCatEnable());
  }, [dispatch]);

  return <MainNewsGrid mainNewsData={state} isTopNews={true} />;
};

export default TopNews;
