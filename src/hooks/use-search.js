import { useState, useEffect } from 'react';

import useAxios from '@use-hooks/axios';

const useSearch = query => {
	const [results, setResults] = useState([]);
	const [categories, setCategories] = useState([]);
	const { response, loading, error } = useAxios({
		url: process.env.REACT_APP_URL_SEARCH,
		method: 'GET',
		options: {
			params: { q: query },
		},
		trigger: query,
		forceDispatchEffect: () => !!query, // AUTO RUN only if query is set
	});

	useEffect(() => {
		if (!loading && !error && response !== null) {
			const {
				data: { items, categories },
			} = response;
			setResults(items);
			setCategories(categories);
		}
		return () => {
			setResults([]);
			setCategories([]);
		};
	}, [error, loading, response]);

	return { results, categories, loading };
};

export default useSearch;
