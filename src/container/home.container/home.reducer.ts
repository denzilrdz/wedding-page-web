import { HomeReducerAction } from './home';

const initialState = {
  count: 0,
};

const HomeReducer = (state = initialState, action: HomeReducerAction) => {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
