import React, { Component } from 'react';

import PopularMovies from '../popular/PopularMovies';
import PopularSeries from '../popular/PopularSeries';

class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>This is home page</h1>
        <PopularMovies />
        <hr />
        <PopularSeries />
      </div>
    );
  }
}

export default HomePage;