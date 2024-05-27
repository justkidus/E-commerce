const Product = require('../models/product');
const { formidable } = require('formidable');

const ErrorHandler = require('../utils/errorHandler');
const path = require('path');

const catchAsyncErrors = require('../middlewear/catchAsyncErrors');

const APIFeatures = require('../utils/apifeatures');
//create new product => api/v1/product/new

// exports.newProduct = catchAsyncErrors(async (req, res, next) => {
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
	req.body.user = req.user.id;
	// let form = formidable({ uploadDir: path.join(__dirname, '../', 'uploads') });

	// form.parse(req, function (err, files, fields) {
	// 	console.log(err, fields, files, 'helo');
	// });
	console.log(req.body.name);
	req.body.images = [{ public_id: '1', url: req.body.images }];
	const product = await Product.create(req.body);

	res.status(201).json({
		success: true,
		// product,
		// form,
	});
});
// exports.getProducts = async (req, res, next) => {
// 	const productss = await Product.find(req.body);
// 	res.status(200).json({
// 		success: true,
// 		msg: 'hello',
// 		productss,
// 	});
// };

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
	// return next(new ErrorHandler('My Error', 400));

	const resPerPage = 6;
	const productsCount = await Product.countDocuments();
	const apifeatures = new APIFeatures(Product.find(), req.query)
		.search()
		.filter()
		.pagination(resPerPage);

	const products = await apifeatures.query;
	setTimeout(() => {
		res.status(200).json({
			success: true,
			productsCount,
			resPerPage,
			products,
		});
	}, 2000);
});
//get all products for admin
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
	// return next(new ErrorHandler('My Error', 400));
	const products = await Product.find();

	res.status(200).json({
		success: true,
		// productsCount,
		//resPerPage,
		products,
		//loading,
	});
});

// get single product details => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}
	res.status(200).json({
		success: true,
		product,
	});
});
//update product =/api/v1/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(404).json({
			success: false,
			msg: 'product not found',
		});
	}
	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({
		success: true,
		product,
	});
});

//delete product =>api/v1/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);
	if (!product) {
		return res.status(404).json({
			success: false,
			msg: 'product not found',
		});
	}
	await product.deleteOne();
	res.status(200).json({
		success: true,
		message: 'product is deleted',
	});
});
