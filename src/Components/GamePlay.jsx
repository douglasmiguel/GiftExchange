import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Player from './Player';

GamePlay.propTypes = {
  participants: PropTypes.array.isRequired,
};

function GamePlay(props) {
  const [isStarted, setIsStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [participants] = useState(_.shuffle(props.participants));

  function startGame() {
    setIsStarted(true);
  }

  return (
    <div className="GamePlay">
      { !isGameOver && !isStarted && (
        <button className="animation" onClick={ startGame }>Start</button>
      )}

      { !isGameOver && isStarted && (
        <Player
          participants={ participants }
          setIsGameOver= { setIsGameOver }
          />
      )}

      { isGameOver && (
        <div className="GameOver">Game is over! Thank you.</div>
      )}
    </div>
  )
}

export default GamePlay;
