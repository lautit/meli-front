import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.sass';

import Navbar from './components/Navbar';

const SearchResult = React.lazy(() => import('./views/SearchResult'));
const ItemDetails = React.lazy(() => import('./views/ItemDetails'));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<Navbar />
				<Route exact path="/items" component={SearchResult} />
				<Route exact path="/items/:id" component={ItemDetails} />
			</Router>
		</Suspense>
	);
}

export default App;
