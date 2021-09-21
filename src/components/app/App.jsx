import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';
import ReleasesContainer from '../../containers/ReleasesContainer';
import RecordingsContainer from '../../containers/RecordingsContainer';
import LyricsContainer from '../../containers/LyricsContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ArtistSearch />
      </Route>
      <Route exact path="/releases/:artist/:id">
        <ReleasesContainer />
      </Route>
      <Route exact path="/recordings/:artist/:id">
        <RecordingsContainer />
      </Route>
      <Route exact path="/songs/:artist/:title">
        <LyricsContainer />

      </Route>
    </Switch>
  );
}
