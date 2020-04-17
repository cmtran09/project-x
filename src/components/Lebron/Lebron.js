import React, { useState, useEffect } from 'react'
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export default function Lebron() {

  const emptyData = [
    {name: 'games_played'},
    {name: 'Player_id'},
    {name: 'season'},
    {name: 'min'},
    {name: 'fgm'},
    {name: 'fga'},  
    {name: 'fg3m'},
    {name: 'fg3a'},
    {name: 'fga'},
    {name: 'ftm'},
    {name: 'oreb'},
    {name: 'dreb'},  
    {name: 'reb'},
    {name: 'ast'},
    {name: 'stl'}, 
    {name: 'blk'},
    {name: 'turnover'},
    {name: 'pf'},
    {name: 'pts'},
    {name: 'fg_pct'}, 
    {name: 'fg3_pct'},
    {name: 'ft_pct'}
  ]

  const playerID = 236

  const [lebronAvg, setLebronAvg] = useState()
  const [theData, setTheData] = useState()

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}&season=2019`)
      .then(resp => {
        setLebronAvg(resp.data.data[0])
        console.log(lebronAvg)
      })
      .catch(err => console.log(err))
  }, [])

  // console.log("array 22 length with name",Array(22).fill({name:null}))
  console.log("aempty data array",emptyData)
  // emptyData[0]["lebron"]="hello mate"

  function pushLebron(){
    emptyData.map((elem,i)=>{
        elem["lebron"]=Object.entries(lebronAvg)[i][1]
    })
    setTheData(emptyData)
    // Object.entries(lebronAvg).map(e=>console.log(e))
  }
  // pushLebron()
  console.log("aempty data array after push",emptyData)

  // console.log("aempty data array pushed with some data",emptyData[0]["lebron"]="hello mate")
  
  console.log(theData)
  return (
    <div>
      <p>LEBRON AVG</p>
      <button onClick={() => console.log(lebronAvg)}>BRON BRON BUTTON</button>
      <button onClick={() => console.log(Object.entries(lebronAvg))}>BRON BRON BUTTON entries</button>
      <button onClick={() => console.log(pushLebron())}>BRONentries print</button>
      <button onClick={() => console.log(emptyData)}>empty print</button>
      <button onClick={() => console.log(theData)}>empty print</button>
      {theData && <BarChart width={600} height={300} data={theData.slice(0,1).concat(theData.slice(3,21))}
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

// const data = [
//   {name: 'games_played', lebron: 60, pv: 10,},
//   {name: 'Player_id', lebron: 237, pv: 10,},
//   {name: 'season', lebron: 2019, pv: 10,},
//   {name: 'min', lebron: 3454, pv: 10,},
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