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
      width: PropTypes.string
    },

    renderField(fieldArray) {
      return fieldArray.map((row, rowIdx) => {
        return row.map(({ id, color }, colIdx) => {
          if (id) {
            return (
              <Tetrino
                color={ color}
                key={ id + rowIdx + colIdx }
                x={ colIdx }
                y={ rowIdx } />
            );
          }
          return (
            <div key={ rowIdx + colIdx } />
          );
        });
      });
    },

    render() {
      const { height, width, fieldArray } = this.props;
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
          { this.renderField(fieldArray) }
        </div>
      );
    }
  })
);
