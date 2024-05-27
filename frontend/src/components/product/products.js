import React from 'react';
import CreateProduct from '../admin/createProduct';
import Newproduct from '../admin/newProduct';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
	return (
		<div>
			<div key={product._id} className="productimgandp">
				<img
					src={product.images[0].url}
					className="productimg"
					alt={product.title}
				/>
				<div className="productdesdiv">
					<p className="productdes">
						<Link to={`/product/s${product._id}`}>{product.name}</Link>
					</p>

					{/* <button
							className="productbutton"
							onClick={() => handleAddToCart(product)}
						>
							Add To Cart
						</button> */}
					<div className="rating_mt_auto">
						<div className="reting_outer">
							<div
								className="rating_inner"
								style={{ width: `${(product.ratings / 5) * 100}%` }}
							></div>
						</div>
						{/* <span id="no_of_reviews">({product.numOfReviews} Reviews)</span> */}
					</div>
					<p className="card_text">${product.price}</p>
					<Link
						to={`/product/${product._id}`}
						id="view_btn"
						className="btn_btn_block"
					>
						view Details
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Product;
