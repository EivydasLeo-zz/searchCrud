import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { newSearch } from '../service/fetchData';

class SearchBar extends Component {
  state = {
    title: '',
  };

  handleSearchTitle = (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const objToSend = {
      title: this.state.title,
    };

    newSearch(objToSend);

    // const history = this.props.history;
    // history.push('/article_list');
    // console.log('I will send this ', objToSend);
  };

  render() {
    return (
      <header className="header bg-light col-sm-12 ">
        <Link className="font text-decoration-none " to="/">
          Article <strong>search</strong>
        </Link>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="container">
            <input
              className="form-control mt-4 mb-4"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={this.state.title}
              onChange={this.handleSearchTitle}
            />
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
