import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function SearchResult(props) {

  return (
    props.searchResult.map((player, i) => {
      return (
        <ListItem key={i}>
          <div
            // className="list-results"
            onClick={() => {
              console.log(`${player.first_name} ${player.last_name}`)
              if (!props.player1Selected) {
                props.setPlayer1(player)
                props.setSearchResult(null)
                props.setPlayer1Selected(true)
                props.setPlayerSearch(undefined)
              } else {
                props.setPlayer2(player)
                props.setSearchResult(null)
                props.setPlayer2Selected(true)
                props.setPlayerSearch(undefined)
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <p>{`${player.first_name} ${player.last_name}`}</p>
          </div>
        </ListItem>
      )
    })
  )
}
