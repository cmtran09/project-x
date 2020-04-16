import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Player1SeasonAvg(props) {

  const playerID = props.player1.id

  const [seasonAverage, setSeasonAverage] = useState([])

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        setSeasonAverage(resp.data)
        console.log(seasonAverage)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>Player1SeasonAvg ==== component</p>
      <button onClick={() => console.log(seasonAverage)}>AVERAGE</button>

    </div>
  )
}
