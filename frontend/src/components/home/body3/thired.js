import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../body3/thired.css';
// import img_1 from '../Assets/bajaj1.jpg';
import img_6 from '../../../Assets/icons8-add-product-64.png';
import { getProducts } from '../../../action/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../product/products';
import { Fragment } from 'react';
import Loader from '../../Nav bar/Loader';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router-dom';
const THIRED = ({ match }) => {
	const [currentPage, setCurrentPage] = useState(1);
	function setCurrentPageNo(pageNumber) {
		setCurrentPage(pageNumber);
	}
	const dispatch = useDispatch();
	const alert = useAlert();
	const { loading, products, error, productsCount, resPerPage } = useSelector(
		(state) => state.products
	);

	const keyword = useParams();

	useEffect(() => {
		if (error) {
			return alert.error(error);
		}
		dispatch(getProducts(keyword, currentPage));
	}, [dispatch, alert, error, keyword, currentPage]);

	// let navigate = useNavigate();,

	// let [carts, setCart] = useState([]);
	// const handleAddToCart = (product) => {
	// 	setCart([...carts, product]); // Avoid mutating state directly
	// };

	// let addproducts = [{ imgs: img_6, title: 'add products' }];

	return (
		<Fragment>
			{/* <MetaData title={product.name} /> */}
			<div className="thiredproductsdiv">
				{loading ? (
					<Loader />
				) : (
					<Fragment>
						{products &&
							products.map((product) => (
								<Product key={product._id} product={product} />
							))}
					</Fragment>
				)}
				{/* {keyword && products.map((product) => <Product product={product} />)}
				console.log(product) */}
			</div>

			{resPerPage <= productsCount && (
				<div
					//  className="d-flex jusstify-content-center mt-5"
					style={pagination}
				>
					<Pagination
						activePage={currentPage}
						itemsCountPerPage={resPerPage}
						totalItemsCount={productsCount}
						onChange={setCurrentPageNo}
						nextPageText={'Next'}
						prevPageText={'Prev'}
						firstPageText={'First'}
						lastPageText={'Last'}
						itemClass="page-item"
						linkClass="page-link"
					/>
				</div>
			)}
		</Fragment>
	);
};
let pagination = {
	display: 'flex',
	//justifyContent: 'center',
	marginTop: '155px',
};

export default THIRED;
