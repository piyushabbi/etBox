import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Popular from './components/popular/PopularMovies';
import Movies from './components/movies/Movies';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/HomePage';
import HeaderNav from './components/headerNav/HeaderNav';
import MovieDetails from './components/details/MovieDetails';

/* CSS Files */
import * as PopularMoviesStyles from './components/popular/PopularMovies.scss';

class App extends React.Component {
  render() { 
    return (
      <div>
        <HeaderNav />
        { this.props.children }
      </div>
    );
  }
};

/* Render Root Component */
render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/popular" component={ Popular } />
      <Route path="/movies" component={ Movies } />
      <Route path="/popular/:id" component={ MovieDetails } />
      <Route path="*" component={ NotFound } />
    </Route>
  </Router>, 
  document.getElementById('root'));
