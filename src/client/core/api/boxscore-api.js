import * as constants from '../constants';
import axios from 'axios';
import R from 'ramda';
import * as actions from '../scores/actions';

let timer = null;

function _extractStat(boxscore, teams, stat) {
  var away = boxscore[0];
  var awayAbbr = teams[0].abbr;
  var home = boxscore[1];
  var homeAbbr = teams[1].abbr;

  return [
    {
      value: home[stat],
      label: homeAbbr,
      color: constants.homeColor,
      highlight: constants.homeHighlight
    },
    {
      value: away[stat],
      label: awayAbbr,
      color: constants.awayColor,
      highlight: constants.awayHighlight
    }
  ];
}

function _extractScore(boxscore, teams) {
  var away = boxscore[0];
  var awayAbbr = teams[0].abbr;
  var home = boxscore[1];
  var homeAbbr = teams[1].abbr;

  return {
    home: {
      name: homeAbbr,
      goals: home.score
    },
    away: {
      name: awayAbbr,
      goals: away.score
    }
  };
}

function getGameListing(gameId) {
  console.log('getGameListing :: request');

  axios.get('http://api.onetwosee.com/nhl/update/' + gameId + '/rogers?normalize=true')
    .then(function(response) {
      console.log('getGameListing :: response :: ', response.data);

      var boxscore = response.data.boxscores;
      var teams = response.data.teams;

      actions.onBoxscoreRefresh({
        shots: _extractStat(boxscore, teams, 'shots'),
        faceoffsWon: _extractStat(boxscore, teams, 'faceoffsWon'),
        giveaways: _extractStat(boxscore, teams, 'giveaways'),
        hits: _extractStat(boxscore, teams, 'hits'),
        penalties: _extractStat(boxscore, teams, 'penalties'),
        penaltyMin: _extractStat(boxscore, teams, 'penaltyMin'),
        powerPlays: _extractStat(boxscore, teams, 'powerPlays'),
        saves: _extractStat(boxscore, teams, 'saves'),
        shotsBlocked: _extractStat(boxscore, teams, 'shotsBlocked'),
        score: _extractScore(boxscore, teams)
      });

      var gameInfo = response.data.game;
      gameInfo.teams = teams;

      actions.onGameInfoRefresh(gameInfo);
    });
}

export function init(gameId) {
  var time = 3000;
  console.log('init :: getGameListing :: ', gameId);

  getGameListing(gameId);

  timer = setInterval(function() {
    getGameListing(gameId);
  }, time);
}

export function stop() {
  console.log('stop :: getGameListing');

  if (timer) {
    clearInterval(timer);
  }
}
