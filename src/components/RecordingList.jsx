import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';
import { Link } from 'react-router-dom';

const RecordingList = ({ recordings, artist }) => (
  <ul aria-label="recordings">
    {recordings.map(({ id, title }) => (
      <Link key={id} to={`/songs/${artist}/${title}`}>
        <li key={id}>
          <Recording id={id} title={title} />
        </li>
      </Link>
    ))}
  </ul>
);

RecordingList.propTypes = {
  recordings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  artist: PropTypes.string.isRequired,
};

export default RecordingList;
