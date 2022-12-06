import React, { useState } from 'react';
import PropTypes from 'prop-types';

Participant.propTypes = {
  gift: PropTypes.object.isRequired,
  participants: PropTypes.array.isRequired,
};

function Participant(props) {
  const [selectedParticipant, setSelectedParticipant] = useState('');

  function handleParticipantChange(event, giftId) {
    const selectedParticipant = props.participants.filter(participant => participant.id === parseInt(event.target.value))[0];
    setSelectedParticipant(selectedParticipant);
    console.log(selectedParticipant.id + ' => ' + selectedParticipant.name + ' with Gift ' + giftId);
  }

  function cancelGiftSelection(event, giftId) {
    setSelectedParticipant('');
    console.log('Removed participant from Gift ' + giftId);
  }

  return (
    <div className="Participant">
    { !selectedParticipant ? (
      <select
        defaultValue={ selectedParticipant }
        name="participant"
        onChange={ event => handleParticipantChange(event, props.gift.id) }
        >
          <option value="">-- select participant --</option>
          { props.participants.map((participant) => (
            <option key={participant.id} value={ participant.id }>{ participant.name }</option>
          ))}
      </select>
    ) : (
      <div className="selectedParticipant">
        <span>{ selectedParticipant.name }</span>
        <button onClick={ (event) => cancelGiftSelection(event, props.gift.id) }>x</button>
      </div>
    )}
  </div>
  );
}

export default Participant;
