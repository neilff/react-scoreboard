import React from 'react';
import R from 'ramda';
import Immutable from 'immutable';
import {addons} from 'react/addons';
import * as actions from '../../core/canvas/actions';

require('./_simple-canvas.scss');

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  propTypes: {
    cursor: React.PropTypes.instanceOf(Immutable.Map),
  },

  componentDidMount() {
    const canvasRef = this.refs.canvas;
    const context = canvasRef.getDOMNode().getContext('2d');

    // context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = '#df4b26';
    context.lineJoin = 'round';
    context.lineWidth = 5;

    context.fillStyle = '#ddd';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  },

  onMouseUp(e) {
    actions.onCanvasMouseUp(e);
  },

  onMouseDown(e) {
    actions.onCanvasMouseDown(e);
  },

  onMouseEnter(e) {
    actions.onCanvasMouseEnter(e);
  },

  onMouseLeave(e) {
    actions.onCanvasMouseLeave(e);
  },

  onMouseMove(isPainting, canvasRef, e) {
    if (isPainting) {
      var elem = canvasRef.getDOMNode();
      var ctx = elem.getContext('2d');
      var x = e.pageX - elem.offsetLeft;
      var y = e.pageY - elem.offsetTop;

      actions.onCanvasPaint({x, y, clickDrag: true});
    }
  },

  render() {
    const cursor = this.props.cursor;
    const isPainting = cursor.get('paint');
    const canvasRef = this.refs.canvas;

    return (
      <canvas
        ref="canvas"
        width="500"
        height="500"
        onMouseUp={ this.onMouseUp }
        onMouseDown={ this.onMouseDown }
        onMouseEnter={ this.onMouseEnter }
        onMouseLeave={ this.onMouseLeave }
        onMouseMove={ R.partial(this.onMouseMove, isPainting, canvasRef) }
        className="simple-canvas">
      </canvas>
    );
  }
});
