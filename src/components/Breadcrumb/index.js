import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Skeleton from 'react-loading-skeleton';

const Breadcrumb = ({ categories, skeleton }) => {
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
				{skeleton && (
					<>
						<li>
							<Skeleton width={150} height={20} />
							<span className="icon">
								<Icon icon={faAngleRight} />
							</span>
						</li>
						<li>
							<Skeleton width={150} height={20} />
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Breadcrumb;
