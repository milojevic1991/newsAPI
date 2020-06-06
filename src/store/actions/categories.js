import * as actionsType from './actionsType';
import { newsAPI } from '../../api';
import axios from 'axios';

export const categoriesAction = (country, category) => {
  //   return {
  //     type: actionsType.TEST,
  //     payload: country,
  //   };

  return async (dispatch) => {
    dispatch(fetchStartCat());

    try {
      const result = await axios
        .get(newsAPI(country, category))
        .then((res) => res);
      dispatch(fetchSuccessCat(result.data.articles, category));
    } catch (error) {
      dispatch(fetchErrorCat(error));
    }
  };
};

export const fetchSuccessCat = (catItems, category) => {
  return {
    type: actionsType.FETCH_SUCCESS_CAT,
    payload: catItems,
    category: category,
  };
};

export const fetchStartCat = () => {
  return {
    type: actionsType.FETCH_START_CAT,
  };
};

export const fetchErrorCat = (error) => {
  return {
    type: actionsType.FETCH_ERROR_CAT,
    payload: error,
  };
};

export const readMoreBtnCat = (title, category) => {
  return {
    type: actionsType.READ_MORE_BTN_CAT,
    payload: title,
    category: category,
  };
};

//Enagles Country search
export const readMoreBtnCatEnable = () => {
  return {
    type: actionsType.READ_MORE_BTN_CAT_ENABLE,
  };
};
