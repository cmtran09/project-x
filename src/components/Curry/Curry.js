import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export default function Curry() {

    const [data, setData] = useState()

    function promise1(data) {
        return new Promise((resolve, reject) => {
            if (data !== undefined) {
                console.log("promise1 resolved", console.log(data))
                resolve(data)
            } else {
                console.log("promise1 rejected")
            } reject(Error('promise1 rejected'))
        })
    }

    useEffect(() => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&season=2019`)
            .then(res => {
                setData(res.data.data[0].games_played)
                console.log("logging the data inside the useeffect", data)
                promise1(res.data.data[0].games_played)
            })
            .then(console.log("post promise1", data)
            )
            .catch(err => console.log("err", err))
    }, [])

    console.log("logging asyn", data)

    return (
        <div>
            Hello mate
        </div>
    )
}


// import React, { useState, useEffect } from 'react'
// import axios from "axios"
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

// export default function Curry() {

//     const [data, setData] = useState()

//     useEffect(async () => {
//         try {
//             const response = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&season=2019`)
//             setData(response.data.data[0].games_played)
//             console.log("logging the data inside the useeffect", data)
//         } catch (error) {
//             console.log(error)
//         }
//         // axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&season=2019`)
//         //     .then(res => {
//         //         setData(res.data.data[0].games_played)
//         //         console.log("logging the data inside the useeffect", data)
//         //     })

//         //     .catch(err => console.log("err", err))
//     }, [])

//     console.log("logging asyn", data)

//     return (
//         <div>
//             Hello mate
//         </div>
//     )
// }