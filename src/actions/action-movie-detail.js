import 'whatwg-fetch';
import { itemsIsLoading } from './action-loading';

// Action Creator for fetching details of movies
export const movieDetailsFetchDataSuccess = (movieDetails) => {
  return {
    type: 'MOVIE_DETAILS_FETCH_DATA_SUCCESS',
    movieDetails
  };
};

// Fetch Call for fetching details
export const fetchMovieDetailsData = (path) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(path)
      .then(response => {
        Promise.resolve(response.json())
        .then(response => {
          console.log('Movie Details ', response);
          dispatch(itemsIsLoading(false));
          dispatch(movieDetailsFetchDataSuccess(response));
        })
      })
      .catch((err)=> {
        console.log('Error ', err)
      })
  };
};