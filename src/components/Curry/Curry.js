import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export default function Curry() {

    let time = "25:51"

    function timeConverter(time) {
        return time.split(":").map(elem => parseInt(elem)).join(".")
    }

    console.log(time)
    console.log(time.split(":").map(elem => parseInt(elem)).join("."))
    console.log(timeConverter(time))





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