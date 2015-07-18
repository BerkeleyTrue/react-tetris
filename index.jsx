import React from 'react';
import { Render } from 'thundercats-react';
import App from './components/App.jsx';
import TetrisCat from './components/TetrisCat';

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
