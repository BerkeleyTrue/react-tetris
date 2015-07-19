import { SCALE } from '../constants';
import React, { PropTypes } from 'react';

export default React.createClass({
  displayName: 'Tetrino',

  propTypes: {
    x: PropTypes.number,
    y: PropTypes.number
  },

  render() {
    const { x, y } = this.props;

    const style = {
      position: 'relative',
      backgroundColor: 'black',
      height: '20px',
      width: '20px',
      top: (y * SCALE) + 'px',
      left: (x * SCALE) + 'px'
    };

    return (
      <div style={ style }>
      </div>
    );
  }
});
