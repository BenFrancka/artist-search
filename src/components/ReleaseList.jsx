import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

const ReleaseList = ({ releases }) => (
  <ul aria-label="albums">
    {releases.map(({ id, title, coverArt }) => (
      <li key={id}>
        <Release id={id} title={title} coverArt={coverArt} />
      </li>
    ))}
  </ul>
);

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      coverArt: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ReleaseList;
