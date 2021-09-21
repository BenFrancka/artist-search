import React, { useState, useEffect } from 'react';
import ReleaseList from '../components/ReleaseList';
import { fetchReleases } from '../services/fetchUtils';
import { useParams } from 'react-router-dom';

const ReleasesContainer = () => {
  const { id } = useParams();
  const [albumList, setAlbumList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReleases(id)
      .then((res) => setAlbumList(res))
      .finally(() => setLoading(false));
  }, []);


  return (
    <>{loading ? <h1>...Loading</h1> : <ReleaseList releases={albumList} />}</>
  );
};

export default ReleasesContainer;
