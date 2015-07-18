import { Actions } from 'thundercats';
import assign from 'object.assign';

export default Actions({
  tick() {
    return (gameState) => {
      return assign({}, gameState, { tick: gameState.tick + 1 });
    };
  }
})
  .refs({ displayName: 'TetrisActions' });
