import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from "react-card-flip";
import CardImage from './CardImage';
import CardGift from './CardGift';
import Participant from './Participant';

Card.propTypes = {
  number: PropTypes.number.isRequired,
  gift: PropTypes.object.isRequired,
  participants: PropTypes.array.isRequired,
};

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function selectCard() {
    setIsFlipped(true);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="Card CardNumber animation" onClick={ selectCard }>
        <span>{ props.number }</span>
      </div>

      <div
        className={
          props.gift.type === "special" ?
          "Card CardFlipped CardSpecial CardSpecial" + props.gift.className
          : "Card CardFlipped CardStandard"
        }>
        <div className="SmallNumber">{ props.number }</div>
        <div className="Gift">
          { props.gift.type === "standard" &&
            <CardImage
              image={ props.gift.image }
              title={ props.gift.title }
              />
          }
          <CardGift
            link={ props.gift.link }
            title={ props.gift.title }
            description={ props.gift.description }
            />
        </div>
        <Participant
          gift={ props.gift }
          participants={ props.participants }
          />
      </div>
    </ReactCardFlip>
  )
}

export default Card;
