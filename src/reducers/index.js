import { combineReducers } from 'redux';
import { movies, movieDetails, itemsIsLoading } from './items';

export default combineReducers({
  movies,
  movieDetails,
  itemsIsLoading
});