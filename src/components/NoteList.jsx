import React from 'react';
import PropTypes from 'prop-types';
import NotePreview from './NotePreview';

import '../styles/note-list.css';

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;

export default function NoteList({ notes, onDelete }) {
  const noteList = notes.map((note) => {
    const { id, title, content } = note;

    return (
      <NotePreview
        key={id}
        title={title}
        content={content}
        onDelete={async () => { await onDelete(id); }}
      />
    );
  });

  return (
    <div className="notes-list">
      {noteList}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.instanceOf(AsyncFunction).isRequired,
};
