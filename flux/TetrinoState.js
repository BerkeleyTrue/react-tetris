import { Store } from 'thundercats';
import assign from 'object.assign';

const { fromMany, transformer } = Store;

export default Store({
  position: { x: 0, y: 0},
  atBottom: false
})
  .refs({ displayName: 'TetrinoState' })
  .init(({ instance, args }) => {
    const [tetrisCat] = args;
    const tetrinoActions = tetrisCat.getActions('tetrinoActions');
    const tetrisStore = tetrisCat.getStore('tetrisStore');
    const fieldStore = tetrisCat.getStore('fieldStore');

    instance.register(
      tetrisStore.withLatestFrom(fieldStore, ( tetrisStae, fieldState) => {
        return fieldState;
      }).map((fieldState) => {
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

          if (newPosition.x >= (fieldState.h - 1) * 20) {
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

    instance.register(fromMany(
      transformer(tetrinoActions.moveDown),
      transformer(tetrinoActions.moveLeft),
      transformer(tetrinoActions.moveRight)
    ));
  });
