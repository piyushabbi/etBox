import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderNav extends Component {
  render () {
    return (
      <div>
        <Link to="/" className="btn btn-primary">Home</Link>
        <Link to="/popular" className="btn btn-primary">Popular</Link>
        <Link to="/movies" className="btn btn-primary">Movies</Link>
      </div>
    );
  }
}

export default HeaderNav;