import assign from 'object.assign';
import { Actions } from 'thundercats';
import { SCALE } from './constants';

export default Actions({
  moveDown() {
    return (oldState) => {
      const { position: { x, y } } = oldState;
      return assign({}, oldState, { position: { x: (x + SCALE), y } });
    };
  },

  moveRight() {
    return (oldState) => {
      const { position: { x, y } } = oldState;
      return assign({}, oldState, { position: { x, y: y + SCALE } });
    };
  },

  moveLeft() {
    return (oldState) => {
      const { position: { x, y } } = oldState;
      return assign({}, oldState, { position: { x, y: y - SCALE }});
    };
  }
})
  .refs({ displayName: 'TetrinoActions' });
