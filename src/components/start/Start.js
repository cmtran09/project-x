import React, { useState } from 'react'
import axios from 'axios'

export default function Start() {

  const [player1, setPlater1] = useState(null)
  const [player2, setPlater2] = useState(null)

  const [searchResult, setSearchResult] = useState({})

  function getPlayer(e) {
    e.preventDefault()
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${player1}`)
      .then(res => {
        console.log(res.data)
        setSearchResult(res.data.data)
        console.log("state", searchResult)
      })
      .catch(err => console.log(err))
    // .then(() => console.log(searchResult))
  }

  function handleChange(e) {
    setPlater1(e.target.value)
    console.log(player1)
  }

  return (
    <div>
      <p>
        hello world poeple asd
      </p>
      <form action="">
        <input
          type="text"
          placeholder="Search Player"
          onChange={handleChange}
        />
        <button onClick={e => {
          getPlayer(e)
        }}>Search</button>
      </form>
    </div>
  )
}
