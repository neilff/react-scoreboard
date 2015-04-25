import React from 'react';
import Immutable from 'immutable';
import {addons} from 'react/addons';

require('./_canvas-stats.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    cursor: React.PropTypes.instanceOf(Immutable.Map),
  },

  render() {
    const cursor = this.props.cursor;
    const isPainting = cursor.get('paint');
    const isMouseInside = cursor.get('inside');

    return (
      <div>
        <h1>Canvas Stats</h1>
        <ul>
          <li>Painting Status: { isPainting.toString() }</li>
          <li>Is Mouse Over: { isMouseInside.toString() }</li>
        </ul>
      </div>
    );
  }
});
