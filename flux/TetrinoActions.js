import assign from 'object.assign';
import { Actions } from 'thundercats';

export default Actions({
  rotate: null,
  moveDown() {
    return (oldState) => {
      const { position: { x, y } } = oldState;
      return assign({}, oldState, { position: { x: (x + 1), y } });
    };
  },

  moveRight() {
    return (oldState) => {
      const { position: { x, y } } = oldState;
      return assign({}, oldState, { position: { x, y: y + 1} });
    };
  },

  moveLeft() {
    return (oldState) => {
      const { position: { x, y } } = oldState;
      return assign({}, oldState, { position: { x, y: y - 1}});
    };
  }
})
  .refs({ displayName: 'TetrinoActions' });
