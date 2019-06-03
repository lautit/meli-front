import React, { useState, useEffect } from 'react';

import useAxios from '@use-hooks/axios';

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
	const { response, loading, error } = useAxios({
		url: [process.env.REACT_APP_URL_RETRIEVE, itemId].join(``),
		method: 'GET',
		trigger: itemId,
		forceDispatchEffect: () => !!itemId, // AUTO RUN only if query is set
	});

	useEffect(() => {
		if (response && !loading && !error) {
			const { data: item } = response;
			setItem(item);
		}
		return () => {
			setItem(emptyItem);
		};
	}, [error, loading, response]);

	return { item, loading };
};

export default useRetrieve;
