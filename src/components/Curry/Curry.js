import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { BLANKAVG } from "../../constants/Constants.js"

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


    const [chartData, setChartData] = useState()
    const [chartData2, setChartData2] = useState()

    const emptyData = BLANKAVG
    // const player1Name = props.player1.first_name
    // const player2Name = props.player2.first_name

    function timeConverter(time) {
        return time.split(":").map(elem => parseInt(elem)).join(".")
    }

    function addTochartDataLeb(data) {
        emptyData.map((elem, i) => {
            elem["lebron"] = Object.entries(data)[i][1]
        })
        emptyData[3]["lebron"] = timeConverter(emptyData[3]["lebron"])
        return emptyData
    }

    function addTochartDataCur(data) {
        emptyData.map((elem, i) => {
            elem["curry"] = Object.entries(data)[i][1]
        })
        emptyData[3]["curry"] = timeConverter(emptyData[3]["curry"])
        return emptyData
    }

    // useEffect(() => {
    //     addTochartData(props.player1Data)
    // }, [])

    // function complieAllAvailibleData() {
    //   if (props.player2Data) {

    //   }
    // }

    return (
        <div>
            hello world this is comparisson chart CUURRR component
            <button onClick={() => console.log(dataLeb)}>lebDtat</button>
            <button onClick={() => console.log(dataCur)}>curDtat</button>
            <button onClick={() => console.log(addTochartDataLeb(dataLeb))}>addTochartDataLeb</button>
            {/* <button onClick={() => console.log(props.player1Data)}>PROPS AVERAGE</button> */}
            {/* {chartData && <BarChart width={600} height={300} data={chartData.slice(0, 1).concat(chartData.slice(3, 21))}
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
            </BarChart>} */}
        </div>
    )
}
