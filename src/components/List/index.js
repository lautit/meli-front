import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { ItemList } from '../Item';

const NoResult = () => (
	<div className="box">
		<div className="content is-small">
			<h1 className="title">No se encontraron resultados</h1>
		</div>
	</div>
);

const List = ({ items, ...rest }) => {
	return (
		<div className="container is-widescreen">
			<ul className="item-list">
				{items && items.length > 0 ? (
					items.map(item => {
						return <ItemList key={item.id} item={item} />;
					})
				) : (
					<li>
						<NoResult />
					</li>
				)}
			</ul>
			<nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
				<a className="pagination-previous">
					<span className="icon is-large">
						<Icon icon={faAngleLeft} />
					</span>
					Anterior
				</a>
				<ul className="pagination-list">
					<li>
						<a className="pagination-link" aria-label="Goto page 1">
							1
						</a>
					</li>
					<li>
						<a className="pagination-link is-current" aria-label="Goto page 2">
							2
						</a>
					</li>
					<li>
						<a className="pagination-link" aria-label="Page 3" aria-current="page">
							3
						</a>
					</li>
					<li>
						<a className="pagination-link" aria-label="Goto page 4">
							4
						</a>
					</li>
					<li>
						<span className="pagination-ellipsis">&hellip;</span>
					</li>
					<li>
						<a className="pagination-link" aria-label="Goto page 10">
							10
						</a>
					</li>
				</ul>
				<a className="pagination-next">
					Siguiente
					<span className="icon is-large">
						<Icon icon={faAngleRight} />
					</span>
				</a>
			</nav>
		</div>
	);
};

export default List;
