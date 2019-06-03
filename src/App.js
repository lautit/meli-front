import React from 'react';

import './App.sass';

import Navbar from './components/Navbar';

import SearchResult from './views/SearchResult';
import ItemDetails from './views/ItemDetails';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path="/items" component={SearchResult} />
			<Route exact path="/items/:id" component={ItemDetails} />
		</Router>
	);
}

export default App;
