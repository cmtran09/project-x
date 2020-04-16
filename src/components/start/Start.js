import React, { useState } from 'react'
import axios from 'axios'

export default function Start() {

  const [player1, setPlater1] = useState(null)
  const [player2, setPlater2] = useState(null)

  const [searchResult, setSearchResult] = useState([])

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

  function renderResultz(){
    if(searchResult.length !== 0){
      return (
        <p>not !== 0</p>
      )
    } else return (
      <p>i === 0</p>

    )
  }

  const list = [{name:1},{name:3},{name:23},{name:"p"},{name:1}]

  function renderResults(){
    if(searchResult.length !== 0){
      console.log("not zero length")
        searchResult.map((player, i) => {
          console.log("not zero length - insode loop")
          return (
            <li key={i}>
              <p>hello</p>
            </li>
          )
        })
    } else console.log("zero length")
  }

  console.log("search result", searchResult)
  // function renderResults(){
  //   if(!searchResult){
  //     return (
  //       searchResult.data.map(i => {
  //         return (
  //           <li key={i}>player.id</li>
  //         )
  //       })
  //     )
  //   } else return
  // }

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
      <div className="list">
        {renderResults()}
        {renderResultz()}
      </div>
      <button onClick={()=>console.log(searchResult[0].id)}></button>
      {list.map((elem,i)=>{
        return (
          <li key={i}>{elem.name}</li>
        )
      })}
    </div>
  )
}
