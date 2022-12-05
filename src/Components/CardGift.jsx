import React from 'react';

export default function CardGift(props) {
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
