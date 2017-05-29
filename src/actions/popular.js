import 'whatwg-fetch';
import { itemsIsLoading } from './action-loading';

// Action Creator for fetching popular movies
export const popularMoviesFetchDataSuccess = (movies) => {
  return {
    type: 'POPULAR_MOVIES_FETCH_SUCCESS',
    movies
  };
};

export const fetchPopularMoviesData = (path) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(path)
      .then(response => {
        Promise.resolve(response.json()).then(response => {
          console.log('Popular Movie Details ', response);
          dispatch(itemsIsLoading(false));
          dispatch(popularMoviesFetchDataSuccess(response.results));
        })
      })
      .catch((err)=> {
        console.log('Error ', err)
      })
  };
};

/**
 * ********************************************************************************************
 * ********************************************************************************************
 */

// Action Creator for fetching popular series
export const popularSeriesFetchDataSuccess = (series) => {
  return {
    type: 'POPULAR_SERIES_FETCH_SUCCESS',
    series
  };
};

export const fetchPopularSeriesData = (path) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(path)
      .then(response => {
        Promise.resolve(response.json()).then(response => {
          console.log('Popular Series Details ', response);
          dispatch(itemsIsLoading(false));
          dispatch(popularSeriesFetchDataSuccess(response.results));
        })
      })
      .catch((err)=> {
        console.log('Error ', err)
      })
  };
};
