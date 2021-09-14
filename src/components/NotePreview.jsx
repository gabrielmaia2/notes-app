import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/note-preview.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotePreview extends Component {
  render() {
    const { title, content } = this.props;

    return (
      <div className="note">
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
