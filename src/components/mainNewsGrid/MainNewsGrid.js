import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import NewsItem from '../../components/newsItem/NewsItem';
import Title from '../UI/title/Title';
import Wrapper from '../UI/wrapper/Wrapper';
import Loader from 'react-loader-spinner';

import * as actions from '../../store/actions/topNews';
import * as actionsCat from '../../store/actions/categories';

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

MainNewsGrid.propTypes = {
  mainNewsData: PropTypes.object.isRequired,
  isTopNews: PropTypes.bool.isRequired,
};
