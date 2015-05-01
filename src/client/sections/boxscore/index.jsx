import React from 'react';
import {IntlMixin} from 'react-intl';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';
import Metric from '../../components/metric/metric.react';
import Overview from '../../components/overview/overview.react';
import Score from '../../components/score/score.react';
import DoughnutChart from '../../components/doughnut/doughnut.react.jsx';
import * as scores from '../../core/scores/store';
import * as actions from '../../core/scores/actions';

require('./_boxscore.scss');

export default React.createClass({
  mixins: [IntlMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount() {
    var router = this.context.router;
    var gameId = router.getCurrentParams().gameId;

    actions.startBoxscoreRefresh(gameId);
  },

  componentWillUnmount() {
    var router = this.context.router;
    var gameId = router.getCurrentParams().gameId;

    actions.cancelBoxscoreRefresh(gameId);
  },

  render() {
    const gameInfo = scores.getGameInfoCursor();
    const boxscore = scores.getBoxscoreCursor();

    return (
      <DocumentTitle title={ this.getIntlMessage('home.title') }>
        <div className="boxscore">
          <Metric title={ this.getIntlMessage('boxscore.overview') }>
            <Overview gameInfo={ gameInfo } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.score') }>
            <Score
              boxscore={ boxscore.get('score') }
              gameInfo={ gameInfo } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.shots') }>
            <DoughnutChart
              id="shots"
              data={ boxscore.get('shots') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.faceoffsWon') }>
            <DoughnutChart
              id="faceoffsWon"
              data={ boxscore.get('faceoffsWon') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.giveaways') }>
            <DoughnutChart
              id="giveaways"
              data={ boxscore.get('giveaways') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.hits') }>
            <DoughnutChart
              id="hits"
              data={ boxscore.get('hits') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.penalties') }>
            <DoughnutChart
              id="penalties"
              data={ boxscore.get('penalties') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.penaltyMin') }>
            <DoughnutChart
              id="penaltyMin"
              data={ boxscore.get('penaltyMin') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.powerPlays') }>
            <DoughnutChart
              id="powerPlays"
              data={ boxscore.get('powerPlays') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.saves') }>
            <DoughnutChart
              id="saves"
              data={ boxscore.get('saves') } />
          </Metric>
          <Metric title={ this.getIntlMessage('boxscore.shotsBlocked') }>
            <DoughnutChart
              id="shotsBlocked"
              data={ boxscore.get('shotsBlocked') } />
          </Metric>
        </div>
      </DocumentTitle>
    );
  }
});
