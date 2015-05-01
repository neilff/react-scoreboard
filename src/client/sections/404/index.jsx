import React from 'react';
import {IntlMixin} from 'react-intl';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';

require('./_404.scss');

export default React.createClass({
  mixins: [IntlMixin],

  render() {
    return (
      <DocumentTitle title={ this.getIntlMessage('home.title') }>
        <div className="four-oh-four">
          <h1>
            { this.getIntlMessage('fourOhFour.title') }
            <small>{ this.getIntlMessage('fourOhFour.error') }</small>
          </h1>
        </div>
      </DocumentTitle>
    );
  }
});
