import { Store } from 'thundercats';

const{ transformer } = Store;

export default Store({ tick: 0 })
  .refs({ displayName: 'TetrisStore' })
  .init(({ instance, args }) => {
    const [ tetrisCat ] = args;
    const tetrisActions = tetrisCat.getActions('tetrisActions');
    instance.register(transformer(tetrisActions.tick));
  });
