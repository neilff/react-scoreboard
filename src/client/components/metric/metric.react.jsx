import React from 'react';
import {addons} from 'react/addons';

require('./_metric.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },

  render() {
    return (
      <div className="metric">
        <div className="metric--inner">
          <div className="metric__title">
            { this.props.title }
          </div>
          <div className="metric__body">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
});
