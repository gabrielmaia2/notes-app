import {
  faSave, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/note.css';

export default class Note extends Component {
  constructor(props) {
    super(props);

    const { title, content } = this.props;
    this.state = { title, content };

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
  }

  handleTitleInput(event) {
    this.setState({ title: event.target.value });
  }

  handleContentInput(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    const { title, content } = this.state;

    return (
      <div className="note">
        <input type="text" className="title" placeholder="Title" value={title} onChange={this.handleTitleInput} />
        <input type="text" className="content" placeholder="Write something..." value={content} onChange={this.handleContentInput} />
        <div className="icons">
          <FontAwesomeIcon className="icon save" icon={faSave} />
          <FontAwesomeIcon className="icon delete" icon={faTrashAlt} />
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
