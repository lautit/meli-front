import React from 'react';
import useReactRouter from 'use-react-router';

import useRetrieve from '../hooks/use-retrieve';

const Breadcrumb = React.lazy(() => import('../components/Breadcrumb'));
const Item = React.lazy(() => import('../components/Item'));

const toRender = {
	picture: `http://lorempixel.com/400/320/food`,
	condition: `Nuevo`,
	sold_quantity: `321`,
	price: { currency: `$`, amount: `30`, decimals: `50` },
	title: `Ergonomic Plastic Tuna`,
	place: `Buenos Aires`,
	description: `Alias et sunt architecto. Perferendis enim facere aut explicabo ipsam sit quo. Reprehenderit provident quam minima eum. Id eum esse a vitae occaecati consectetur sequi quia.`,
};

const SearchResult = () => {
	const { match } = useReactRouter();
	const { item } = useRetrieve(match.params.id);

	return (
		<section className="section">
			<div className="container">
				<React.Suspense fallback={<div>Loading...</div>}>
					<Breadcrumb categories={item.categories} />
					<Item item={item} />
				</React.Suspense>
			</div>
		</section>
	);
};

export default SearchResult;
