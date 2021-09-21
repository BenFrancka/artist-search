import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <ArtistSearch />
      </Route>
      <Route exact path="/realeases/:id">

      </Route>
      <Route exact path="/recordings/:id">

      </Route>
      <Route exact path="/songs/:id">

      </Route>
    </Switch>
  );
}
