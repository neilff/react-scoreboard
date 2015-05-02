import setToString from '../utils/settostring';
import {dispatch} from '../dispatcher';
import * as boxscoreApi from '../api/boxscore-api';

/**
 * Boxscore Refresh
 */
export function startBoxscoreRefresh(gameId) {
  boxscoreApi.init(gameId);
}

export function onBoxscoreRefresh(data) {
  dispatch(onBoxscoreRefresh, data);
}

export function cancelBoxscoreRefresh(gameId) {
  boxscoreApi.stop(gameId);
}

/**
 * Game Info Refresh
 */
export function onGameInfoRefresh(data) {
  dispatch(onGameInfoRefresh, data);
}

/**
 * Players Refresh
 */
export function onPlayerRefresh(data) {
  dispatch(onPlayerRefresh, data);
}

/**
 * Scoreboard Refresh
 */
export function onScoreboardRefresh(data) {
  dispatch(onScoreboardRefresh, data);
}

export function onScoreboardRefreshError(err) {
  dispatch(onScoreboardRefreshError, err);
}

setToString('scores', {
  onBoxscoreRefresh,
  onGameInfoRefresh,
  onPlayerRefresh,
  onScoreboardRefresh,
  onScoreboardRefreshError
});
