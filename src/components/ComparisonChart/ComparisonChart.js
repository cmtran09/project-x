import React, { useState, useEffect } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { BLANKAVG } from "../../constants/Constants.js"

export default function ComparisonChart(props) {


  const [chartData, setChartData] = useState()
  // const [props.player, setprops.player] = useState()

  const emptyData = BLANKAVG
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

  function addTochartData(individualPlayerData, name, dataToBeCharted) {
    const sortedArr = sortArrObjAlphabetically(Object.entries(individualPlayerData))
    dataToBeCharted.map((elem, i) => {
      elem[name] = sortedArr[i][1]
    })
    dataToBeCharted[findTimeIndex(dataToBeCharted)][name] = timeConverter(dataToBeCharted[findTimeIndex(dataToBeCharted)][name])
    return dataToBeCharted
  }

  // console.log(Object.entries(props.player1Data))
  // console.log("ar", sortArrObjAlphabetically(Object.entries(props.player1Data)))
  // console.log("arrrrrr", addTochartData(props.player1Data, "levrbon", emptyData))
  // console.log(Object.entries(props.player1Data)[0][0])
  // console.log(Object.entries(props.player1Data)[1][0])

  console.log("conditional", props.player2Data ? true : false)

  function find(arr) {
    const playerIndex = arr.findIndex(elem => elem.name === "player_id")
    const seasonIndex = arr.findIndex(elem => elem.name === "season")
    if (playerIndex && seasonIndex > 0) {
      console.log("we found the indexes")
      arr.splice(seasonIndex, 1)
      arr.splice(playerIndex, 1)
      return arr
    }
    return arr
  }

  function spread(arr1, arr2) {
    arr1.map((elem, i) => {
      return elem = { ...elem, ...arr2[i] }
    })
    return arr1
  }

  // TRY CREATE A FUNCTION THAT RETURNS INDIVIDUAL ARRATYS
  function toChartData(individualPlayerData, name, dataToBeCharted) {
    const sortedArr = sortArrObjAlphabetically(Object.entries(individualPlayerData))
    // spread(dataToBeCharted, sortedArr)
    // dataToBeCharted[findTimeIndex(dataToBeCharted)][name] = timeConverter(dataToBeCharted[findTimeIndex(dataToBeCharted)][name])
    return spread(dataToBeCharted, sortedArr)
  }

  console.log("spreadddddddddddddddddddddddddddddddd", toChartData(props.player1Data, player1Name, emptyData))
  // console.log("spread22222222222222222dddddddddddddddd", toChartData(props.player1Data, "player2", emptyData))
  // console.log("spread", emptyData)

  // useEffect(() => {
  //   addTochartData(props.player1Data, player1Name, emptyData)
  //   find(emptyData)
  //   setChartData(emptyData)
  // }, [])

  // useEffect(() => {
  //   if (props.player2Data) {
  //     setChartData(null)
  //     // THESE CAUSE DATA TO BE ADDED IN INCORRECTLY
  //     addTochartData(props.player1Data, props.player1.first_name, emptyData)
  //     addTochartData(props.player2Data, props.player2.first_name, emptyData)
  //     // removePIDandYear(emptyData)
  //     find(emptyData)
  //     setChartData(emptyData)
  //     console.log("it me")
  //   }
  // }, [props.player2Data])

  // console.log("checking why 16 length arr", chartData)

  function sameTwice() {
    let arrX = addTochartData(props.player1Data, player1Name, emptyData)
    return addTochartData(props.player1Data, player1Name, arrX)
  }

  // console.log("ARRRRRGGGG", sameTwice())

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
      <button onClick={() => console.log(addTochartDataNEW(props.player1Data, player1Name, emptyData))}>1 player to chart</button>
      <button onClick={() => console.log(addTochartDataNEW(props.player2Data, props.player2.first_name, emptyData))}>2 player to chart</button> */}
      <button onClick={() => console.log(props.player2.first_name)}>props 2 data</button>
      <button onClick={() => props.setPlayer2Data()}>remove 2</button>

    </div>
  )
}
