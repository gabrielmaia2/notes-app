import React, { Component } from 'react';
import NotePreview from './components/NotePreview';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus urna ornare convallis consectetur. Sed a scelerisque leo, id blandit ipsum. Integer eget ipsum a nisl volutpat ultrices. Mauris convallis, nisi vel vulputate tincidunt, felis sapien aliquam ligula, ullamcorper semper ipsum quam at erat. Fusce semper lacus iaculis velit placerat elementum. Mauris in quam sollicitudin, varius urna sit amet, mollis leo. Integer ultrices, ipsum eget consectetur pharetra, sapien ante ornare lectus, sed dictum eros leo et orci. Nullam elit metus, sagittis non vehicula in, interdum vitae turpis. Integer at urna ut arcu maximus egestas. Pellentesque pellentesque erat eu sem condimentum, ut euismod mi posuere. Morbi faucibus risus non blandit pharetra. Donec rhoncus quam eu nisl blandit congue. In blandit, urna quis venenatis sodales, quam dui pellentesque nunc, non posuere nibh elit in risus. Proin gravida bibendum ante, quis elementum turpis luctus vitae. Sed sagittis metus et sapien pulvinar, ut accumsan augue molestie.';

    return (
      <div className="App">
        Hello World
        <NotePreview id="" title="Title" content={lorem} onSave={() => {}} onDelete={() => {}} />
      </div>
    );
  }
}

export default App;
