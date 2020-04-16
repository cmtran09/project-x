import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export default function Lebron() {

  // const data = [
  //   // {name: 'games_played', lebron: 60, pv: 10,},
  //   // {name: 'Player_id', lebron: 237, pv: 10,},
  //   // {name: 'season', lebron: 2019, pv: 10,},
  //   // {name: 'min', lebron: 3454, pv: 10,},
  //   {name: 'fgm', lebron: 9.77, pv: 10,},
  //   {name: 'fga', lebron: 19.6, pv: 10,},  
  //   {name: 'fg3m', lebron: 2.22, pv: 10,},
  //   {name: 'fg3a', lebron: 6.35, pv: 10,},
  //   {name: 'fga', lebron: 3.98, pv: 10,},
  //   {name: 'ftm', lebron: 5.72, pv: 10,},
  //   {name: 'oreb', lebron: 0.95, pv: 10,},
  //   {name: 'dreb', lebron: 6.9, pv: 10,},  
  //   {name: 'reb', lebron: 7.85, pv: 10,},
  //   {name: 'ast', lebron: 10.6, pv: 10,},
  //   {name: 'stl', lebron: 1.23, pv: 10,}, 
  //   {name: 'blk', lebron: 0.5, pv: 10,},
  //   {name: 'turnover', lebron: 3.9, pv: 10,},
  //   {name: 'pf', lebron: 1.77, pv: 10,},
  //   {name: 'pts', lebron: 25.73, pv: 10,},
  //   {name: 'fg_pct', lebron: 0.498, pv: 10,}, 
  //   {name: 'fg3_pct', lebron: 0.34, pv: 10,},
  //   {name: 'ft_pct', lebron: 0.697, pv: 10,}
  // ]

  const playerID = 236

  const [lebronAvg, setLebronAvg] = useState([])

  // useEffect(() => {
  //   axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
  //     .then(resp => {
  //       setLebronAvg(resp.data)
  //       console.log(seasonAverage)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <div>
      <p>LEBRON AVG</p>
      {/* <button onClick={() => console.log(lebronAvg)}>BRON BRON BUTTON</button>  */}
      {/* <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="pv" fill="#8884d8" />
       <Bar dataKey="lebron" fill="#82ca9d" />
      </BarChart> */}
    </div> 
    
  )
}

