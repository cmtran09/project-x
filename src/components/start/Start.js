import React, { useState } from 'react'
import axios from 'axios'

import SearchResult from "../SearchResult/SearchResult"
import SelectedPlayer1 from "../SelectedPlayer1/SelectedPlayer1"
import SelectedPlayer2 from "../SelectedPlayer2/SelectedPlayer2"

export default function Start() {

  const [player1, setPlayer1] = useState(null)
  const [player1Selected, setPlayer1Selected] = useState(false)
  const [player2, setPlayer2] = useState(null)
  const [player2Selected, setPlayer2Selected] = useState(false)

  const [playerSearch, setPlayerSearch] = useState(null)
  const [searchResult, setSearchResult] = useState([])

  function getPlayer(e) {
    e.preventDefault()
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerSearch}`)
      .then(res => {
        console.log(res.data)
        setSearchResult(res.data.data)
        console.log("state", searchResult)
      })
      .catch(err => console.log(err))
  }

  function handleChange(e) {
    setPlayerSearch(e.target.value)
    console.log(player1)
  }

  console.log("search result", searchResult)

  return (
    <div>
      <p>
        hello world poeple asd
      </p>
      <form action="">
        <input
          type="text"
          placeholder="Search Player"
          onChange={handleChange}
        />
        <button onClick={e => {
          getPlayer(e)
        }}>Search</button>
      </form>
      <div className="list">
        {searchResult &&
          <SearchResult
            searchResult={searchResult}
            setPlayer1={setPlayer1}
            player1Selected={player1Selected}
            setPlayer1Selected={setPlayer1Selected}
            setPlayer2={setPlayer2}
            player2Selected={player2Selected}
            setPlayer2Selected={setPlayer2Selected}
            setSearchResult={setSearchResult}
          />
        }
      </div>
      {player1 && <SelectedPlayer1 player1={player1} /> || <p> Player 1: Not Selected</p>}
      {player2 && <SelectedPlayer2 player2={player2} /> || <p> Player 2: Not Selected</p>}
      <button onClick={() => console.log(player1)}>button</button>
    </div >
  )
}
