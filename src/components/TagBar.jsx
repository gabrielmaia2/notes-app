import React, { Component } from 'react';

import '../styles/tag-bar.css';

export default class TagBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  render() {
    const { tags } = this.state;

    const tagsList = tags.map((tag) => <div>{tag}</div>);

    return (
      <div className="tag-bar">
        <div className="title">Tags</div>
        <div className="list">
          {tagsList}
        </div>
      </div>
    );
  }
}
