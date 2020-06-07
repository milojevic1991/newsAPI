import * as actionsType from '../actions/actionsType';

const initialState = {
  topNewsData: [],
  articleData: [],
  searchResults: [],
  searchTerm: '',
  loading: false,
  finished: false,
  isGB: true,
  fullView: false,
};

const topNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case actionsType.FETCH_SUCCESS:
      return {
        ...state,
        topNewsData: [...action.payload],
        searchResults: [...action.payload],

        loading: false,
        finished: true,
        isGB: action.isGbData,
        fullView: false,
      };

    case actionsType.FETCH_ERROR:
      return {
        ...state,
        topNewsData: { ...action.payload },
        loading: false,
        finished: false,
      };

    case actionsType.READ_MORE_TOP_NEWS:
      const newsItemFull = state.topNewsData.filter(
        (item) => item.title === action.payload
      );

      return {
        ...state,
        articleData: [...newsItemFull],
        fullView: true,
      };

    case actionsType.READ_MORE_BTN_ENABLE:
      return {
        ...state,
        fullView: false,
      };

    case actionsType.SEARCH:
      const searchedRes = state.topNewsData.filter((searchItem) =>
        searchItem.title.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        searchTerm: action.payload,
        searchResults: [...searchedRes],
      };

    default:
      return state;
  }
};

export default topNewsReducer;
