import React from 'react'

export default function SearchResult(props) {

  return (
    props.searchResult.map((player, i) => {
      return (
        <div
          key={i}
          className=""
          onClick={() => {
            console.log(`${player.first_name} ${player.last_name}`)
            if (!props.player1Selected) {
              props.setPlayer1(player)
              props.setSearchResult(null)
              props.setPlayer1Selected(true)
            } else {
              props.setPlayer2(player)
              props.setSearchResult(null)
              props.setPlayer2Selected(true)
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <p>{`${player.first_name} ${player.last_name}`}</p>
        </div>
      )
    })
  )
}
