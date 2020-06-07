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

/**
 * Main component for displaying top news(NewsItem component).
 */

const MainNewsGrid = ({ mainNewsData, isTopNews }) => {
  const state = useSelector((state) => state.topNewsReducer);
  const stateCat = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const { cat } = useParams();

  useEffect(() => {
    //When render, checks if url containts "Category" path.
    dispatch(
      cat === undefined
        ? actions.topNewsAction(state.isGB ? 'gb' : 'us')
        : actionsCat.categoriesAction(state.isGB ? 'gb' : 'us', cat)
    );

    // dispatch(actions.topNewsAction(state.isGB ? 'gb' : 'us'));
    // dispatch(actionsCat.categoriesAction(state.isGB ? 'gb' : 'us', cat));
  }, [dispatch]);

  return (
    <Wrapper>
      <Title
        category={
          cat !== undefined && cat.includes(stateCat.category)
            ? cat[0].toUpperCase() + cat.slice(1) + '-'
            : ''
        }
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
