import React, { useState, useEffect } from 'react'
import axios from "axios"

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Last5GamesTable from "../Last5GamesTable/Last5GamesTable"

export default function Last5Games(props) {

  const [gameData, setGameData] = useState([{}])

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2019&page=4&team_ids[]=${props.player.team.id}`)
      .then(res => {
        setGameData(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  // console.log(gameData)
  return (
    <div>
      hello last 5
      team id: {props.player.team.id}
      {/* {gameData[0].home_team && <h1>GOTIT</h1>} */}
      {gameData[0].home_team && <Last5GamesTable data={gameData} />}
    </div>
  )
}
