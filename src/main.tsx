import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createGame } from './game';

const root = createRoot(document.getElementById('app'));
const game = createGame();
root.render(
  <React.StrictMode>
    <App initialGame={game}></App>
  </React.StrictMode>
);
