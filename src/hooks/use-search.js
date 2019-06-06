import { useState, useEffect, useCallback } from 'react';

import { useLoads } from 'react-loads';
import { instance as axios, axiosAuth } from '../utils';

const useSearch = query => {
	const [results, setResults] = useState([]);
	const [categories, setCategories] = useState([]);
	const getSearch = useCallback(() => {
		return axios(
			axiosAuth({
				url: process.env.REACT_APP_URL_SEARCH,
				method: 'POST',
				params: { q: query },
			}),
		);
	}, [query]);
	const { response, error, isRejected, isResolved, Pending, Resolved, Rejected } = useLoads(
		getSearch,
	);

	useEffect(() => {
		if (isResolved) {
			const {
				data: { items, categories },
			} = response;
			setResults(items);
			setCategories(categories);
		}
		if (isRejected) {
			console.log('error :', error);
		}
		return () => {
			setResults([]);
			setCategories([]);
		};
	}, [error, isRejected, isResolved, response]);

	return { results, categories, Pending, Resolved, Rejected };
};

export default useSearch;
