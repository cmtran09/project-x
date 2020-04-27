import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"

export default function Player1SeasonAvg(props) {

  const emptyData = BLANKAVG

  const playerID = props.player1.id
  const player1Name = props.player1.first_name

  // const [player1Avg, setPlayer1Avg] = useState()

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        props.setPlayer1Data(resp.data.data[0])
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <p>{`player 1 : ${player1Name} AVG component`}</p>
    </div>

  )
}

