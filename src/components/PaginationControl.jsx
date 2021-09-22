import React from 'react';
import PropTypes from 'prop-types';

const PaginationControls = ({ artists, offset, updateOffset }) => {
  return (
    <>
      <button onClick={() => updateOffset(-25)} disabled={offset === 0}>
        Prev.
      </button>
      <button onClick={() => updateOffset(25)} disabled={artists.length < 25}>
        Next.
      </button>
    </>
  );
};

PaginationControls.propTypes = {
  offSet: PropTypes.number.isRequired,
  updateOffset: PropTypes.func.isRequired,
  artists: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
      }).isRequired
  ),
};

export default PaginationControls;
