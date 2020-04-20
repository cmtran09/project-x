import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"

export default function Player2SeasonAvg(props) {

  const emptyData = BLANKAVG

  const playerID = props.player2.id
  const player2Name = props.player2.first_name

  // const [player2Avg, setPlayer2Avg] = useState()

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        props.setPlayer2Data(resp.data.data[0])
      })
      // .then(console.log("player2Avg inside use effect", player2Avg))
      .catch(err => console.log(err))
  }, [])

  // useEffect(() => {
  //   if (player2Avg) {
  //     addTochartData()
  //   }
  // }, [player2Avg])
  // console.log("    emptyData[3][player2Name]", emptyData[3][player2Name])
  // console.log(parseInt("27:51"))
  // console.log("props.player2Data IMPORTANT", props.player2Data)

  return (
    <div>
      <p>{`plyer 2 : ${player2Name} AVG component`}</p>

      <button onClick={() => console.log(props.player2Data)}>average in p2 comp AVERAGE2</button>

    </div>

  )
}

