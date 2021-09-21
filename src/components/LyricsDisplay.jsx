import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => <p>{lyrics}</p>;

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default Lyrics;
