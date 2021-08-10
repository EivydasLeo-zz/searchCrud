import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { Switch, Route } from 'react-router';
import Article from './components/pages/ArticleList';
import SearchHistory from './components/pages/SearchHistory';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="main-container">
          <Switch>
            <Route path="/article_list/:search" component={Article}></Route>
            <Route path="/search_history" component={SearchHistory}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
