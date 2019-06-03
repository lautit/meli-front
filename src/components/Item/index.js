import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const getPriceString = price => {
	const priceDecimals = price.decimals > 0 ? `,${price.decimals}` : ``;
	return `${price.currency} ${price.amount}${priceDecimals}`;
};

const ItemList = ({ item: { id, picture, price, free_shipping, title, place }, key }) => {
	return (
		<li>
			<Link to={[`/items/`, id].join(``)} className="box">
				<article className="media is-flex-mobile">
					<div className="media-left">
						<figure className="image is-128x128">
							<img src={picture} alt="" />
						</figure>
					</div>
					<div className="media-content">
						<div className="content is-small">
							<h1 className="title">
								{getPriceString(price)}
								{free_shipping && (
									<span className="icon has-text-success">
										<Icon icon={faCircle} size="xs" />
									</span>
								)}
							</h1>
							<p className="subtitle">{title}</p>
						</div>
					</div>
					<div className="media-right">
						<p>
							<small>{place}</small>
						</p>
					</div>
				</article>
			</Link>
		</li>
	);
};

const Item = ({
	item: { id, picture, condition, sold_quantity, price, free_shipping, title, place, description },
}) => {
	return (
		<div className="container is-widescreen is-flex-mobile">
			<div className="card">
				<div className="card-content">
					<div className="media is-flex-mobile">
						<div className="media-left">
							<figure className="image">
								<img src={picture} alt="" />
							</figure>
						</div>
						<div className="media-content">
							<div className="content">
								<small>
									{condition} - {sold_quantity} vendidos
								</small>
								<h1 className="title is-4">{title}</h1>
								<div className="price-tag is-inline-block">
									<span className="price-tag-symbol">{price.currency}</span>
									<span className="price-tag-fraction">{price.amount}</span>
									<span className="price-tag-cents">{price.decimals || `00`}</span>
								</div>
								<button className="button is-large is-fullwidth  is-link">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<footer className="card-footer">
					<div className="content is-medium has-text-justified">
						<h1 className="title is-4">Descripción del producto</h1>
						<p className="is-size-6">{description}</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Item;

export { ItemList, Item };
