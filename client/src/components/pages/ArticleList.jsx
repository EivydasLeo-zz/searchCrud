import React, { Component } from 'react';
import { getArticles, newSearch } from '../../service/fetchData';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async getAllArticles(value) {
    const articles = await getArticles(value);
    this.setState({ data: articles.articles });
  }

  componentDidMount() {
    const value = this.props.match.params.search ?? 'covid';
    console.log(this.props);
    console.log(value);
    const objToSend = {
      title: value,
    };

    newSearch(objToSend);
    this.getAllArticles(value);
  }

  render() {
    return (
      <div className="container articles mt-4">
        <h2 className="articles-h2 text-center mb-4 ">
          <strong>Articles collection</strong>
        </h2>
        <div className="row justify-content-between">
          {this.state.data.map((obj, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 w-80 card one-article">
              <img className="card-img-top" alt="..." src={obj.urlToImage} />
              <div className="card-body">
                <h5 className="card-title">{obj.title}</h5>
                <p className="card-text">{obj.description}</p>
                <p className="card-text text-muted">{obj.publishedAt}</p>
                <a href={obj.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Go to original article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Article;
