import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import { Link } from 'react-router-dom';

const ReleaseList = ({ releases }) => (
  <ul aria-label="albums">
    {releases.map(({ id, title, coverArt }) => (
      <Link key={id} to={`/recordings/${id}`}>
        <li key={id}>
          <Release id={id} title={title} coverArt={coverArt} />
        </li>
      </Link>
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
