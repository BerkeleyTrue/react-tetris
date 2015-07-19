import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import Tetrino from './Tetrino';

export default contain(
  {
    store: 'fieldStore'
  },
  React.createClass({
    displayName: 'Field',

    propTypes: {
      children: PropTypes.node,
      height: PropTypes.string,
      fieldArray: PropTypes.array,
      tetrinos: PropTypes.array,
      width: PropTypes.string
    },

    renderField(tetrinos) {
      return tetrinos.map(({ id, color, position: { x, y } }) => {
        return (
          <Tetrino
            color={ color }
            key={ id }
            x={ x }
            y={ y } />
        );
      });
    },

    render() {
      const { height, width, tetrinos } = this.props;
      // each column is 20px and there are 20
      // each row is 20px and there are 30
      const styling = {
        borderColor: 'black',
        borderWidth: '2px',
        borderStyle: 'solid',
        width,
        height
      };

      return (
        <div
          id='field'
          style={ styling }>
          { this.renderField(tetrinos) }
        </div>
      );
    }
  })
);
