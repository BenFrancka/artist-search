import React, { useState, useEffect } from 'react';
import RecordingList from '../components/RecordingList';
import { fetchRecordings } from '../services/fetchUtils';
import { useParams } from 'react-router-dom';

const RecordingsContainer = () => {
  const { id } = useParams();
  const [songList, setSongList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecordings(id)
      .then((res) => setSongList(res))
      .finally(() => setLoading(false));
  }, []);


  return (
    <>{loading ? <h1>...Loading</h1> : <RecordingList recordings={songList} />}</>
  );
};

export default RecordingsContainer;