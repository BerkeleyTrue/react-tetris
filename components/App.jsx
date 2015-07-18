import React from 'react';
import Field from './Field';
import Tetrino from './Tetrino';

export default React.createClass({
  displayName: 'Tetris',
  render() {
    return (
      <div>
        <Field>
          <Tetrino />
        </Field>
      </div>
    );
  }
});
