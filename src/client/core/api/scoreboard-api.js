import * as constants from '../constants';
import axios from 'axios';
import R from 'ramda';
import * as actions from '../scores/actions';

let timer = null;

// TODO: Fix hack
var api = document.location.hostname == 'localhost' ?
  'http://localhost:5000/api/scoreboard' :
  '/api/scoreboard';

function getScoreboard() {
  axios.get(api)
    .then(function(response) {
      console.log('getScoreboard :: response :: ', response.data);

      actions.onScoreboardRefresh(response.data);
    })
    .then(null, function(err) {
      console.log('Error: Unable to connect to Scoreboard API', err);

      actions.onScoreboardRefreshError({
        message: 'Unable to connect to Scoreboard API'
      });
    });
}

export function init() {
  var time = 15000;
  console.log('init :: getScoreboard :: ', time);

  getScoreboard();

  timer = setInterval(function() {
    getScoreboard();
  }, time);
}

export function stop() {
  if (timer) {
    clearInterval(timer);
  }
}
