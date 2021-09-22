import React, { useState, useEffect } from 'react';
import ArtistList from '../components/ArtistList.jsx';
import SearchControls from '../components/SearchControls';
import { fetchArtists } from '../services/fetchUtils';
import PaginationControl from '../components/PaginationControl';


const ArtistSearch = () => {
  const [artistList, setArtistList] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('doors');
  const [offSet, setOffset] = useState(0);
  

  useEffect(() => {
    if(!searchTerm)return
    fetchArtists(searchTerm, offSet).then((res) => setArtistList(res));
  }, [offSet, searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const updateOffset = (number) => {
    setOffset((prevPage) => prevPage + number);
  };

  return (
    <>
      <SearchControls searchTerm={searchTerm} onSearchChange={handleSearch} />
      <PaginationControl offSet={offSet} artists={artistList} updateOffset={updateOffset}/>
      {artistList.length && <ArtistList artists={artistList} />}
    </>
  );
};
export default ArtistSearch;
