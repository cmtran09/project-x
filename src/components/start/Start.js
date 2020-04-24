import React, { useState } from "react"
import axios from "axios"

import SearchResult from "../SearchResult/SearchResult"
import Player1 from "../Player1/Player1"
import Player2 from "../Player2/Player2"
import Player1SeasonAvg from "../Player1SeasonAvg/Player1SeasonAvg"
import Player2SeasonAvg from "../Player2SeasonAvg/Player2SeasonAvg"

import ComparisonChart from "../ComparisonChart/ComparisonChart"

import Lebron from "../Lebron/Lebron"
import Curry from "../Curry/Curry"

export default function Start() {

  const [player1, setPlayer1] = useState(null)
  const [player1Selected, setPlayer1Selected] = useState(false)
  const [player2, setPlayer2] = useState(null)
  const [player2Selected, setPlayer2Selected] = useState(false)
  const [player1Data, setPlayer1Data] = useState(null)
  const [player2Data, setPlayer2Data] = useState(null)


  const [playerSearch, setPlayerSearch] = useState(null)
  const [searchResult, setSearchResult] = useState([])

  function getPlayer(e) {
    e.preventDefault()
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerSearch}`)
      .then(res => {
        setSearchResult(res.data.data)
      })
      .catch(err => console.log(err))
  }

  function handleChange(e) {
    setPlayerSearch(e.target.value)
  }

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
      {player1 && <Player1 player1={player1} /> || <p> Player 1: Not Selected</p>}
      {player2 && <Player2 player2={player2} /> || <p> Player 2: Not Selected</p>}
      <button onClick={() => console.log(player1)}>button</button>
      <Curry />
      <p>stats</p>
      {/* <Lebron /> */}
      {player1 &&
        <Player1SeasonAvg
          player1={player1}
          setPlayer1Data={setPlayer1Data}
          player1Data={player1Data}
        />}
      {player2 &&
        <Player2SeasonAvg
          player2={player2}
          setPlayer2Data={setPlayer2Data}
          player2Data={player2Data}
        />}
      {player1Data &&
        <ComparisonChart
          player1={player1}
          player2={player2}
          player1Data={player1Data}
          player2Data={!player2Data ? null : player2Data}
          setPlayer2Data={setPlayer2Data}
        // player2Data={!player2Data ? null : player2Data}
        />}

      <button onClick={() => console.log(player1Data)}>AVERAGE</button>
      <button onClick={() => console.log(player2Data)}>AVERAGE2</button>
      <button onClick={() => console.log(player1)}>player1</button>
      {!player2Selected &&
        <button onClick={() => {
          setPlayer1Data(null)
          setPlayer1(null)
          setPlayer1Selected(false)
        }}>remove player 1</button>
      }
      {player2Selected &&
        <button onClick={() => {
          setPlayer2Data(null)
          setPlayer2(null)
          setPlayer2Selected(false)
        }}>remove player 2</button>
      }
    </div >
  )
}
