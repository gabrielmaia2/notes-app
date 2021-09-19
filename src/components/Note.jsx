import {
  faCheck,
  faCircleNotch,
  faSave, faTimes, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/note.css';

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;

export default class Note extends Component {
  constructor(props) {
    super(props);

    const { title, content } = this.props;
    this.state = { title, content };

    this.noteRef = React.createRef();
    this.contentRef = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleContentInput = this.handleContentInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.focusContent = this.focusContent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
    document.addEventListener('keydown', this.handleInput);
    this.focusContent();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
    document.addEventListener('keydown', this.handleInput);
  }

  handleClick(e) {
    const { onClose } = this.props;
    if (!this.noteRef.current.contains(e.target)) {
      onClose();
    }
  }

  async handleInput(e) {
    const { onClose } = this.props;
    if (e.key === 'Escape') {
      onClose();
    } else if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      await this.handleSave();
    }
  }

  handleTitleInput(event) {
    this.setState({ title: event.target.value });
  }

  handleContentInput(event) {
    this.setState({ content: event.target.value });
  }

  async handleSave() {
    const { id, onSave } = this.props;
    const { title, content } = this.state;

    this.setState({ saveStatus: 'saving' });
    await onSave({ id, title, content });
    this.setState({ saveStatus: 'saved' });
    setTimeout(() => this.setState({ saveStatus: 'none' }), 1000);
  }

  async handleDelete() {
    const { id, onDelete, onClose } = this.props;

    await onDelete(id);
    onClose();
  }

  focusContent() {
    this.contentRef.current.focus();
    const temp = this.contentRef.current.value;
    this.contentRef.current.value = '';
    this.contentRef.current.value = temp;
  }

  render() {
    const { onClose } = this.props;
    const { title, content, saveStatus } = this.state;

    let saveIcon;
    if (saveStatus === 'saving') {
      saveIcon = faCircleNotch;
    } else if (saveStatus === 'saved') {
      saveIcon = faCheck;
    } else {
      saveIcon = faSave;
    }

    return (
      <div className="note" ref={this.noteRef}>
        <div className="title-wrapper">
          <input
            type="text"
            className="title text"
            placeholder="Title"
            value={title}
            onChange={this.handleTitleInput}
          />
          <FontAwesomeIcon
            type="button"
            onClick={onClose}
            className="icon close"
            icon={faTimes}
          />
        </div>
        <div className="content-wrapper">
          <textarea
            ref={this.contentRef}
            className="content text"
            placeholder="Write something..."
            value={content}
            onChange={this.handleContentInput}
          />
        </div>
        <div className="icons">
          <FontAwesomeIcon
            type="button"
            onClick={async () => {
              await this.handleSave();
              onClose();
            }}
            className={`icon save ${saveStatus}`}
            icon={saveIcon}
          />
          <FontAwesomeIcon
            type="button"
            onClick={this.handleDelete}
            className="icon delete"
            icon={faTrashAlt}
          />
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onSave: PropTypes.instanceOf(AsyncFunction).isRequired,
  onDelete: PropTypes.instanceOf(AsyncFunction).isRequired,
  onClose: PropTypes.func.isRequired,
};
