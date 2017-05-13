import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Popular from './components/popular/PopularMovies';
import Movies from './components/movies/Movies';
import Series from './components/series/Series';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/HomePage';
import HeaderNav from './components/headerNav/HeaderNav';
import MovieDetails from './components/details/MovieDetails';
import SeriesDetails from './components/details/SeriesDetails';

class App extends React.Component {
  render() { 
    return (
      <main>
        <HeaderNav />
        { this.props.children }
      </main>
    );
  }
};

/* Render Root Component */
render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="/movies" component={ Movies } />
      <Route path="/series" component={ Series } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/series/:id" component={ SeriesDetails } />
      <Route path="*" component={ NotFound } />
    </Route>
  </Router>, 
  document.getElementById('root')
);
