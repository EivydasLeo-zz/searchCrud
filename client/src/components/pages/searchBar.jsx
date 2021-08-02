import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SearchBar extends Component {
  state = {};
  render() {
    return (
      <header className="header bg-light col-sm-12 ">
        <Link className="font text-decoration-none " to="/">
          Article <strong>search</strong>
        </Link>
        <form className="form-inline">
          <div className="container">
            <input className="form-control mt-4 mb-4" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn-form btn btn-primary ml-3 mr-3" type="submit">
              Search
            </button>
            <Link className="a-form" to="/search_history">
              Search History
            </Link>
            <Link className="a-form ml-3" to="/article_list">
              Article List
            </Link>
          </div>
        </form>
      </header>
    );
  }
}

export default SearchBar;
