import React, { useEffect } from 'react'
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"

export default function Player2SeasonAvg(props) {

  const playerID = props.player2.id
  const player2Name = props.player2.first_name

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

