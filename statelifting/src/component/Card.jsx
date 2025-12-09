import React from 'react'

const Card = (props) => {
  return (
    <div>Card 
        <input type="text" onChange={(e) => props.setName(e.target.value)} />
        <p>name value in card: {props.name}</p>

    </div>
  )
}

export default Card