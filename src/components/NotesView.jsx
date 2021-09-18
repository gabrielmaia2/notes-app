import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './NoteList';

import '../styles/notes-view.css';
import Note from './Note';

export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNote: undefined,
    };

    this.handleCloseNote = this.handleCloseNote.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    await this.handleSearch('');
  }

  handleCloseNote() {
    this.setState({ currentNote: undefined });
  }

  handleNewNote() {
    this.setState({ currentNote: { id: '-1', title: '', content: '' } });
  }

  async handleSearch(search) {
    try {
      const { data: { err, notes } } = await axios.post('/notes/getPreviews', { search });

      if (err) console.log(err);
      else this.setState({ notes });
    } catch (err) {
      console.log(err);
    }
  }

  async handleGet(id) {
    try {
      const { data: { err, note } } = await axios.post('/notes/get', { id });

      if (err) console.log(err);
      else this.setState({ currentNote: note });
    } catch (err) {
      console.log(err);
    }
  }

  async handleSave({ id, title, content }) {
    try {
      let res;
      if (id === '-1') {
        const tags = [];
        res = await axios.post('/notes/post', { title, content, tags });
        const { data: { id: newId, title: newTitle, content: newContent } } = res;

        this.setState({ currentNote: { id: newId, title: newTitle, content: newContent } });
      } else {
        res = await axios.put('/notes/put', { id, title, content });
      }

      await this.handleSearch('');
      const { data: { err } } = res;
      if (err) console.log(err);
    } catch (err) {
      console.log(err);
    }
  }

  async handleDelete(id) {
    if (id === '-1') {
      this.setState({ currentNote: undefined });
      return;
    }

    try {
      const { err } = await axios.post('/notes/delete', { id });
      await this.handleSearch('');
      if (err) console.log(err);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { notes, currentNote } = this.state;

    let currentNoteView;
    if (currentNote) {
      const { id, title, content } = currentNote;
      currentNoteView = (
        <div className="current-note">
          <Note
            id={id}
            title={title}
            content={content}
            onSave={this.handleSave}
            onDelete={this.handleDelete}
            onClose={this.handleCloseNote}
          />
        </div>
      );
    }

    return (
      <div className="notes-view">
        {currentNoteView}
        <NoteList notes={notes} onClick={this.handleGet} onDelete={this.handleDelete} />
        <FontAwesomeIcon
          type="button"
          onClick={this.handleNewNote}
          className="add-button"
          icon={faPlus}
        />
      </div>
    );
  }
}
