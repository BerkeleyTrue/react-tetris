import Rx from 'rx';
import React from 'react';
import { Render } from 'thundercats-react';
import App from './components/App.jsx';
import TetrisCat from './flux/TetrisCat';

Rx.config.longStackSupport = true;

const mountNode = document.getElementById('tetris');

Render(TetrisCat(), <App />, mountNode)
  .subscribe(
    () => {
      console.log('rendered');
    },
    (err) => {
      console.log('react errored', err);
    }
  );
