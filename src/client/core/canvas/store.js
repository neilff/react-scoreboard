import * as actions from './actions';
import Immutable from 'immutable';
import {canvasCursor, canvasX, canvasY, canvasDrag} from '../state';
import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  let query;

  switch (action) {

    case actions.onCanvasMouseDown:
      canvasCursor(state => state.set('paint', true));
      break;

    case actions.onCanvasMouseUp:
      canvasCursor(state => state.set('paint', false));
      break;

    case actions.onCanvasMouseEnter:
      canvasCursor(state => state.set('inside', true));
      break;

    case actions.onCanvasMouseLeave:
      canvasCursor(state => state.set('paint', false));
      canvasCursor(state => state.set('inside', false));
      break;

    case actions.onCanvasPaint:
      canvasX(state => state.push(data.x));
      canvasY(state => state.push(data.y));
      canvasDrag(state => state.push(data.clickDrag));

      console.log('onCanvasPaint', canvasX().size, canvasY().size, canvasDrag().size);
      break;
  };
})

export function getCanvasCusor() {
  return canvasCursor();
}

export function getIsPainting() {
  return canvasCursor().get('paint');
}
