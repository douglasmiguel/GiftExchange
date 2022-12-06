import React from 'react';
import PropTypes from 'prop-types';

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function CardImage(props) {
  return (
    <img
      src={ props.image }
      alt={ props.title }
      title={ props.title }
      />
  )
}

export default CardImage;
