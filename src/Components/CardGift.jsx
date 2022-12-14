import React from 'react';
import PropTypes from 'prop-types';

CardGift.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
};

function CardGift(props) {
  return (
    <div>
      <h1>
        { props.link !== "" ?
        <a
          href={ props.link }
          rel="noreferrer"
          target="_blank">
            { props.title }
        </a>
        : <p>{ props.title }</p>
        }
      </h1>

      { props.description !== "" ?
      <p className="description">{ props.description } </p>
      : "" }
    </div>
  )
}

export default CardGift;
