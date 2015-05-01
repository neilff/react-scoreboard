import messages from '../messages';
import R from 'ramda';
import * as constants from '../constants';
import State from '../utils/state';

var defaultMetric = [
  {
    value: 0,
    label: '',
    color: constants.homeColor,
    highlight: constants.homeHighlight
  },
  {
    value: 0,
    label: '',
    color: constants.awayColor,
    highlight: constants.awayHighlight
  }
];

var defaultScore = {
  home: {
    name: '',
    goals: 0
  },
  away: {
    name: '',
    goals: 0
  }
};

var defaultTeamInfo = {
  abbr: null,
  alignment: null,
  awayLosses: null,
  awayLossesOT: null,
  awayPoints: null,
  awayWins: null,
  city: null,
  homeLosses: null,
  homeLossesOT: null,
  homePoints: null,
  homeWins: null,
  id: null,
  name: null,
  totalLosses: null,
  totalLossesOT: null,
  totalPoints: null,
  totalWins: null
};

const initialLocale = 'en';

const initialState = {
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  boxscore: {
    shots: R.clone(defaultMetric),
    faceoffsWon: R.clone(defaultMetric),
    giveaways: R.clone(defaultMetric),
    hits: R.clone(defaultMetric),
    penalties: R.clone(defaultMetric),
    penaltyMin: R.clone(defaultMetric),
    powerPlays: R.clone(defaultMetric),
    saves: R.clone(defaultMetric),
    shotsBlocked: R.clone(defaultMetric),
    score: R.clone(defaultScore)
  },
  gameInfo: {
    teams: [
      R.clone(defaultTeamInfo),
      R.clone(defaultTeamInfo)
    ]
  },
  scoreboard: {
    in_progress: [],
    pre_game: [],
    final: []
  }
};

export const state = new State(initialState);
export const i18nCursor = state.cursor(['i18n']);
export const gameInfoCursor = state.cursor(['gameInfo']);
export const boxscoreCursor = state.cursor(['boxscore']);
export const scoreboardCursor = state.cursor(['scoreboard']);
