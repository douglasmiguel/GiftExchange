import React, { useState } from 'react';
import PropTypes from 'prop-types';

Player.propTypes = {
  participants: PropTypes.array.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};

function Player(props) {
  const [skippedPlayers, setSkippedPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  function skipParticipant(participant) {
    setSkippedPlayers([...skippedPlayers, participant]);

    moveToNextPlayer();
  }

  function moveToNextPlayer() {
    if (typeof props.participants[currentPlayer + 1] === 'undefined') {
      props.setIsGameOver(true);
      console.info('== GAME OVER ==');

      return;
    }

    console.info('Next player: ' + props.participants[currentPlayer + 1].name);

    setCurrentPlayer(previousPlayer => previousPlayer + 1);
  }

  return (
    <div className="Player">
      <strong>{ props.participants[currentPlayer].name }</strong>
      <button className="animation" onClick={ () => skipParticipant(props.participants[currentPlayer]) }>Skip</button>
      <button className="animation" onClick={ () => moveToNextPlayer() }>Next Player</button>
    </div>
  );
};

export default Player;
