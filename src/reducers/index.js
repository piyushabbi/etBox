import { combineReducers } from 'redux';
import { movies, movieDetails, itemsIsLoading, series } from './items';

export default combineReducers({
  movies,
  series,
  movieDetails,
  itemsIsLoading
});