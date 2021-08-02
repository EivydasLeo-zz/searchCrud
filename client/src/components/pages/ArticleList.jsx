import React, { Component } from 'react';

class Article extends Component {
  state = {};
  render() {
    return (
      <div className="container articles mt-4">
        <h2 className="articles-h2 text-center mb-4 ">
          <strong>Articles collection</strong>
        </h2>
        <div>
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-6 col-lg-4 w-80 card one-article">
              <img className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">description</p>
                <p className="card-text text-muted">publishedAt</p>
                <a href="/" target="_blank" rel="noreferrer" className="btn btn-primary">
                  Go to original article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
