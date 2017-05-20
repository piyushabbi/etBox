import 'whatwg-fetch';
import { itemsIsLoading } from './action-loading';

// Action Creator for fetching details of series
export const seriesDetailsFetchDataSuccess = (seriesDetails) => {
  return {
    type: 'SERIES_DETAILS_FETCH_DATA_SUCCESS',
    seriesDetails
  };
};

// Fetch Call for fetching details
export const fetchSeriesDetailsData = (path) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(path)
      .then(response => {
        Promise.resolve(response.json())
        .then(response => {
          console.log('Series Details ', response);
          dispatch(itemsIsLoading(false));
          dispatch(seriesDetailsFetchDataSuccess(response));
        })
      })
      .catch((err)=> {
        console.log('Error ', err)
      })
  };
};