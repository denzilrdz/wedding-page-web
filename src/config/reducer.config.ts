import { combineReducers } from 'redux';
import header from '../components/header/header.reducer';
import home from '../container/home.container/home.reducer';

const reducer = {
  header,
  home,
};

const combinedReducers = combineReducers(reducer);

export default combinedReducers;
