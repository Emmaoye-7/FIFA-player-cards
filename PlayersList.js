import React from 'react';
import Player from './Player';
import players from './players';

function PlayersList() {
  return (
    <div className="row g-4">
      {players.map((player) => (
        <div className="col-12 col-sm-6 col-lg-3" key={player.name}>
          <Player {...player} />
        </div>
      ))}
    </div>
  );
}

export default PlayersList;
