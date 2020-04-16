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
            props.setPlayer1(player)
            props.setSearchResult(null)
          }}
          style={{ cursor: "pointer" }}
        >
          <p>{`${player.first_name} ${player.last_name}`}</p>
        </div>
      )
    })
  )
}
