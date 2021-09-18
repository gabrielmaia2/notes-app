import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/note-preview.css';

export default class NotePreview extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { id, onDelete } = this.props;

    onDelete(id);
  }

  render() {
    const { title, content } = this.props;

    return (
      <div className="note-preview">
        <div className="title text">{title}</div>
        <div className="content text">
          {content}
          <div className="icons">
            <FontAwesomeIcon
              type="button"
              onClick={this.handleDelete}
              className="icon delete"
              icon={faTrashAlt}
            />
          </div>
        </div>
      </div>
    );
  }
}

NotePreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
