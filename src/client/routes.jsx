import React from 'react';
import Main from './sections/main';
import Home from './sections/home';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={ Main } path="/">
    <DefaultRoute handler={ Home } name="home" />
  </Route>
);
