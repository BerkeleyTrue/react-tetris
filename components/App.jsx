import Rx from 'rx';
import React, { PropTypes } from 'react';
import keyBinding from 'react-keybinding';
import { contain } from 'thundercats-react';
import Field from './Field';
import Tetrino from './Tetrino';

export default contain(
  {
    store: 'tetrisStore',
    actions: [
      'tetrisActions',
      'tetrinoActions'
    ]
  },
  React.createClass({
    displayName: 'Tetris',
    mixins: [keyBinding],

    propTypes: {
      tetrisActions: PropTypes.object,
      tetrinoActions: PropTypes.object
    },

    keybindings: {
      'w': 'rotate',
      'a': 'moveLeft',
      's': 'moveDown',
      'd': 'moveRight'
    },

    keybinding(e, action) {
      const { tetrinoActions: actions } = this.props;
      actions[action]();
    },

    componentDidMount() {
      const { tetrisActions } = this.props;

      this.tickerSubscription = Rx.Observable
        .interval(150)
        .subscribe(() => { tetrisActions.tick(); });
    },

    render() {
      return (
        <div>
          <Field>
            <Tetrino />
          </Field>
        </div>
      );
    }
  })
);
