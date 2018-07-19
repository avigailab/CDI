import { createStore } from 'redux';
import movies from '../data/data';
import conf from '../data/config';

const reducer = (state) => {
  return state;
};

const initialState = {
  movies,
  conf
};

window.store = createStore(reducer, initialState);

export default window.store;