import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Reddit from '../image/reddit-icon.png'

export default class Posts extends Component {
  render() { 
    return (
      <div class="row row-cols-1 row-cols-md-2">
        {this.props.posts.map((post, i) => (
          <div className="col mb-4">
            <div className="card" key={i}>
              <div class="row no-gutters">
                <div class="col-md-4">
                <img src={Reddit} className="card-img-top" height='100' width='50' alt="reddit-icon"/>
                </div>
                <div class="col-md-6">
                <div className="card-body">
                  <h5 className="card-title"><b>Subreddit: </b>{post.subreddit}</h5>
                  <p className="card-text">{post.title}</p>
                  <Button color="link" onClick={post.url}>Read</Button>
                  <p class="card-text"><small className="text-muted">{new Date().toLocaleTimeString()}.{' '}</small></p>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}