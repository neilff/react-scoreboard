import React from 'react';
import R from 'ramda';
import Immutable from 'immutable';
import {IntlMixin} from 'react-intl';
import {addons} from 'react/addons';

require('./_player-list.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin, IntlMixin],

  propTypes: {
    data: React.PropTypes.instanceOf(Immutable.List),
  },

  render() {
    const playerList = this.props.data;

    console.log(playerList);

    return (
      <div className="player-list">
        Hello World
      </div>
    );
  }
});
