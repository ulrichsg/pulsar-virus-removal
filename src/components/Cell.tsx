import { useContext } from 'react';
import * as React from 'react';
import { AppContext } from './App';

type Props = { index: number };

export function Cell({index}: Props) {
  const context = useContext(AppContext);

  const cssClass = (i: number) => {
    if (i < 4) {
      return 'inactive';
    }
    const { outcome, target } = context;
    if (outcome?.correct && outcome?.guess === i) {
      return 'correct';
    }
    if (outcome?.correct === false && target === i) {
      return 'wrong';
    }
    return '';
  }

  const handleClick = () => {
    if (index >= 4 && context.outcome === null) {
      context.setOutcome({guess: index, correct: index === context.target});
    }
  }

  return (
    <td className={cssClass(index)} onClick={handleClick}>
      {context.sequence[index]}
    </td>
  );
}
