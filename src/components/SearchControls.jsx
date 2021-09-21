import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ searchTerm, onSearchChange }) => (
    <label>
        Search:
        <input type="text" name="searchTerm" onChange={onSearchChange} value={searchTerm} placeholder="Find an Artist"/>
    </label>

)

SearchControls.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
}

export default SearchControls;