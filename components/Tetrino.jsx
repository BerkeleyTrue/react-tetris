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
      const { position } = this.props;

      const style = {
        position: 'relative',
        backgroundColor: 'black',
        height: '20px',
        width: '20px',
        top: position.x + 'px',
        left: position.y + 'px'
      };

      return (
        <div style={ style }>
        </div>
      );
    }
  })
);
