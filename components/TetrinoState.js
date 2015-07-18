import { Store } from 'thundercats';

const { transformer } = Store;

export default Store()
  .refs({ displayName: 'TetrinoState' })
  .init(({ instance, args }) => {
    const [tetrisCat] = args;
    const tetrinoActions = tetrisCat.getActions('tetrinoActions');
    instance.register(transformer(tetrinoActions.moveBlock));
  });
