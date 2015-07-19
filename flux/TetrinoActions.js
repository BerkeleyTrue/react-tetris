import assign from 'object.assign';
import { Actions } from 'thundercats';

export default Actions({
  rotate: null,
  moveDown() {
    return (oldState) => {
      const { position } = oldState;
      const { x, y } = position;
      const newState = {
        position: { x: (x + 1), y },
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
        position: { x, y: y + 1},
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
        position: { x, y: y - 1},
        previous: position
      };
      return assign({}, oldState, newState);
    };
  }
})
  .refs({ displayName: 'TetrinoActions' });
