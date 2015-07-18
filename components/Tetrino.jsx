import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
// import assign from 'object.assign';


export default contain(
  {
    store: 'TetrinoState',
    actions: 'tetrinoActions'
  },
  React.createClass({
    displayName: 'Tetrino',

    propTypes: {
      tetrinoActions: PropTypes.object,
      position: PropTypes.object
    },

    componentDidMount() {
    },

    render() {
      const { position: { x, y } } = this.props;

      const style = {
        position: 'relative',
        backgroundColor: 'black',
        height: '20px',
        width: '20px',
        top: x + 'px',
        left: y + 'px'
      };

      return (
        <div style={ style }>
        </div>
      );
    }
  })
);
