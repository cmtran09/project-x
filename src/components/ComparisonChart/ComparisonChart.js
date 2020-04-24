import React, { useState, useEffect } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { BLANKAVG } from "../../constants/Constants.js"

export default function ComparisonChart(props) {

  const [chartData, setChartData] = useState()

  const player1Name = props.player1.first_name

  function timeConverter(time) {
    return time.split(":").map(elem => parseInt(elem)).join(".")
  }

  function sortArrObjAlphabetically(arr) {
    arr.sort((a, b) => {
      return a[0].localeCompare(b[0])
    })
    return arr
  }

  function findTimeIndex(arr) {
    return arr.findIndex(elem => elem.name === "min")
  }

  // console.log(Object.entries(props.player1Data))
  // console.log("ar", sortArrObjAlphabetically(Object.entries(props.player1Data)))
  // console.log("arrrrrr", addTochartData(props.player1Data, "levrbon", emptyData))
  // console.log(Object.entries(props.player1Data)[0][0])
  // console.log(Object.entries(props.player1Data)[1][0])

  console.log("conditional", props.player2Data ? true : false)

  function removePIDandSeason(arr) {
    const playerIndex = arr.findIndex(elem => elem.name === "player_id")
    const seasonIndex = arr.findIndex(elem => elem.name === "season")
    if (playerIndex && seasonIndex > 0) {
      arr.splice(seasonIndex, 1)
      arr.splice(playerIndex, 1)
      return arr
    }
    return arr
  }

  function combinePlayerData(arr1, arr2) {
    return arr1.map((elem, i) => {
      return elem = { ...elem, ...arr2[i] }
    })
  }

  //create individual arrays
  function createPlayerData(individualPlayerData, name) {
    const emptyFormatArr = JSON.parse(JSON.stringify(BLANKAVG))
    const sortedArr = sortArrObjAlphabetically(Object.entries(individualPlayerData))
    emptyFormatArr.map((elem, i) => {
      return elem[name] = sortedArr[i][1]
    })
    emptyFormatArr[findTimeIndex(emptyFormatArr)][name] = timeConverter(emptyFormatArr[findTimeIndex(emptyFormatArr)][name])
    return emptyFormatArr
  }

  useEffect(() => {
    const player1ChartData = createPlayerData(props.player1Data, player1Name)
    removePIDandSeason(player1ChartData)
    setChartData(player1ChartData)
  }, [])

  useEffect(() => {
    if (props.player2Data) {
      setChartData(null)
      console.log("it me")
      const player1ChartData = createPlayerData(props.player1Data, props.player1.first_name)
      const player2ChartData = createPlayerData(props.player2Data, props.player2.first_name)
      removePIDandSeason(player1ChartData)
      removePIDandSeason(player2ChartData)
      const combinedData = combinePlayerData(player1ChartData, player2ChartData)
      setChartData(combinedData)
    }
  }, [props.player2Data])

  return (
    <div>
      hello world this is comparisson chart component
      <button onClick={() => console.log(props.player2Data)}>PROPS AVERAGE2</button>
      <button onClick={() => console.log(props.player1Data)}>PROPS AVERAGE</button>
      <button onClick={() => console.log(chartData)}>chart data from the comparison component AVERAGE</button>
      {chartData &&
        <BarChart
          width={900}
          height={300}
          //removes the season for recharts
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={props.player1.first_name} fill="#851700" />
          {/* add conditional if player selected then plot data */}
          {props.player2Data &&
            <Bar dataKey={props.player2.first_name} fill="#000E85" />
          }
        </BarChart>}
      {/* <button onClick={() => console.log(props.player2Data)}>AVERAGE22</button>
      <button onClick={() => console.log(createPlayerDataNEW(props.player1Data, player1Name, emptyData))}>1 player to chart</button>
      <button onClick={() => console.log(createPlayerDataNEW(props.player2Data, props.player2.first_name, emptyData))}>2 player to chart</button> */}
      <button onClick={() => console.log(props.player2.first_name)}>props 2 data</button>
      <button onClick={() => props.setPlayer2Data()}>remove 2</button>

    </div>
  )
}
