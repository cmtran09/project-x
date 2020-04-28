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

  function createData(home, homeScore, visitingScore, visiting) {
    return { home, homeScore, visitingScore, visiting };
  }

  let rows = []

  useEffect(() => {
    for (let i = 5; i > 0; i--) {
      rows.push(createData(props.data[i].home_team.name, props.data[i].home_team_score, props.data[i].visitor_team_score, props.data[i].visitor_team.name))
    }
  }, [props.data[0].home_team.name])


  // if (props.data) {
  //   var rows =
  //     [
  //       createData(props.data[5].home_team.name, props.data[5].home_team_score, props.data[5].visitor_team_score, props.data[5].visitor_team.name)
  //       // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //       // createData('Eclair', 262, 16.0, 24, 6.0),
  //       // createData('Cupcake', 305, 3.7, 67, 4.3),
  //       // createData('Gingerbread', 356, 16.0, 49, 3.9),
  //     ]
  // }


  // console.log("table", props.data[0].home_team.name)
  return (
    <div>
      hello table
      {/* <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Home Team</TableCell>
              <TableCell align="center">Home Team Score</TableCell>
              <TableCell align="center">Visiting Team Score</TableCell>
              <TableCell align="center">Visiting Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.home}>
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
      </TableContainer> */}
      <button onClick={e => console.log(props.data[0].home_team.name)}>buttoin</button>
    </div>
  )
}
