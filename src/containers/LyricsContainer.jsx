import React, { useState, useEffect } from 'react';
import LyricsDisplay from '../components/LyricsDisplay';
import { fetchLyrics } from '../services/fetchUtils';
import { useParams } from 'react-router-dom';

const LyricsContainer = () => {
  const { artist, title } = useParams();
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLyrics(artist, title)
      .then((res) => setLyrics(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>{loading ? <h1>...Loading</h1> : <LyricsDisplay lyrics={lyrics} />}</>
  );
};

export default LyricsContainer;
