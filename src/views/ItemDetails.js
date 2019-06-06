import React from 'react';
import useReactRouter from 'use-react-router';

import useRetrieve from '../hooks/use-retrieve';

import Breadcrumb from '../components/Breadcrumb';
import Item from '../components/Item';

const ItemDetail = () => {
	const { match } = useReactRouter();
	const { item, categories, Pending, Resolved, Rejected } = useRetrieve(match.params.id);

	return (
		<section className="section">
			<div className="container">
				<Pending>
					<Breadcrumb skeleton />
					<Item skeleton />
				</Pending>
				<Resolved>
					<Breadcrumb categories={categories} />
					<Item item={item} />
				</Resolved>
				<Rejected>
					<div> ERROR !</div>
				</Rejected>
			</div>
		</section>
	);
};

export default ItemDetail;
