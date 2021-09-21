import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';

import '../styles/tag-bar.css';

export default class TagBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  render() {
    const { onClickTag } = this.props;
    const { tags } = this.state;

    const tagsList = tags.map((tag) => <Tag tag={tag} onClick={() => onClickTag(tag)} />);

    return (
      <div className="tag-bar">
        <div className="title">Tags</div>
        <div className="list">
          <Tag tag="All" onClick={() => onClickTag('')} />
          {tagsList}
        </div>
      </div>
    );
  }
}

TagBar.propTypes = {
  onClickTag: PropTypes.func.isRequired,
};
