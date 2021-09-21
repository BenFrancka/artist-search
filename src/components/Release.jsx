import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ title, coverArt }) => (
  <figure>
    <img src={coverArt} alt={title}></img>
    <figcaption>{title}</figcaption>
  </figure>
);

Release.propTypes = {
  title: PropTypes.string.isRequired,
  coverArt: PropTypes.string.isRequired,
};

export default Release;

