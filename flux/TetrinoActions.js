import assign from 'object.assign';
import { Actions } from 'thundercats';
import { H, W } from '../constants';

function getLeftBound(num) {
  return num <= 0 ? 0 : num;
}

function getRightBound(num) {
  return num >= W - 1 ? W - 1 : num;
}

function getVerticalBound(num) {
  return getLeftBound(num) === 0 ? 0 : getRightBound(num);
}

function getBottomBound(num) {
  return num >= H - 1 ? H - 1 : num;
}

export default Actions({
  rotate: null,
  createTetrino: null,
  moveDown() {
    return (oldState) => {
      const { position } = oldState;
      const { x, y } = position;
      const newState = {
        position: {
          y: getBottomBound(y + 1),
          x
        },
        previous: position
      };
      return assign({}, oldState, newState);
    };
  },

  moveRight() {
    return (oldState) => {
      const { position } = oldState;
      const { x, y } = position;
      const newState = {
        position: { y, x: x + 1},
        previous: position
      };
      return assign({}, oldState, newState);
    };
  },

  moveLeft() {
    return (oldState) => {
      const { position } = oldState;
      const { x, y } = position;
      const newState = {
        position: { y, x: x - 1},
        previous: position
      };
      return assign({}, oldState, newState);
    };
  }
})
  .refs({ displayName: 'TetrinoActions' });
