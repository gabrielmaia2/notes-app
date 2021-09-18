import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/note-preview.css';

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;

export default function NotePreview({
  title, content, onDelete,
}) {
  return (
    <div className="note-preview">
      <div className="title text">{title}</div>
      <div className="content text">
        {content}
        <div className="icons">
          <FontAwesomeIcon
            type="button"
            onClick={onDelete}
            className="icon delete"
            icon={faTrashAlt}
          />
        </div>
      </div>
    </div>
  );
}

NotePreview.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.instanceOf(AsyncFunction).isRequired,
};
