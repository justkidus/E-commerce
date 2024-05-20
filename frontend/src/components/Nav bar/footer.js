import React, { Fragment } from 'react';
import { getProducts } from '../../action/productActions';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const Footer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<>
			<Fragment>
				<div style={background}>
					<footer className="" style={py_1}>
						<div style={styles}>
							<div>
								<p className="" style={text_center}>
									Shopping Cart - 2019-2020, All Rights Reserved
								</p>
							</div>
						</div>
					</footer>
				</div>
			</Fragment>
		</>
	);
};

const styles = {
	// display: 'flex',
	// textAlign: 'center',
	// alignItems: 'center',
	margin: '30px 0px 40px 100px',
};
const py_1 = {
	alignItems: 'center', // 'center' should be a strsing
};

const text_center = {
	color: 'gray', // 'gray' should be a string or a valid CSS color value
};
const background = {
	width: '100%',
	backgroundColor: '#a5d8ff',
	height: '10vh',
	margin: '500px 0px 0px 0px',
};
export default Footer;
