import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navBar">
				<ul>
					<li>
						<NavLink activeClassName="active" exact to="/">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName="active" to="/our-history/">
							History
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}
export default Navbar;
