import React from 'react';
import Chart from 'chart.js';
import Immutable from 'immutable';
import {addons} from 'react/addons';

require('./_doughnut.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  componentWillReceiveProps() {
    var data = this.props.data;
    var elem = this.getDOMNode();

    console.log('chartInstance :: ', this.chartInstance);

    // Create chart if it doesn't exist, otherwise update previous values
    if (!this.chartInstance) {
      var ctx = elem.getContext('2d');

      this.chartInstance = new Chart(ctx).Doughnut(data, {
        segmentStrokeColor: '#26282D',
        segmentStrokeWidth: 4
      });
    } else {
      this.chartInstance.segments[0].label = data[0].label;
      this.chartInstance.segments[0].value = data[0].value;
      this.chartInstance.segments[1].label = data[1].label;
      this.chartInstance.segments[1].value = data[1].value;
      this.chartInstance.update();
    }
  },

  render() {
    var id = this.props.id;

    return (

    );
  }
});
