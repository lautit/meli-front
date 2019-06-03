import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
	const [query, setQuery] = useState();

	return (
		<div className="field has-addons">
			<div className="control is-expanded">
				<input
					className="input"
					type="text"
					onChange={e => setQuery(e.target.value)}
					placeholder="Nunca dejes de buscar"
				/>
			</div>
			<div className="control">
				<Link
					to={{ pathname: '/items', search: [`?q=`, query].join(``) }}
					className="button is-light"
				>
					<span className="icon has-text-grey-darker">
						<Icon icon={faSearch} />
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Search;
