import {
  faSave, faTimes, faTrashAlt,
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
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTitleInput(event) {
    this.setState({ title: event.target.value });
  }

  handleContentInput(event) {
    this.setState({ content: event.target.value });
  }

  handleSave() {
    const { id, onSave } = this.props;
    const { title, content } = this.state;

    onSave({ id, title, content });
  }

  handleDelete() {
    const { id, onDelete } = this.props;

    onDelete(id);
  }

  render() {
    const { onClose } = this.props;
    const { title, content } = this.state;

    return (
      <div className="note">
        <div className="title-wrapper">
          <input
            type="text"
            className="title text"
            placeholder="Title"
            value={title}
            onChange={this.handleTitleInput}
          />
          <FontAwesomeIcon
            type="button"
            onClick={onClose}
            className="icon close"
            icon={faTimes}
          />
        </div>
        <div className="content-wrapper">
          <textarea
            className="content text"
            placeholder="Write something..."
            value={content}
            onChange={this.handleContentInput}
          />
        </div>
        <div className="icons">
          <FontAwesomeIcon
            type="button"
            onClick={this.handleSave}
            className="icon save"
            icon={faSave}
          />
          <FontAwesomeIcon
            type="button"
            onClick={this.handleDelete}
            className="icon delete"
            icon={faTrashAlt}
          />
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
