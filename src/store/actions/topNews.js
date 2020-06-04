import * as actionsType from './actionsType';
import { newsAPI } from '../../api';
import axios from 'axios';

export const topNewsAction = (country) => {
  //   return {
  //     type: actionsType.TEST,
  //     payload: country,
  //   };

  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const result = await axios.get(newsAPI(country)).then((res) => res);
      dispatch(fetchSuccess(result.data.articles, country));
    } catch (error) {
      dispatch(fetchError(error));
    }

    //FAKE JSON
    //  const result = await axios
    //    .get('https://jsonplaceholder.typicode.com/posts')
    //    .then((res) => res);
    //  dispatch(fetchSuccess(result.data));
  };
};

export const fetchSuccess = (newsItems, countryData) => {
  return {
    type: actionsType.FETCH_SUCCESS,
    payload: newsItems,
    isGbData: countryData === 'gb' ? true : false,
  };
};

export const fetchStart = () => {
  return {
    type: actionsType.FETCH_START,
  };
};

export const fetchError = (error) => {
  return {
    type: actionsType.FETCH_ERROR,
    payload: error,
  };
};
