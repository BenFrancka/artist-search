import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => (
  <ul aria-label="artists">
    {artists.map(({ id, name }) => (
      <Link key={id} to={`/releases/${id}`}>
        <li key={id}>
          <Artist id={id} name={name} />
        </li>
      </Link>
    ))}
  </ul>
);

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ArtistList;
