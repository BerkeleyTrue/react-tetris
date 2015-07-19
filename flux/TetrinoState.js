import { Store } from 'thundercats';
import uuid from 'node-uuid';

const { fromMany, transformer } = Store;

export default Store({
  position: { x: 0, y: 0},
  atBottom: false,
  id: uuid.v4(),
  color: 'blue'
})
  .refs({ displayName: 'TetrinoStore' })
  .init(({ instance, args }) => {
    const [tetrisCat] = args;
    const tetrinoActions = tetrisCat.getActions('tetrinoActions');
    const tetris = tetrisCat.getStore('tetrisStore');

    tetris.subscribe(() => {
      tetrinoActions.moveDown();
    });

    instance.register(fromMany(
      transformer(tetrinoActions.moveDown),
      transformer(tetrinoActions.moveLeft),
      transformer(tetrinoActions.moveRight)
    ));
  });
