import { Store } from 'thundercats';
import uuid from 'node-uuid';

const { fromMany, transformer } = Store;

const shapeDef = {
  'i': [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]]
};

export default Store({
  position: { x: 0, y: 0},
  previous: false,
  atBottom: false,
  id: uuid.v4(),
  color: 'blue',
  type: shapeDef.i
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
