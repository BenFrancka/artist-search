import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name }) => <p>{name}</p>;

Artist.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Artist;
