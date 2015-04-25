import DocumentTitle from 'react-document-title';
import React from 'react';
import {IntlMixin} from 'react-intl';
import {Link, RouteHandler} from 'react-router';
import {state} from '../../core/state';

require('./main.scss');

export default React.createClass({
  mixins: [IntlMixin],

  componentDidMount() {
    require('fastclick').attach(document.body);

    state.on('change', () => {
      // console.time('whole app rerender')
      this.forceUpdate(() => {
        // console.timeEnd('whole app rerender')
      });
    });
  },

  render() {
    return (
      <DocumentTitle title="Liqbo">
        <div className="layout">
          <RouteHandler />
        </div>
      </DocumentTitle>
    );
  }
});
