import React from 'react';
import {addons} from 'react/addons';

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  render() {
    var data = this.props.data;

    var legend = data.map((item, idx) => {
      var styles = {
        backgroundColor: item.get('color')
      };

      return (
        <div
          key={ idx }
          className="doughnut-chart__legend--title">
          <h3>{ item.get('value') }</h3>
          <small>
            <span
              style={ styles }
              className="doughnut-chart__legend--marker"></span>
            { item.get('label') }
          </small>
        </div>
      );
    });

    return (
      <div className="doughnut-chart__legend">
        { legend }
      </div>
    );
  }
});
