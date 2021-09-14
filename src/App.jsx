import React from 'react';
import NoteList from './components/NoteList';

import './App.css';

function App() {
  const notes = [
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
  ];

  return (
    <div className="App">
      <NoteList notes={notes} onSave={() => {}} onDelete={() => {}} />
    </div>
  );
}

export default App;
