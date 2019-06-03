import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ categories }) => {
	return (
		<nav className="breadcrumb" aria-label="breadcrumbs">
			<ul>
				{categories &&
					categories.length > 0 &&
					categories.map((category, index, array) => {
						const isLast = index + 1 === array.length;
						return (
							<li key={index} className="is-active">
								<Link
									to="#"
									className={`is-size-7 has-text-${
										isLast ? 'grey-dark' : 'grey'
									} has-text-weight-light`}
								>
									<p>{category}</p>
									{!isLast && (
										<span className="icon">
											<Icon icon={faAngleRight} />
										</span>
									)}
								</Link>
							</li>
						);
					})}
			</ul>
		</nav>
	);
};

export default Breadcrumb;
