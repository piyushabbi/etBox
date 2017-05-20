// Reducer for fetching popular movies data
export const movies = (state=[], action) => {
  switch (action.type) {
    case 'POPULAR_MOVIES_FETCH_SUCCESS': {
      return action.movies;
    }
    default:
      return state;
  }
};

// Reducer for fetching movie details
export const movieDetails = (state={}, action) => {
  switch (action.type) {
    case 'MOVIE_DETAILS_FETCH_DATA_SUCCESS': 
      return Object.assign({}, ...state, action.movieDetails);
    
    default:
      return state;
  }
};

// Reducer for loading items
export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING': {
      return action.isLoading;
    }
    default:
      return state;
  }
};

// Reducer for fetching popular series data
export const series = (state=[], action) => {
  switch (action.type) {
    case 'POPULAR_SERIES_FETCH_SUCCESS': {
      return action.series;
    }
    default:
      return state;
  }
};