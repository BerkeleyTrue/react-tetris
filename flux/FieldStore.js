import Rx from 'rx';
import { Store } from 'thundercats';
// import uuid from 'node-uuid';

const { transformer } = Store;
const h = 30, w = 20;

function create2DArray(x, y) {
  return Array.apply(null, new Array(y))
    .map(() => Array.apply(null, new Array(x)).map(() => ({})));
}

const initialValue = {
  height: (h * 20) + 'px',
  width: (w * 30) + 'px',
  h,
  w,
  fieldArray: create2DArray(h, w)
};

/*
 * [[{ color, id }], [{ color, id }]]
 */

export default Store(initialValue)
  .refs({ displayName: 'FieldStore' })
  .init(({ instance, args }) => {
    const [tetrisCat] = args;
    const tetrinoStore = tetrisCat.getStore('tetrinoStore');

    instance.register(transformer(tetrinoStore.map(
      (tetrinoState) => {
        return (fieldState) => {
          const { fieldArray } = fieldState;
          const { position: { x, y }, previous } = tetrinoState;
          if (previous) {
            fieldArray[previous.y][previous.x] = {};
          }
          fieldArray[y][x] = {
            id: tetrinoState.id,
            color: tetrinoState.color
          };
          fieldState.fieldArray = fieldArray;
          return fieldState;
        };
      }
    )));

    instance.register(Rx.Observable.interval(1000).map({
      transform: Rx.helpers.identity
    }));
  });
