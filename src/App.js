import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import History from './Components/History';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />

						<Route path="/our-history" component={History} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
