import React from 'react';
import useReactRouter from 'use-react-router';

import useSearch from '../hooks/use-search';

const Breadcrumb = React.lazy(() => import('../components/Breadcrumb'));
const List = React.lazy(() => import('../components/List'));

const toRender = [
	{
		id: `MLA123456`,
		picture: `http://lorempixel.com/500/480/fashion`,
		price: { currency: `$`, amount: `30`, decimals: `50` },
		title: `Gorgeous Metal Pants`,
		place: `Buenos Aires`,
	},
	{
		id: `MLA123456`,
		picture: `http://lorempixel.com/500/480/food`,
		price: { currency: `$`, amount: `399`, decimals: `99` },
		free_shipping: true,
		title: `Awesome Plastic Salad`,
		place: `Capital Federal`,
	},
	{
		id: `MLA123456`,
		picture: `http://lorempixel.com/500/480/technics`,
		price: { currency: `$`, amount: `1299`, decimals: `99` },
		title: `Practical Metal Computer`,
		place: `Lanús`,
	},
];

const SearchResult = () => {
	const { location } = useReactRouter();
	const query = location.search.split(`=`).pop();
	const { results, categories } = useSearch(query);

	return (
		<section className="section">
			<div className="container">
				<React.Suspense fallback={<div>Loading...</div>}>
					<Breadcrumb categories={categories} />
					<List items={results} />
				</React.Suspense>
			</div>
		</section>
	);
};

export default SearchResult;
