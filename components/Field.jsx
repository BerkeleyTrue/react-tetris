import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';

export default contain(
  {
    store: 'fieldStore'
  },
  React.createClass({
    displayName: 'Field',

    propTypes: {
      children: PropTypes.node,
      width: PropTypes.string,
      height: PropTypes.string
    },

    render() {
      const { height, width } = this.props;
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
          { this.props.children }
        </div>
      );
    }
  })
);
