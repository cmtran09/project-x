import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./styles/styles.scss"

import "@babel/polyfill"

import Start from "./components/Start/Start"

const App = () => (
	<BrowserRouter>
		{/* <BrowserRouter basename="/project-x-nba-comparison/"> */}
		{/* <NavBar /> */}
		{/* <Route exact path="/" component={} /> */}
		<Start exact path="/" />
	</BrowserRouter>
)

ReactDOM.render(
	<App />,
	document.getElementById("root")
)