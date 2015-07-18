import Rx from 'rx';
import { contain } from 'thundercats-react';
import React, { PropTypes } from 'react';
import Field from './Field';
import Tetrino from './Tetrino';

export default contain(
  {
    store: 'tetrisStore',
    actions: 'tetrisActions'
  },
  React.createClass({
    displayName: 'Tetris',

    propTypes: {
      tetrisActions: PropTypes.object
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
