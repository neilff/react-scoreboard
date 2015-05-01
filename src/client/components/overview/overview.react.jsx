import React from 'react';
import R from 'ramda';
import Immutable from 'immutable';
import {addons} from 'react/addons';

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    gameInfo: React.PropTypes.instanceOf(Immutable.Map),
  },

  render() {
    const gameInfo = this.props.gameInfo;
    const teams = gameInfo.get('teams');
    const away = teams.get(0);
    const home = teams.get(1);

    return (
      <ul>
        <li>Time Left: { gameInfo.get('time') }</li>
        <li>Period: { gameInfo.get('period') }</li>
        <li>{ gameInfo.get('venue') }</li>
        <li>{ away.get('city') + ' vs. ' + home.get('city') }</li>
      </ul>
    );
  }
});
