import React, { useState } from 'react'
import axios from 'axios'

import SearchResult from "../SearchResult/SearchResult"
import SelectedPlayer1 from "../SelectedPlayer1/SelectedPlayer1"

export default function Start() {

  const [player1, setPlayer1] = useState(null)
  const [player2, setPlater2] = useState(null)

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
        {searchResult && <SearchResult searchResult={searchResult} setPlayer1={setPlayer1} setSearchResult={setSearchResult} />}
      </div>
      {player1 && <SelectedPlayer1 player1={player1} /> || <p> Player 1: Not Selected</p>}
      <button onClick={() => console.log(searchResult[0].id)}>button</button>
    </div >
  )
}
