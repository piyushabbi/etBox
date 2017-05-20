import { combineReducers } from 'redux';
import { movies, movieDetails, itemsIsLoading, series, seriesDetails } from './items';

export default combineReducers({
  movies,
  series,
  movieDetails,
  seriesDetails,
  itemsIsLoading
});