import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import CardImage from './CardImage';
import CardGift from './CardGift';

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [participants] = useState(props.participants);
  const [selectedParticipant, setSelectedParticipant] = useState('');

  function selectCard() {
    setIsFlipped(true);
  }
  function handleParticipantChange(event, giftId) {
    const selectedParticipant = participants.filter(participant => participant.id === parseInt(event.target.value))[0];
    setSelectedParticipant(selectedParticipant);

    //console.log(selectedParticipant.id + ' => ' + selectedParticipant.name + ' with gift ' + giftId);
  }

  function cancelGiftSelection() {
    setSelectedParticipant('');
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="Card CardNumber animation" onClick={ selectCard }>
        { props.gift.id }
      </div>

      <div className="Card CardFlipped">
        <div className="SmallNumber">{ props.gift.id }</div>

        <div className="Gift">
          <CardImage image={props.gift.image} title={props.gift.title} />
          <CardGift link={props.gift.link} title={props.gift.title} />
        </div>

        <div className="Participant">
          { !selectedParticipant ? (
            <select
              defaultValue={ selectedParticipant }
              name="participant"
              onChange={ event => handleParticipantChange(event, props.gift.id) }
              >
                <option value="">-- select participant --</option>
                { participants.map((participant) => (
                  <option key={participant.id} value={ participant.id }>{ participant.name }</option>
                ))}
            </select>
          ) : (
            <div className="selectedParticipant">
              <span>{ selectedParticipant.name }</span>
              <button onClick={ () => cancelGiftSelection() }>x</button>
            </div>
          )}
        </div>
      </div>
    </ReactCardFlip>
  )
}