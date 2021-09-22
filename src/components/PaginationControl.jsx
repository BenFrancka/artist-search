import React from 'react';
import PropTypes from 'prop-types';

const PaginationControls = ({ onPageClick, page, count }) => {
  return (
    <>
      <button onClick={() => onPageClick(-1)} disabled={page <= 1}>
        Prev.
      </button>
      <button onClick={() => onPageClick(1)} disabled={page > count / 25}>
        Next.
      </button>
    </>
  );
};

PaginationControls.propTypes = {
  onPageClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default PaginationControls;
