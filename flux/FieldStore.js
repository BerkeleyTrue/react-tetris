import Rx from 'rx';
import { Store } from 'thundercats';

const h = 30, w = 20;

function create2DArray(x, y) {
  return Array.apply(null, new Array(y))
    .map(() => Array.apply(null, new Array(x)).map(() => 0));
}

const initialValue = {
  height: (h * 20) + 'px',
  width: (w * 30) + 'px',
  h,
  w,
  fieldArray: create2DArray(h, w)
};

export default Store(initialValue)
  .refs({ displayName: 'FieldStore' })
  .init(({ instance }) => {
    instance.register(Rx.Observable.interval(1000).map({
      transform: Rx.helpers.identity
    }));
  });
