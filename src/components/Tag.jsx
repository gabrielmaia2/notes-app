import React from 'react';
import PropTypes from 'prop-types';

import '../styles/tag.css';

export default function Tag({ onClick, tag }) {
  return (
    <button className="tag" type="button" onClick={onClick}>
      {tag}
    </button>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
