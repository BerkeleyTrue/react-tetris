import Rx from 'rx';
import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import assign from 'object.assign';


export default contain(
  {
    store: 'TetrinoState',
    actions: 'tetrinoActions'
  },
  React.createClass({
    displayName: 'Tetrino',

    propTypes: {
      position: PropTypes.object,
      tetrinoActions: PropTypes.object
    },

    componentDidMount() {
    },

    render() {
      const { position } = this.props;

      const style = {
        position: 'relative',
        backgroundColor: 'black',
        height: '20px',
        width: '20px'
      };

      return (
        <div style={ assign(style, position) }>
        </div>
      );
    }
  })
);
