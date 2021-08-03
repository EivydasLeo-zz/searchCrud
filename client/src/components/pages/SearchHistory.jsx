import React, { Component } from 'react';
import { getSearchResults } from './../../service/fetchData';

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
    };
  }

  async getSearchData() {
    const searchRes = await getSearchResults();
    this.setState({ searchData: searchRes });
  }

  componentDidMount() {
    this.getSearchData();
  }

  render() {
    return (
      <div className="searchHistory-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Searched Article Title:</th>
            </tr>
          </thead>
          <tbody>
            {this.state.searchData.map((obj, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{obj.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchHistory;
