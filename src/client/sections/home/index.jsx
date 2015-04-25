import React from 'react';
import {IntlMixin} from 'react-intl';
import DocumentTitle from 'react-document-title';
import {Link} from 'react-router';
import SimpleCanvas from '../../components/simple-canvas';
import CanvasStats from '../../components/canvas-stats';
import * as canvasStore from '../../core/canvas/store';

require('./_home.scss');

export default React.createClass({
  mixins: [IntlMixin],

  render() {
    const canvasCursor = canvasStore.getCanvasCusor();

    return (
      <DocumentTitle title={ this.getIntlMessage('home.title') }>
        <div className="home">
          <div className="flex">
            <SimpleCanvas cursor={ canvasCursor } />
          </div>
          <div className="flex">
            <CanvasStats cursor={ canvasCursor } />
          </div>
        </div>
      </DocumentTitle>
    );
  }
});
