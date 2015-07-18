import React, { PropTypes } from 'react';

export default React.createClass({
  displayName: 'Field',

  propTypes: {
    children: PropTypes.node
  },

  render() {
    const styling = {
      borderColor: 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
      width: '400px',
      height: '600px'
    };

    return (
      <div
        id='field'
        style={ styling }>
        { this.props.children }
      </div>
    );
  }
});
