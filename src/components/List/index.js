import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { ItemList } from '../Item';

function skelly(count) {
	const times = new Array(count).fill(true);
	return times.map((item, index) => <ItemList key={index} skeleton={item} />);
}

const List = ({ items, skeleton, error, count = 3 }) => {
	return (
		<div className="container is-widescreen">
			<ul className="item-list">
				{skeleton ? (
					skelly(count)
				) : error ? (
					<li>
						<NoResult />
					</li>
				) : (
					items &&
					items.length > 0 &&
					items.map(item => {
						return <ItemList key={item.id} item={item} />;
					})
				)}
			</ul>
		</div>
	);
};

const NoResult = () => (
	<div className="box">
		<div className="content is-small has-text-centered">
			<h1 className="title">No se encontraron resultados</h1>
		</div>
	</div>
);

export default List;
