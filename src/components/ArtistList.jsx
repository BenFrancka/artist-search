import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => {
  console.log(artists, 'artists')
  return (
    <ul aria-label="artists">
      {artists.map(({ id, name }) => (
        <li key={id}>
          <Artist id={id} name={name} />
        </li>
      ))}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ArtistList;
