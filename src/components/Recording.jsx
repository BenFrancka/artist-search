import React from 'react';
import PropTypes from 'prop-types';

const Recording = ({ title }) => <p>{title}</p>;

Recording.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Recording;
