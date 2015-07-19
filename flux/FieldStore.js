import Rx from 'rx';
import { Store } from 'thundercats';
// import uuid from 'node-uuid';

const { transformer } = Store;
const h = 20, w = 5;

function create2DArray(y, x) {
  return Array.apply(null, new Array(y))
    .map(() => Array.apply(null, new Array(x)).map(() => ({})));
}

function getMostLeft(num) {
  return num <= 0 ? 0 : num;
}

function getMostRight(num) {
  return num >= w - 1 ? w - 1 : num;
}

function getVerticalBound(num) {
  return getMostLeft(num) === 0 ? 0 : getMostRight(num);
}

function getBottomBound(num) {
  return num >= h - 1 ? h - 1 : num;
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
    const tetrinoActions = tetrisCat.getActions('tetrinoActions');

    instance.register(transformer(tetrinoStore.map(
      (tetrinoState) => {
        return (fieldState) => {
          const { fieldArray } = fieldState;
          const { position: { x, y }, previous } = tetrinoState;
          if (x >= h) {
            tetrinoActions.createTetrino();
          } else {
            if (previous) {
              fieldArray[previous.y][previous.x] = {};
            }
            fieldArray[getBottomBound(y)][getVerticalBound(x)] = {
              id: tetrinoState.id,
              color: tetrinoState.color
            };
            fieldState.fieldArray = fieldArray;
          }
          return fieldState;
        };
      }
    )));

    instance.register(Rx.Observable.interval(1000).map({
      transform: Rx.helpers.identity
    }));
  });
