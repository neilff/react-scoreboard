import Intl from 'intl';
import React from 'react';
import Router from 'react-router';
import routes from './routes';
import {i18nCursor} from './core/state';
import * as scoreboard from './core/api/scoreboard-api';

const app = document.getElementById('root');

scoreboard.init();

Router.run(routes, (Handler) => {
  React.render(<Handler {...i18nCursor().toJS()} />, app)
});
