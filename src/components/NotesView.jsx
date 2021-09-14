import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import NoteList from './NoteList';

import '../styles/notes-view.css';

export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'note 1',
          content: 'Content 1',
        },
        {
          id: 2,
          title: 'note 2',
          content: 'Content 2',
        },
        {
          id: 3,
          title: 'note 3',
          content: 'Content 3',
        },
        {
          id: 4,
          title: 'note 4',
          content: 'Content 4',
        },
      ],
    };
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="notes-view">
        <NoteList notes={notes} onDelete={() => {}} />
        <FontAwesomeIcon
          type="button"
          onClick={() => {}}
          className="add-button"
          icon={faPlus}
        />
      </div>
    );
  }
}
