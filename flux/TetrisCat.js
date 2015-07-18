import { Cat } from 'thundercats';
import FieldStore from './FieldStore';
import TetrisStore from './TetrisStore';
import TetrisActions from './TetrisActions';
import TetrinoActions from './TetrinoActions';
import TetrinoState from './TetrinoState';

export default Cat()
  .refs({ displayName: 'TetrisCat' })
  .init(({ instance }) => {

    instance.register(FieldStore);
    instance.register(TetrisActions);
    instance.register(TetrisStore, null, instance);
    instance.register(TetrinoActions);
    instance.register(TetrinoState, null, instance);
  });
