import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.png';

import Search from '../Search';

const Navbar = () => {
	return (
		<nav className="navbar is-warning is-fixed-top" role="navigation" aria-label="main navigation">
			<div className="container is-widescreen is-flex">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="navbar-content">
					<div className="navbar-item is-expanded is-block">
						<Search />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
