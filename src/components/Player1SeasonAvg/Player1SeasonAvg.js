import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Player1SeasonAvg(props) {

  const playerID = props.player1.id

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        props.setPlayer1Data(resp.data.data[0])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {/* <p>{`player 1 : ${player1Name} AVG component`}</p> */}
    </div>

  )
}

