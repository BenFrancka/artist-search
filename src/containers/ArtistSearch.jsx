import React, { useState, useEffect } from 'react';
import ArtistList from '../components/ArtistList.jsx';
import SearchControls from '../components/SearchControls';
import { fetchArtists } from '../services/fetchUtils';

const ArtistSearch = () => {
    const [ artistList, setArtistList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState('');

    useEffect( () => {
        fetchArtists().then((setSearchTerm) => setArtistList(setSearchTerm))
    }, [searchTerm]);

    const handleSearch = ({ target }) => {
        setSearchTerm(target.value);
      };
    
return(
        <>
        <SearchControls searchTerm={searchTerm} onSearchChange={handleSearch} />
        <ArtistList artists={artistList} />
        </>
      )
}
export default ArtistSearch;