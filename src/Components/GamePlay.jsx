import React, { useState } from 'react';
import _ from 'underscore';

export default function GamePlay(props) {
  const [isStarted, setIsStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [participants] = useState(_.shuffle(props.participants));
  const [currentParticipant, setCurrentParticipant] = useState(0);
  const [skippedParticipants, setSkippedParticipants] = useState([]);

  function startGame() {
    setIsStarted(true);

    setCurrentParticipant(0);
  }

  function skipParticipant(participant) {
    setSkippedParticipants([...skippedParticipants, participant]);

    moveToNextParticipant();
  }

  function moveToNextParticipant() {
    if (typeof participants[currentParticipant + 1] === 'undefined') {
      setIsGameOver(true);

      return;
    }

    setCurrentParticipant(previousParticipant => previousParticipant + 1);
  }

  return (
    <div className="GamePlay">
      { !isGameOver && !isStarted && (
        <button className="animation" onClick={ startGame }>Start</button>
      )}

      { !isGameOver && isStarted && (
        <div className="Player">
          <strong>{ participants[currentParticipant].name }</strong>
          <button className="animation" onClick={ () => skipParticipant(participants[currentParticipant]) }>Skip</button>
          <button className="animation" onClick={ () => moveToNextParticipant() }>Next Player</button>
        </div>
      )}

      { isGameOver && (
        <div className="GameOver">Game is over! Thank you.</div>
      )}
    </div>
  )
}
