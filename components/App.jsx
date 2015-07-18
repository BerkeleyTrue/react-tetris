import Rx from 'rx';
import React from 'react';
import Field from './Field';
import Tetrino from './Tetrino';

const ticker = Rx.Observable
  .interval(16)
  .timeInterval();

export default React.createClass({
  displayName: 'Tetris',
  getInitialState() {
    return {
      x: 0
    };
  },

  componentDidMount() {
    ticker.subscribe(
      (count) => {
        this.setState({ x: count.value });
      }
    );
  },

  render() {
    const { x } = this.state;
    const blockPosition = {
      top: x + 'px',
      left: '10px'
    };

    return (
      <div>
        <Field>
          <Tetrino blockPosition={ blockPosition } />
        </Field>
      </div>
    );
  }
});
