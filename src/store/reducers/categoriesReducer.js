import * as actionsType from '../actions/actionsType';

const initialState = {
  cat: [],
  fullViewCat: [],
  fullViewCat: false,
  category: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.FETCH_START_CAT:
      return {
        ...state,
      };

    case actionsType.FETCH_SUCCESS_CAT:
      return {
        ...state,
        cat: [...action.payload],
        [action.category]: [...action.payload],
        category: action.category,
        fullView: false,
      };

    case actionsType.FETCH_ERROR_CAT:
      return {
        ...state,
        fullView: false,
      };

    case actionsType.READ_MORE_BTN_CAT:
      const newItemCatFull = state[action.category].filter(
        (item) => item.title === action.payload
      );

      return {
        ...state,
        fullViewCat: [...newItemCatFull],
        fullView: true,
      };

    case actionsType.READ_MORE_BTN_CAT_ENABLE:
      return {
        ...state,
        fullView: false,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
