import { Actions } from 'thundercats';

export default Actions({
  moveBlock() {
    return (oldSate) => {
      const { x, y } = oldSate;
      return {
        x: (x * 20) + 'px',
        y
      };
    };
  }
})
  .refs({ displayName: 'TetrinoActions' });
