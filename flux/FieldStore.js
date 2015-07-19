import Rx from 'rx';
import { Store } from 'thundercats';
// import uuid from 'node-uuid';
import { H, W } from '../constants';

const { transformer } = Store;

function create2DArray(y, x) {
  return Array.apply(null, new Array(y))
    .map(() => Array.apply(null, new Array(x)).map(() => ({})));
}

function getBottomBound(num) {
  return num >= H - 1 ? H - 1 : num;
}

const initialValue = {
  height: (H * 20) + 'px',
  width: (W * 30) + 'px',
  fieldArray: create2DArray(H, W),
  tetrinos: []
};

/*
 * [[{ color, id }], [{ color, id }]]
 */

export default Store(initialValue)
  .refs({ displayName: 'FieldStore' })
  .init(({ instance, args }) => {
    const [tetrisCat] = args;
    const tetrinoStore = tetrisCat.getStore('tetrinoStore');
    const tetrinoActions = tetrisCat.getActions('tetrinoActions');

    instance.register(transformer(tetrinoStore.map(
      (tetrinoState) => {
        return (fieldState) => {
          let { id } = tetrinoState;
          const { tetrinos } = fieldState;
          if (!tetrinos.some(({ id }) => id === tetrinoState.id)) {
            tetrinos.push(tetrinoState);
          }

          if (getBottomBound(tetrinoState.position.y) === H - 1) {
            tetrinoActions.createTetrino();
          } else {
            fieldState.tetrinos = tetrinos
              .map(tetrino => {
                if (tetrino.id === id) {
                  return tetrinoState;
                }
                return tetrino;
              });
          }

          return fieldState;
        };
      }
    )));

    instance.register(Rx.Observable.interval(1000).map({
      transform: Rx.helpers.identity
    }));
  });
