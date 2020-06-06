import React, { useState, useEffect, useCallback } from 'react';

import SearchInput from '../../components/UI/searchInput/SearchInput';
import Loader from 'react-loader-spinner';
import * as actions from '../../store/actions/topNews';

import { useSelector, useDispatch } from 'react-redux';
import NewsItem from '../../components/newsItem/NewsItem';
import Wrapper from '../../components/UI/wrapper/Wrapper';
import Title from '../../components/UI/title/Title';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const state = useSelector((state) => state.topNewsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.topNewsAction(state.isGB ? 'gb' : 'us'));
  }, [dispatch]);

  useEffect(() => {}, [state]);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    dispatch(actions.searchInput(value));
    setSearchValue(value);
    console.log(value);
  };

  const searchResults =
    state.finished && !state.loading ? (
      <NewsItem topNewsData={state.searchResults} />
    ) : (
      <Loader type="Oval" color="#b0b0b0" height={100} width={100} />
    );

  return (
    <Wrapper>
      <Title
        title={'Search latest news from'}
        country={state.isGB ? 'Great Britain' : 'USA'}
      />
      <SearchInput onChange={onChangeHandler} value={searchValue} />
      <Wrapper overflowOn={false}>
        {state.searchTerm.length !== 0 && state.searchResults.length === 0 ? (
          <Title
            style={{ fontSize: '13px' }}
            title={'Hmm, it seems that there is no article with this term.'}
            // country={state.isGB ? 'Great Britain' : 'USA'}
          />
        ) : (
          searchResults
        )}

        {/* {state.finished && !state.loading ? (
          <NewsItem topNewsData={state.searchResults} />
        ) : (
          <Loader type="Oval" color="#b0b0b0" height={100} width={100} />
        )} */}
      </Wrapper>
    </Wrapper>
  );
};

export default Search;
