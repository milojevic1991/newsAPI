import * as actionsType from './actionsType';
import { newsAPI } from '../../api';
import axios from 'axios';

export const topNewsAction = (country) => {
  return async (dispatch) => {
    dispatch(fetchStart());

    try {
      const result = await axios.get(newsAPI(country)).then((res) => res);
      dispatch(fetchSuccess(result.data.articles, country));
    } catch (error) {
      dispatch(fetchError(error));
    }
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

export const readMoreBtn = (title) => {
  return {
    type: actionsType.READ_MORE_TOP_NEWS,
    payload: title,
  };
};
//Enables country search - reminder
export const readMoreBtnEnable = () => {
  return {
    type: actionsType.READ_MORE_BTN_ENABLE,
  };
};

export const searchInput = (newsTitle) => {
  return {
    type: actionsType.SEARCH,
    payload: newsTitle,
  };
};
