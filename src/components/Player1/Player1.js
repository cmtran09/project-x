import React from 'react'

export default function Player1(props) {
  return (
    <p>
      {`Player 1: ${props.player1.first_name} ${props.player1.last_name} of the ${props.player1.team.full_name}`}
    </p>
  )
}
