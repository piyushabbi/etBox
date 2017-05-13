import React, { Component } from 'react';

import PopularSeries from '../popular/PopularSeries';

class Movies extends Component {
  render () {
    return (
      <div>
        <h1>Series Page</h1>
        {/* Sort Section */}

        {/* Movies Card Section */}
        <PopularSeries />
        {/* Pagination Section */}
      </div>
    );
  }
}

export default Movies;