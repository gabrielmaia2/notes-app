import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './NoteList';

import '../styles/notes-view.css';

export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  async componentDidMount() {
    await this.handleSearch('');
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

  // eslint-disable-next-line class-methods-use-this
  async handleSave({ id, title, content }) {
    try {
      const { data: { err } } = await axios.put('/notes/put', { id, title, content });
      if (err) console.log(err);
    } catch (err) {
      console.log(err);
    }
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
