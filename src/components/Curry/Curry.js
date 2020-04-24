import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"
import { typeOf } from 'react-is'

export default function ComparisonChart(props) {

    const dataLeb = [
        { name: 'games_played', lebron: 60 },
        { name: 'Player_id', lebron: 237 },
        { name: 'season', lebron: 2019 },
        { name: 'min', lebron: "34:54" },
        { name: 'fgm', lebron: 9.77 },
        { name: 'fga', lebron: 19.6 },
        { name: 'fg3m', lebron: 2.22 },
        { name: 'fg3a', lebron: 6.35 },
        { name: 'fga', lebron: 3.98 },
        { name: 'ftm', lebron: 5.72 },
        { name: 'oreb', lebron: 0.95 },
        { name: 'dreb', lebron: 6.9 },
        { name: 'reb', lebron: 7.85 },
        { name: 'ast', lebron: 10.6 },
        { name: 'stl', lebron: 1.23 },
        { name: 'blk', lebron: 0.5 },
        { name: 'turnover', lebron: 3.9 },
        { name: 'pf', lebron: 1.77 },
        { name: 'pts', lebron: 25.73 },
        { name: 'fg_pct', lebron: 0.498 },
        { name: 'fg3_pct', lebron: 0.34 },
        { name: 'ft_pct', lebron: 0.697 }
    ]
    const dataReb = [
        { name: 'games_played', rebron: 60 },
        { name: 'Player_id', rebron: 237 },
        { name: 'season', rebron: 2019 },
        { name: 'min', rebron: "34:54" },
        { name: 'fgm', rebron: 9.77 },
        { name: 'fga', rebron: 19.6 },
        { name: 'fg3m', rebron: 2.22 },
        { name: 'fg3a', rebron: 6.35 },
        { name: 'fga', rebron: 3.98 },
        { name: 'ftm', rebron: 5.72 },
        { name: 'oreb', rebron: 0.95 },
        { name: 'dreb', rebron: 6.9 },
        { name: 'reb', rebron: 7.85 },
        { name: 'ast', rebron: 10.6 },
        { name: 'stl', rebron: 1.23 },
        { name: 'blk', rebron: 0.5 },
        { name: 'turnover', rebron: 3.9 },
        { name: 'pf', rebron: 1.77 },
        { name: 'pts', rebron: 25.73 },
        { name: 'fg_pct', rebron: 0.498 },
        { name: 'fg3_pct', rebron: 0.34 },
        { name: 'ft_pct', rebron: 0.697 }
    ]

    const dataLebObj = {
        'games_played': 60,
        'Player_id': 237,
        'season': 2019,
        'min': "34:54",
        'fgm': 9.77,
        'fga': 19.6,
        'fg3m': 2.22,
        'fg3a': 6.35,
        'fga': 3.98,
        'ftm': 5.72,
        'oreb': 0.95,
        'dreb': 6.9,
        'reb': 7.85,
        'ast': 10.6,
        'stl': 1.23,
        'blk': 0.5,
        'turnover': 3.9,
        'pf': 1.77,
        'pts': 25.73,
        'fg_pct': 0.498,
        'fg3_pct': 0.34,
        'ft_pct': 0.697
    }
    const dataRebObj = {
        'games_played': 60,
        'Player_id': 237,
        'season': 2019,
        'min': "34:54",
        'fgm': 9.77,
        'fga': 19.6,
        'fg3m': 2.22,
        'fg3a': 6.35,
        'fga': 3.98,
        'ftm': 5.72,
        'oreb': 0.95,
        'dreb': 6.9,
        'reb': 7.85,
        'ast': 80.6,
        'stl': 1.23,
        'blk': 0.5,
        'turnover': 3.9,
        'pf': 1.77,
        'pts': 25.73,
        'fg_pct': 0.498,
        'fg3_pct': 0.34,
        'ft_pct': 0.697
    }


    const dataCur = [
        { name: 'games_played', curry: 60 },
        { name: 'Player_id', curry: 237 },
        { name: 'season', curry: 2019 },
        { name: 'min', curry: "34:54" },
        { name: 'fgm', curry: 9.77 },
        { name: 'fga', curry: 19.6 },
        { name: 'fg3m', curry: 2.22 },
        { name: 'fg3a', curry: 6.35 },
        { name: 'fga', curry: 3.98 },
        { name: 'ftm', curry: 5.72 },
        { name: 'oreb', curry: 0.95 },
        { name: 'dreb', curry: 6.9 },
        { name: 'reb', curry: 7.85 },
        { name: 'ast', curry: 10.6 },
        { name: 'stl', curry: 1.23 },
        { name: 'blk', curry: 0.5 },
        { name: 'turnover', curry: 3.9 },
        { name: 'pf', curry: 1.77 },
        { name: 'pts', curry: 25.73 },
        { name: 'fg_pct', curry: 0.498 },
        { name: 'fg3_pct', curry: 0.34 },
        { name: 'ft_pct', curry: 0.697 }
    ]

    function spread(arr1, arr2) {
        return arr1.map((elem, i) => {
            return elem = { ...elem, ...arr2[i] }
        })
    }

    // console.log("spreadddd", spread(spread(dataCur, dataLeb), dataReb))


    // console.log(parseFloat("3:2139"))

    function sortArrObjAlphabetically(arr) {
        arr.sort((a, b) => {
            return a[0].localeCompare(b[0])
        })
        return arr
    }

    // const emptyFormatArr = [...BLANKAVG]
    // const numbers = [1, 2, 3];
    // const numbersCopy = [...numbers];
    // numbersCopy.push(4);
    // console.log(numbers, numbersCopy);


    // function charting(obj) {
    //     const emptyFormatArr = [...BLANKAVG]
    //     const sortedArr = sortArrObjAlphabetically(Object.entries(obj))
    //     // console.log("sortedArr", sortedArr)
    //     // console.log(sortedArr[0][1])
    //     emptyFormatArr.map((elem, i) => {
    //         elem["lebrrronnnn"] = sortedArr[i]
    //     })
    //     return emptyFormatArr
    // }

    // let result1 = charting(dataLebObj)
    // let result2 = charting(dataRebObj)

    // console.log(result1)
    // console.log(result2)
    // console.log(emptyFormatArr.pop())
    // console.log(emptyFormatArr.length)

    // console.log(dataCur.sort((a, b) => {
    //     let textA = a.name
    //     let textB = b.name
    //     return textA.localeCompare(textB)
    // }))

    // console.log("sort", sortArrObjAlphabetically(dataCur))


    const [chartData, setChartData] = useState()
    const [chartData2, setChartData2] = useState()

    // const emptyData = BLANKAVG
    // const player1Name = props.player1.first_name
    // const player2Name = props.player2.first_name

    function timeConverter(time) {
        return Number(time.split(":").map(elem => parseInt(elem)).join("."))
    }

    function addTochartData(individualPlayerData, name, chartData) {
        chartData.map((elem, i) => {
            elem[name] = Object.entries(individualPlayerData)[i][1]
        })
        sortArrObjAlphabetically(chartData)
        dataToBeCharted[13][name] = timeConverter(dataToBeCharted[13][name])
        return chartData
    }


    return (
        <div>
            hello world this is comparisson chart CUURRR component
            <button onClick={() => console.log(dataLeb)}>lebDtat</button>
            <button onClick={() => console.log(dataCur)}>curDtat</button>
            <button onClick={() => console.log(addTochartData(dataLebObj, "lebron", emptyData))}>addTochartDataLeb</button>
            <button onClick={() => console.log(addTochartData(dataCur, "curry", emptyData))}>addTochartDataCur</button>
            {/* <button onClick={() => console.log(emptyData[3].lebron.)}>looking</button> */}
            {/* <button onClick={() => console.log(props.player1Data)}>PROPS AVERAGE</button> */}
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
