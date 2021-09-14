import React, { Component } from 'react';
import NotePreview from './components/NotePreview';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NotePreview id="" title="Title" content="Content" onSave={() => {}} onDelete={() => {}} />
      </div>
    );
  }
}

export default App;
