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
      console.log('FETC SUCCESS REDUCER', action.payload);
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
      console.log('read dataaa', action.payload);

      const newsItemFull = state.topNewsData.filter((item) => {
        return item.title === action.payload;
      });
      console.log('newsItemFull', newsItemFull);

      return {
        ...state,
        articleData: [...newsItemFull],
        fullView: true,
      };

    case actionsType.SEARCH:
      console.log('SEARCH ', action.payload);

      return {
        ...state,
        searchTerm: action.payload,
        searchResults: state.topNewsData.filter((searchItem) =>
          searchItem.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default topNewsReducer;
