import { useState, useEffect, useCallback } from 'react';

import { useLoads } from 'react-loads';
import { instance as axios, axiosAuth } from '../utils';

const emptyItem = {
	id: ``,
	title: ``,
	price: {
		currency: ``,
		amount: ``,
		decimals: ``,
	},
	picture: ``,
	condition: ``,
	free_shipping: false,
	sold_quantity: ``,
	description: ``,
};

const useRetrieve = itemId => {
	const [item, setItem] = useState(emptyItem);
	const [categories, setCategories] = useState([]);
	const getItem = useCallback(() => {
		return axios(
			axiosAuth({
				url: [process.env.REACT_APP_URL_RETRIEVE, itemId].join(``),
				method: 'POST',
			}),
		);
	}, [itemId]);
	const { response, error, isRejected, isResolved, Pending, Resolved, Rejected } = useLoads(
		getItem,
	);

	useEffect(() => {
		if (isResolved) {
			const {
				data: { author, categories, ...item },
			} = response;
			setItem(item);
			setCategories(categories);
		}
		if (isRejected) {
			console.log('error :', error);
		}
		return () => {
			setItem(emptyItem);
		};
	}, [error, isRejected, isResolved, response]);

	return {
		item,
		categories,
		Pending,
		Resolved,
		Rejected,
	};
};

export default useRetrieve;
