import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/pages/searchBar';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
