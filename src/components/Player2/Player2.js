import React from 'react'

export default function Player2(props) {
  return (
    <p className="selected-player-txt">
      {`Player 2: ${props.player2.first_name} ${props.player2.last_name} of the ${props.player2.team.full_name}`}
    </p>
  )
}
