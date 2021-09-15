// src/reducers/reducers.js
import { SET_FILTER, SET_MOVIES } from '../actions/actions';
import { combineReducers } from 'redux';

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  movies,
 visibilityFilter,
});

export default moviesApp;