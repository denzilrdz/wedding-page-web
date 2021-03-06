import { HeaderReducerAction } from './header';

const initialState = {
  name: '',
};

const HeaderReducer = (state = initialState, action: HeaderReducerAction) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default HeaderReducer;
