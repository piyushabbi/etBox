import React, { Component } from 'react';

import PopularMovies from '../popular/PopularMovies';
import PopularSeries from '../popular/PopularSeries';

class HomePage extends Component {
  render () {
    return (
      <div>
        <PopularMovies />
        <hr />
        <PopularSeries />
      </div>
    );
  }
}

export default HomePage;