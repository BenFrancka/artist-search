import React, { useState, useEffect } from 'react';
import ArtistList from '../components/ArtistList.jsx';
import SearchControls from '../components/SearchControls';
import { fetchArtists } from '../services/fetchUtils';
import PaginationControl from '../components/PaginationControl';


const ArtistSearch = () => {
  const [artistList, setArtistList] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('doors');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchArtists(searchTerm).then((res) => setArtistList(res));
  }, [searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleClick = (number) => {
    setPage((prevPage) => prevPage + number);
  };

  return (
    <>
      <SearchControls searchTerm={searchTerm} onSearchChange={handleSearch} />
      <PaginationControl page={page} count={count} onPageClick={handleClick}/>
      {artistList.length && <ArtistList artists={artistList} />}
    </>
  );
};
export default ArtistSearch;
