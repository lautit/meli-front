import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import Skeleton from 'react-loading-skeleton';

const getPriceString = price => {
	const priceDecimals = price.decimals > 0 ? `,${price.decimals}` : ``;
	return `${price.currency} ${price.amount}${priceDecimals}`;
};

const ItemList = ({ item, key, skeleton }) => {
	const { id, picture, price, free_shipping, title, place } = item || {};
	return (
		<li>
			<Link to={[`/items/`, id].join(``)} className="box">
				<article className="media is-flex-mobile">
					<div className="media-left">
						<figure className="image is-128x128">
							{skeleton ? <Skeleton height={128} /> : <img src={picture} alt="" />}
						</figure>
					</div>
					<div className="media-content">
						<div className="content is-small">
							<h1 className="title">
								{skeleton ? <Skeleton width={350} /> : getPriceString(price)}
								{skeleton ? (
									<Skeleton circle width={25} height={25} />
								) : (
									free_shipping && (
										<span className="icon has-text-success">
											<Icon icon={faCircle} size="xs" />
										</span>
									)
								)}
							</h1>
							<p className="subtitle">{skeleton ? <Skeleton width={200} /> : title}</p>
						</div>
					</div>
					<div className="media-right">
						{skeleton ? (
							<Skeleton />
						) : (
							<p>
								<small>{place}</small>
							</p>
						)}
					</div>
				</article>
			</Link>
		</li>
	);
};

export default ItemList;
export { ItemList };
