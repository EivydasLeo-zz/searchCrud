import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/pages/SearchBar';
import { Switch, Route } from 'react-router';
import Article from './components/pages/ArticleList';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="main-container">
          <Switch>
            <Route path="/article_list" component={Article}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
