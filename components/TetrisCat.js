import { Cat } from 'thundercats';
import TetrinoActions from './TetrinoActions';
import TetrinoState from './TetrinoState';

export default Cat()
  .init(({ instance }) => {
    instance.register(TetrinoActions);
    instance.register(TetrinoState, null, instance);
  });
