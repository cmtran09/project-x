import React, { useState, useEffect } from 'react'
import axios from "axios"

import Last5GamesTable from "../Last5GamesTable/Last5GamesTable"

export default function Last5Games(props) {

  const [gameData, setGameData] = useState([{}])

  const teamName = props.player.team.full_name
  const resultName = `${teamName.slice(0, teamName.length - 1)}'s`

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&page=4&team_ids[]=${props.player.team.id}`)
      .then(res => {
        setGameData(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(props)
  console.log(gameData, "homedata")
  return (
    <div>
      <p className="last5">
        {resultName} Last 5 Games
      </p>
      {gameData.length < 5 ? <h1>Not Enough Data to form Chart</h1> : gameData[0].home_team && <Last5GamesTable data={gameData} />}
    </div>
  )
}
