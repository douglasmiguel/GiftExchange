import React from 'react';

export default function CardGift(props) {
  return (
    <h1>
      <a
        href={ props.link }
        rel="noreferrer"
        target="_blank">
          { props.title }
      </a>
    </h1>
  )
}
