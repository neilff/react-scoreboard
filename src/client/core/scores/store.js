import Immutable from 'immutable';
import {register} from '../dispatcher';
import * as actions from './actions';
import * as state from '../state';

export const dispatchToken = register(({action, data}) => {

  let query;

  switch (action) {

    case actions.onBoxscoreRefresh:
      state.boxscoreCursor(state => state.merge(data));
      break;

    case actions.onGameInfoRefresh:
      state.gameInfoCursor(state => state.merge(data));
      break;

    case actions.onPlayerRefresh:
      console.log('playersCursor', data);
      state.playersCursor(state => state.merge(data));
      break;

    case actions.onScoreboardRefresh:
      console.log('onScoreboardRefresh :: ', data);
      state.scoreboardCursor(state => state.merge(data));
      break;

    case actions.onScoreboardRefreshError:
      console.log('onScoreboardRefreshError :: ', data);
      break;
  };
})

export function getGameInfoCursor() {
  return state.gameInfoCursor();
}

export function getBoxscoreCursor() {
  return state.boxscoreCursor();
}

export function getScoreboardCursor() {
  return state.scoreboardCursor();
}

export function getPlayersCursor() {
  return state.playersCursor();
}
