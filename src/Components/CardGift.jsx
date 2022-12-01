import React from 'react';

export default function CardGift(props) {
  return (
    <div>
      <a
        href={ props.link }
        noreferal
        target="_blank">
          { props.title }
      </a>
    </div>
  )
}
