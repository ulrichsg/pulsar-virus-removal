import * as React from 'react';
import { createContext, useState } from 'react';
import { Game, Outcome, createGame } from '../game';
import { RestartButton } from './RestartButton';
import { Sequence } from './Sequence';
import GithubCorner from 'react-github-corner';

export const AppContext = createContext(null);

type Props = { initialGame: Game };

export function App(props: Props) {
  let [game, setGame] = useState<Game>(props.initialGame);
  let [outcome, setOutcome] = useState<Outcome | null>(null);

  const state = {
    sequence: game.sequence,
    target: game.target,
    outcome,
    setOutcome,
  }

  const restart = () => {
    setOutcome(null);
    setGame(createGame());
  }

  return (
    <AppContext.Provider value={state}>
      <Sequence/>
      <RestartButton onClick={restart}/>
      <GithubCorner href="https://github.com/ulrichsg/pulsar-virus-removal"/>
    </AppContext.Provider>
  );
}
