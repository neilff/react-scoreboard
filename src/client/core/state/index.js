import messages from '../messages';
import State from '../utils/state';

const initialLocale = 'en';

const initialState = {
  i18n: {
    formats: {},
    locales: initialLocale,
    messages: messages[initialLocale]
  },
  canvas: {
    paint: false,
    inside: false,
    history: {
      x: [],
      y: [],
      drag: []
    }
  }
};

export const state = new State(initialState);
export const i18nCursor = state.cursor(['i18n']);
export const canvasCursor = state.cursor(['canvas']);
export const canvasX = state.cursor(['canvas', 'history', 'x']);
export const canvasY = state.cursor(['canvas', 'history', 'y']);
export const canvasDrag = state.cursor(['canvas', 'history', 'drag']);
