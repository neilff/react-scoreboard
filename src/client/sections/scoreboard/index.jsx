import React from 'react';
import {IntlMixin} from 'react-intl';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';
import QuickBoxscore from '../../components/quick-boxscore/quick-boxscore.react';
import * as scores from '../../core/scores/store';

require('./_scoreboard.scss');

export default React.createClass({
  mixins: [IntlMixin],

  render() {
    const scoreboard = scores.getScoreboardCursor();

    var preGame = scoreboard.get('pre_game').size > 0 ?
      <QuickBoxscore title="Pre-Game" games={ scoreboard.get('pre_game') } /> :
      '';

    var inProgress = scoreboard.get('in_progress').size > 0 ?
      <QuickBoxscore title="In Progress" games={ scoreboard.get('in_progress') } /> :
      '';

    var finals = scoreboard.get('final').size > 0 ?
      <QuickBoxscore title="Final" games={ scoreboard.get('final') } /> :
      '';

    return (
      <DocumentTitle title={ this.getIntlMessage('home.title') }>
        <div className="scoreboard">
          { inProgress }
          { finals }
          { preGame }
        </div>
      </DocumentTitle>
    );
  }
});
