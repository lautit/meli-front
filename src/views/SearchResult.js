import React from 'react';
import useReactRouter from 'use-react-router';

import useSearch from '../hooks/use-search';

import Breadcrumb from '../components/Breadcrumb';
import List from '../components/List';

const SearchResult = () => {
	const { location } = useReactRouter();
	const query = location.search.split(`=`).pop();
	const { results, categories, Pending, Resolved, Rejected } = useSearch(query);

	return (
		<section className="section">
			<div className="container">
				<Pending>
					<Breadcrumb skeleton />
					<List skeleton />
				</Pending>
				<Resolved>
					<Breadcrumb categories={categories} />
					<List items={results} />
				</Resolved>
				<Rejected>
					<List error />
				</Rejected>
			</div>
		</section>
	);
};

export default SearchResult;
