import React from 'react';
import R from 'ramda';
import Immutable from 'immutable';
import {IntlMixin} from 'react-intl';
import {addons} from 'react/addons';

export default React.createClass({
  mixins: [addons.PureRenderMixin, IntlMixin],

  propTypes: {
    gameInfo: React.PropTypes.instanceOf(Immutable.Map),
  },

  render() {
    const translate = this.getIntlMessage;
    const gameInfo = this.props.gameInfo;
    const teams = gameInfo.get('teams');
    const away = teams.get(0);
    const home = teams.get(1);

    return (
      <ul>
        <li>{ translate('boxscore.timeLeft') }: { gameInfo.get('time') }</li>
        <li>{ translate('boxscore.period') }: { gameInfo.get('period') }</li>
        <li>{ gameInfo.get('venue') }</li>
        <li>{ away.get('city') +  translate('boxscore.vs')  + home.get('city') }</li>
      </ul>
    );
  }
});
