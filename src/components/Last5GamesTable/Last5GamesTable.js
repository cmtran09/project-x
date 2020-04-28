import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Last5GamesTable(props) {

  const classes = useStyles();

  const [table, setTable] = useState([])

  function createData(home, homeScore, visitingScore, visiting) {
    return { home, homeScore, visitingScore, visiting };
  }



  // console.log("outside useeffect", rows)

  useEffect(() => {
    let rows = []
    console.log("porps [props.data[0].home_team.name", [props.data[0].home_team.name])

    for (let i = 5; i > 0; i--) {
      rows.push(createData(props.data[i].home_team.name, props.data[i].home_team_score, props.data[i].visitor_team_score, props.data[i].visitor_team.name))
    }

    console.log("porps [props.data[0].home_team.nameROWWWWWSA", rows)
    setTable(rows)
  }, [props.data[0].home_team.name])


  // console.log("table", props.data[0].home_team.name)
  return (
    <div>
      hello table
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Home Team</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Visiting Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="center" component="th" scope="row">
                  {row.home}
                </TableCell>
                <TableCell align="center">{row.homeScore}</TableCell>
                <TableCell align="center">{row.visitingScore}</TableCell>
                <TableCell align="center">{row.visiting}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <button onClick={e => console.log(table)}>buttoin</button>
      {/* <button onClick={e => console.log(willTable)}>buttoin</button> */}
    </div>
  )
}
