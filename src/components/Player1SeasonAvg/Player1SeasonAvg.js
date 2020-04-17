import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"

export default function Player1SeasonAvg(props) {

  const playerID = props.player1.id

  const [player1Avg, setPlayer1Avg] = useState()
  const [on, setOn] = useState(false)

  const [chartData, setChartData] = useState()

  const emptyData = BLANKAVG

  let settings 

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        setPlayer1Avg(resp.data.data[0])
      })
      .then(()=>addAvgToArr())
      .catch(err => console.log(err))
  }, [])

  function addAvgToArr(){
    console.log('addAvgToArr function run')
    emptyData.map((elem,i)=>{
        elem[props.player1.first_name]=Object.entries(player1Avg)[i][1]
    })
    setChartData(emptyData)
    // Object.entries(player1Avg).map(e=>console.log(e))
  }

  console.log(BLANKAVG)

  return (
    <div>
      <p>plyer 1 AVG component</p>
      <button onClick={() => console.log(player1Avg)}>AVERAGE</button>
      <button onClick={() => setOn(true)}>on</button>
      <button onClick={() => console.log(chartData)}>log chartData</button>
      <button onClick={() => console.log(emptyData)}>log emptyData</button>
      <button onClick={() => console.log(addAvgToArr())}>runchart function</button>
      {on && <BarChart width={600} height={300} data={emptyData.slice(0,1).concat(emptyData.slice(3,21))}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="pv" fill="#8884d8" />
       <Bar dataKey="lebron" fill="#82ca9d" />
      </BarChart>}
    </div> 
    
  )
}

