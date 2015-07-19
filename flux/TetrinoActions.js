import assign from 'object.assign';
import { Actions } from 'thundercats';

export default Actions({
  rotate: null,
  createTetrino: null,
  moveDown() {
    return (oldState) => {
      const { position } = oldState;
      const { x, y } = position;
      const newState = {
        position: { y: (y + 1), x },
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
