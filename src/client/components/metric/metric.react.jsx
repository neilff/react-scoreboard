import classNames from 'classnames';
import React from 'react';
import {addons} from 'react/addons';

require('./_metric.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    title: React.PropTypes.string.isRequired,
    size: React.PropTypes.string,
    children: React.PropTypes.element.isRequired
  },

  render() {
    const size = this.props.size;

    var classes = classNames({
      'metric': true,
      'metric--full': size ==='full'
    });

    return (
      <div className={ classes }>
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
