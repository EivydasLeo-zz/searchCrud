import React, { Component } from 'react';

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <header className="header bg-light col-sm-12 ">
        <a className="font text-decoration-none " href="/">
          Article <strong>search</strong>
        </a>
        <form className="form-inline">
          <div className="container">
            <input className="form-control mt-4 mb-4" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn-form btn btn-primary ml-3 mr-3" type="submit">
              Search
            </button>
            <a className="a-form" href="/">
              Search History
            </a>
          </div>
        </form>
      </header>
    );
  }
}

export default SearchBar;
