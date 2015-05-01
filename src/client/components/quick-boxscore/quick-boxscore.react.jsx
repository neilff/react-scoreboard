import React from 'react';
import R from 'ramda';
import Immutable from 'immutable';
import {Link} from 'react-router';
import {addons} from 'react/addons';

require('./_quick-boxscore.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    games: React.PropTypes.instanceOf(Immutable.List),
    title: React.PropTypes.string
  },

  render() {
    const games = this.props.games;
    const title = this.props.title;

    var list = games.map(item => {
      var isInProgress = item.get('game_status') === 'In-Progress';
      var isFinal = item.get('game_status') === 'Final';
      var isPreGame = item.get('game_status') === 'Pre-Game';

      var template = (function(gameStatus) {
        if (gameStatus === 'Pre-Game') {
          return <div
            key={ item.get('gamecode') }
            className="quick-boxscore__game">
            <div className="quick-boxscore__game--inner">
              <div className="quick-boxscore__game--team">
                <span>{ item.get('visiting_team') }</span>
                <span>{ item.get('visiting_score') }</span>
              </div>
              <div className="quick-boxscore__game--team">
                <span>{ item.get('home_team') }</span>
                <span>{ item.get('home_score') }</span>
              </div>
              <div className="quick-boxscore__game--details">
                <span>{ item.get('date') }</span>
                <span>{ item.get('time') }</span>
              </div>
            </div>
          </div>
        }

        if (gameStatus === 'In-Progress') {
          return <Link
            key={ item.get('gamecode') }
            to="boxscore"
            params={ {gameId: item.get('gamecode')} }
            className="quick-boxscore__game">
            <div className="quick-boxscore__game--inner">
              <div className="quick-boxscore__game--team">
                <span>{ item.get('visiting_team') }</span>
                <span>{ item.get('visiting_score') }</span>
              </div>
              <div className="quick-boxscore__game--team">
                <span>{ item.get('home_team') }</span>
                <span>{ item.get('home_score') }</span>
              </div>
              <div className="quick-boxscore__game--details">
                <span>Period { item.get('period') }</span>
                <span>{ item.get('clock') }</span>
                <span>{ item.get('channel') }</span>
              </div>
            </div>
          </Link>
        }

        if (gameStatus === 'Final') {
          return <Link
            key={ item.get('gamecode') }
            to="boxscore"
            params={ {gameId: item.get('gamecode')} }
            className="quick-boxscore__game">
            <div className="quick-boxscore__game--inner">
              <div className="quick-boxscore__game--team">
                <span>{ item.get('visiting_team') }</span>
                <span>{ item.get('visiting_score') }</span>
              </div>
              <div className="quick-boxscore__game--team">
                <span>{ item.get('home_team') }</span>
                <span>{ item.get('home_score') }</span>
              </div>
            </div>
          </Link>
        }
      })(item.get('game_status'));

      var score = isFinal || isInProgress ?
        <div className="quick-boxscore__score">
          { item.get('home_score') } - { item.get('visiting_score') } { item.get('clock') }
        </div> :
        '';

      var gameDate = <div className="quick-boxscore__date">
          { item.get('date') }
        </div>

      var gameTime = isPreGame ?
        <div className="quick-boxscore__time">
          { item.get('time') }
        </div> :
        '';

      return (
        { template }
      );
    }).toArray();

    return (
      <div className="quick-boxscore">
        <div className="quick-boxscore__title">
          { title }
        </div>
        { list }
      </div>
    );
  }
});
