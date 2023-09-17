import * as React from 'react';
import { Cell } from './Cell';

export function Sequence() {
  const row = (first: number, last: number) => {
    const cells = [];
    for (let i = first; i <= last; ++i) {
      cells.push(<Cell key={i} index={i}></Cell>);
    }
    return cells;
  }

  return (
    <table id="sequence">
      <tbody>
      <tr>{row(0, 7)}</tr>
      <tr>{row(8, 15)}</tr>
      </tbody>
    </table>
  );
}