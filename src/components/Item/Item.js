import React from 'react';

import Skeleton from 'react-loading-skeleton';

const Item = ({ item, skeleton }) => {
	const { id, picture, condition, sold_quantity, price, free_shipping, title, place, description } =
		item || {};
	return (
		<div className="container is-widescreen is-flex-mobile">
			<div className="card">
				<div className="card-content">
					<div className="media is-flex-mobile">
						<div className="media-left">
							<figure className="image is-3by4 is-128x128">
								{skeleton ? <Skeleton /> : <img src={picture} alt="" />}
							</figure>
						</div>
						<div className="media-content">
							<div className="content">
								{skeleton ? (
									<>
										<Skeleton width={100} /> - <Skeleton width={150} />
									</>
								) : (
									<small>
										{condition} - {sold_quantity} vendidos
									</small>
								)}
								<h1 className="title is-4">{skeleton ? <Skeleton /> : title}</h1>
								{skeleton ? (
									<Skeleton />
								) : (
									<div className="price-tag is-inline-block">
										<span className="price-tag-symbol">{price.currency}</span>
										<span className="price-tag-fraction">{price.amount}</span>
										<span className="price-tag-cents">{price.decimals || `00`}</span>
									</div>
								)}
								{skeleton ? (
									<Skeleton />
								) : (
									<button className="button is-large is-fullwidth  is-link">Comprar</button>
								)}
							</div>
						</div>
					</div>
				</div>
				<footer className="card-footer">
					<div className="content is-medium has-text-justified">
						<h1 className="title is-4">Descripción del producto</h1>
						<p className="is-size-6">
							{skeleton ? <Skeleton count={10} width={900} /> : description}
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Item;
export { Item };
