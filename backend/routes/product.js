const express = require('express');
const router = express.Router();

const {
	getProducts,
	newProduct,
	getAdminProducts,
	getSingleProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/productcontroller');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewear/auth');
const {
	createProductReview,
	getProductReviews,
} = require('../controllers/Authcontroller');

router
	.route('/products')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getProducts);

router.route('/products').get(getProducts);

router.route('/admin/products').get(getAdminProducts);

router.route('/product/:id').get(getSingleProduct);
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });

router
	.route('/products/new')
	.post(isAuthenticatedUser, upload.single('images'), newProduct);

router
	.route('/product/:id')
	.put(isAuthenticatedUser, updateProduct)
	.delete(isAuthenticatedUser, deleteProduct);

router.route('/product/:id').put(updateProduct).delete(deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);

router
	.route('/reviews')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getProductReviews);

router.route('/reviews').delete(isAuthenticatedUser, deleteProduct);

module.exports = router;
