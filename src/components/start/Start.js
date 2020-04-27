import React, { useState } from "react"
import axios from "axios"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import SearchResult from "../SearchResult/SearchResult"
import Player1 from "../Player1/Player1"
import Player2 from "../Player2/Player2"
import Player1SeasonAvg from "../Player1SeasonAvg/Player1SeasonAvg"
import Player2SeasonAvg from "../Player2SeasonAvg/Player2SeasonAvg"

import ComparisonChart from "../ComparisonChart/ComparisonChart"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 550,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Start() {

  const [player1, setPlayer1] = useState(null)
  const [player1Selected, setPlayer1Selected] = useState(false)
  const [player2, setPlayer2] = useState(null)
  const [player2Selected, setPlayer2Selected] = useState(false)
  const [player1Data, setPlayer1Data] = useState(null)
  const [player2Data, setPlayer2Data] = useState(null)

  const [playerSearch, setPlayerSearch] = useState(null)
  const [searchResult, setSearchResult] = useState([])

  function getPlayer(e) {
    e.preventDefault()
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerSearch}`)
      .then(res => {
        setSearchResult(res.data.data)
      })
      .catch(err => console.log(err))
  }

  function handleChange(e) {
    setPlayerSearch(e.target.value)
  }

  const classes = useStyles();

  return (
    <div className="main-app">
      <p className="cmtran09head">
        Project X - NBA Comparison App
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="list">
              {searchResult &&
                <List
                  className={`${classes.root} list-results`}
                >
                  <SearchResult
                    searchResult={searchResult}
                    setPlayer1={setPlayer1}
                    player1Selected={player1Selected}
                    setPlayer1Selected={setPlayer1Selected}
                    setPlayer2={setPlayer2}
                    player2Selected={player2Selected}
                    setPlayer2Selected={setPlayer2Selected}
                    setSearchResult={setSearchResult}
                  />
                </List>
              }
            </div>
            <button onClick={() => console.log(player1)}>button</button>
            <p>stats</p>
            {
              player1 &&
              <Player1SeasonAvg
                player1={player1}
                setPlayer1Data={setPlayer1Data}
                player1Data={player1Data}
              />
            }
            {
              player2 &&
              <Player2SeasonAvg
                player2={player2}
                setPlayer2Data={setPlayer2Data}
                player2Data={player2Data}
              />
            }
            {
              player1Data &&
              <ComparisonChart
                player1={player1}
                player2={player2}
                player1Data={player1Data}
                player2Data={!player2Data ? null : player2Data}
                setPlayer2Data={setPlayer2Data}
              // player2Data={!player2Data ? null : player2Data}
              />
            }

            <button onClick={() => console.log(player1Data)}>AVERAGE</button>
            <button onClick={() => console.log(player2Data)}>AVERAGE2</button>
            <button onClick={() => console.log(player1)}>player1</button>
            {
              !player2Selected &&
              <button onClick={() => {
                setPlayer1Data(null)
                setPlayer1(null)
                setPlayer1Selected(false)
              }}>remove player 1</button>
            }
            {
              player2Selected &&
              <button onClick={() => {
                setPlayer2Data(null)
                setPlayer2(null)
                setPlayer2Selected(false)
              }}>remove player 2</button>
            }
          </Paper>
        </Grid>
        {/* ================================== PLAYER 1 */}        <Grid item xs={!player1Selected ? 12 : 6}>
          <Paper className={classes.paper}>
            {player1 && <Player1 player1={player1} /> || <p className="selected-player-txt"> Player 1: Not Selected</p>}
            <TextField
              id="player-search"
              disabled={player1Selected && "disabled"}
              label="Search Nba Player"
              variant="outlined"
              type="text"
              placeholder="Player 1"
              color="primary"
              onChange={handleChange} />
            <Button
              id="player-search-button"
              disabled={player2Selected && "disabled"}
              onClick={e => {
                getPlayer(e)
              }
              }><SportsBasketballIcon />Search<SportsBasketballIcon />
            </Button>
            {player1Selected && !player2Selected &&
              <Button
                id="player-search-button"
                onClick={e => {
                  setPlayer1Data(null)
                  setPlayer1(null)
                  setPlayer1Selected(false)
                }
                }>REMOVE
              </Button>
            }
          </Paper>
        </Grid>
        {/* ================================== PLAYER 2 */}
        {player1Selected && <Grid item xs={6}>
          <Paper className={classes.paper}>
            {player2 && <Player2 player2={player2} /> || <p className="selected-player-txt"> Player 2: Not Selected</p>}
            <TextField
              id="player-search"
              disabled={player2Selected && "disabled"}
              label="Search Nba Player"
              variant="outlined"
              type="text"
              placeholder="Player 2"
              color="primary"
              onChange={handleChange} />
            <Button
              id="player-search-button"
              disabled={player2Selected && "disabled"}
              onClick={e => {
                getPlayer(e)
              }
              }><SportsBasketballIcon />Search<SportsBasketballIcon />
            </Button>
            {player2Selected &&
              <Button
                id="player-search-button"
                onClick={e => {
                  setPlayer2Data(null)
                  setPlayer2(null)
                  setPlayer2Selected(false)
                }
                }>REMOVE
              </Button>
            }
          </Paper>
        </Grid>}



        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {player1 && <Player1 player1={player1} /> || <p className="selected-player-txt"> Player 1: Not Selected</p>}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {player2 && <Player2 player2={player2} /> || <p className="selected-player-txt"> Player 2: Not Selected</p>}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>



    </div >
  )
}
