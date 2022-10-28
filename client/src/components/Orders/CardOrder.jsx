import React from 'react'

const CardOrder = ({name,price, picture}) => {
  return (
    <div>
        <h1>{name}</h1>
        <span>{price}</span>
        <img src={picture} alt="img"/>
    </div>
  )
}

export default CardOrder