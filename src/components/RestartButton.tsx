import * as React from 'react';

type Props = {
  onClick: () => void,
}

export function RestartButton(props: Props) {
  return (
    <button id="restart" onClick={props.onClick}>
      Restart
    </button>
  );
}
