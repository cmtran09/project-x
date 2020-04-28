import React, { useEffect } from 'react'
import axios from "axios"

export default function Player2SeasonAvg(props) {

  const playerID = props.player2.id

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        props.setPlayer2Data(resp.data.data[0])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
    </div>
  )
}

