import React, { Component } from 'react';

import PopularMovies from '../popular/PopularMovies';

class Movies extends Component {
  render () {
    return (
      <div>
        <h1>Movies Page</h1>
        {/* Sort Section */}

        {/* Movies Card Section */}
        <PopularMovies />
        
        {/* Pagination Section */}
        <div className="container">
          <ul className="pagination">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Movies;