import setToString from '../utils/settostring';
import {dispatch} from '../dispatcher';

/**
 * Canvas Interactions
 */
export function onCanvasMouseUp(e) {
  dispatch(onCanvasMouseUp, e);
}

export function onCanvasMouseDown(e) {
  dispatch(onCanvasMouseDown, e);
}

export function onCanvasMouseEnter(e) {
  dispatch(onCanvasMouseEnter, e);
}

export function onCanvasMouseLeave(e) {
  dispatch(onCanvasMouseLeave, e);
}

export function onCanvasPaint(e) {
  dispatch(onCanvasPaint, e);
}

setToString('canvas', {
  onCanvasMouseUp,
  onCanvasMouseDown,
  onCanvasMouseEnter,
  onCanvasMouseLeave,
  onCanvasPaint
});
