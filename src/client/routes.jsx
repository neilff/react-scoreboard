import React from 'react';
import Main from './sections/main';
import Scoreboard from './sections/scoreboard';
import Boxscore from './sections/boxscore';
import NotFound from './sections/404';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={ Main } path="/">
    <DefaultRoute handler={ Scoreboard } name="scoreboard" />
    <Route name="boxscore" path="/boxscore/:gameId" handler={ Boxscore } />
    <NotFoundRoute handler={ NotFound }/>
  </Route>
);
