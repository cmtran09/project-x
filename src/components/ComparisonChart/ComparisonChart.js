import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"

export default function ComparisonChart(props) {


  const [chartData, setChartData] = useState()
  const [chartData2, setChartData2] = useState()

  const emptyData = BLANKAVG
  const player1Name = props.player1.first_name
  // const player2Name = props.player2.first_name

  function timeConverter(time) {
    return time.split(":").map(elem => parseInt(elem)).join(".")
  }

  function addTochartData(data) {
    emptyData.map((elem, i) => {
      elem[player1Name] = Object.entries(data)[i][1]
    })
    emptyData[3][player1Name] = timeConverter(emptyData[3][player1Name])
    setChartData(emptyData)
  }

  useEffect(() => {
    addTochartData(props.player1Data)
  }, [])

  // function complieAllAvailibleData() {
  //   if (props.player2Data) {

  //   }
  // }

  return (
    <div>
      hello world this is comparisson chart component
      <button onClick={() => console.log(props.player2Data)}>PROPS AVERAGE2</button>
      <button onClick={() => console.log(props.player1Data)}>PROPS AVERAGE</button>
      {chartData && <BarChart width={600} height={300} data={chartData.slice(0, 1).concat(chartData.slice(3, 21))}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey={props.player1.first_name} fill="#82ca9d" />
      </BarChart>}
      {chartData2 && <BarChart width={600} height={300} data={chartData.slice(0, 1).concat(chartData.slice(3, 21))}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey={props.player2.first_name} fill="#82ca9d" />
      </BarChart>}
    </div>
  )
}
