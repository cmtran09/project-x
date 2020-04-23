import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

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

  // function removePIDandYear(arr) {
  //   arr.splice(arr.findIndex(elem => elem.name === "player_id"), 1)
  //   arr.splice(arr.findIndex(elem => elem.name === "season"), 1)
  //   return arr
  // }
  function findTimeIndex(arr) {
    return arr.findIndex(elem => elem.name === "min")
  }

  // function addTochartData(individualPlayerData, name, dataToBeCharted) {
  //   dataToBeCharted.map((elem, i) => {
  //     elem[name] = Object.entries(individualPlayerData)[i][1]
  //   })
  //   sortArrObjAlphabetically(dataToBeCharted)
  //   // mins always in index 13 conveert the mins from string to mins/seconds
  //   // dataToBeCharted[13][name] = timeConverter(dataToBeCharted[13][name])
  //   // dataToBeCharted[findTimeIndex(dataToBeCharted)][name] = timeConverter(dataToBeCharted[findTimeIndex(dataToBeCharted)][name])
  //   return dataToBeCharted
  //   // setChartData(dataToBeCharted)
  // }

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

  useEffect(() => {
    addTochartData(props.player1Data, player1Name, emptyData)
    // removePIDandYear(emptyData)
    find(emptyData)
    setChartData(emptyData)
    // find(emptyData)
    // console.log("useeffect setChartData", emptyData)
    // console.log("useeffect find", find(emptyData))
    // console.log("find", find(emptyData))
    // console.log("testy", chartData.findIndex(elem => elem.name === "player_id"))
  }, [])

  // useEffect(() => {
  //   if (props.player2Data) {
  //     // addTochartData(props.player1Data, player1Name, emptyData)
  //     console.log("proppy", player2Data)
  //   } else if (props.player1Data) {
  //     console.log("proppy", player1Data)
  //   }
  // }, [])

  // useEffect(() => {
  //   addTochartData(props.player2Data, "player2Name.first_name", emptyData)
  //   console.log("IT ME")
  // }, [props.player2Data])

  useEffect(() => {
    if (props.player2Data) {
      setChartData(null)
      addTochartData(props.player1Data, props.player1.first_name, emptyData)
      addTochartData(props.player2Data, props.player2.first_name, emptyData)
      // removePIDandYear(emptyData)
      find(emptyData)
      setChartData(emptyData)
      console.log("it me")
    }
  }, [props.player2Data])

  console.log("checking why 16 length arr", chartData)

  return (
    <div>
      hello world this is comparisson chart component
      <button onClick={() => console.log(props.player2Data)}>PROPS AVERAGE2</button>
      <button onClick={() => console.log(props.player1Data)}>PROPS AVERAGE</button>
      <button onClick={() => console.log(chartData)}>chart data from the comparison component AVERAGE</button>
      {chartData &&
        <BarChart
          width={600}
          height={300}
          //removes the season for recharts
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey={props.player1.first_name} fill="#82ca9d" />
          {/* add conditional if player selected then plot data */}
          <Bar dataKey={"player2Name.first_name"} fill="#92ca9d" />
        </BarChart>}
      {/* <button onClick={() => console.log(props.player2Data)}>AVERAGE22</button>
      <button onClick={() => console.log(addTochartDataNEW(props.player1Data, player1Name, emptyData))}>1 player to chart</button>
      <button onClick={() => console.log(addTochartDataNEW(props.player2Data, props.player2.first_name, emptyData))}>2 player to chart</button> */}
    </div>
  )
}
