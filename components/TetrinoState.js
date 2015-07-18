import { Store } from 'thundercats';
import assign from 'object.assign';

const { transformer } = Store;

export default Store({
  position: { x: 0, y: 0},
  atBottom: false
})
  .refs({ displayName: 'TetrinoState' })
  .init(({ instance, args }) => {
    const [tetrisCat] = args;
    const tetrinoActions = tetrisCat.getActions('tetrinoActions');
    const tetrisStore = tetrisCat.getStore('tetrisStore');

    instance.register(tetrisStore.map(() => {
      return {
        transform: (tetrinoState) => {
          if (tetrinoState.atBottom) {
            return tetrinoState;
          }
          const newPosition = {
            x: tetrinoState.position.x + 20,
            y: tetrinoState.position.y
          };

          let bottomState = { atBottom: tetrinoState.atBottom };

          if (newPosition.x >= 580) {
            bottomState = { atBottom: true };
          }

          return assign(
            {},
            tetrinoState,
            { position: newPosition },
            bottomState
          );
        }
      };
    }));

    instance.register(transformer(tetrinoActions.moveBlock));
  });
