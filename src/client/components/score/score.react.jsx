import React from 'react';
import R from 'ramda';
import Immutable from 'immutable';
import {addons} from 'react/addons';

require('./_score.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    boxscore: React.PropTypes.instanceOf(Immutable.Map),
    gameInfo: React.PropTypes.instanceOf(Immutable.Map)
  },

  render() {
    const boxscore = this.props.boxscore;
    const gameInfo = this.props.gameInfo;
    const away = boxscore.get('away');
    const home = boxscore.get('home');

    return (
      <div className="score">
        <div className="score__row">
          <div className="score__counter">
            <h1>{ home.get('goals') }</h1>
            <small>{ home.get('name') }</small>
          </div>
          <div className="score__middle">
            vs.
          </div>
          <div className="score__counter">
            <h1>{ away.get('goals') }</h1>
            <small>{ away.get('name') }</small>
          </div>
        </div>
        <div className="score__row score__bottom">
          <strong>Period { gameInfo.get('period') } &mdash; { gameInfo.get('time') }</strong>
        </div>
      </div>
    );
  }
});
