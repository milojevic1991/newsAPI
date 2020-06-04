import * as actionsType from '../actions/actionsType';

const initialState = {
  topNewsArr: [],
  loading: false,
  finished: false,
  isGB: false,
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
        topNewsArr: { ...action.payload },
        loading: false,
        finished: true,
        isGB: action.isGbData,
      };
    case actionsType.FETCH_ERROR:
      return {
        ...state,
        topNewsArr: { ...action.payload },
        loading: false,
        finished: false,
      };

    default:
      return state;
  }
};

export default topNewsReducer;
