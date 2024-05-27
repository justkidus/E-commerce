const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewear/catchAsyncErrors');
const sendToken = require('../utils/jwttoken');

const sendEmail = require('../utils/sendEmail');

//register a user =>/api/v1/register
const Product = require('../models/product');
const cloudinary = require('cloudinary');
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
	// const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
	// 	folder: 'avatars',
	// 	width: 150,
	// 	crop: 'scale',
	// });

	const { name, email, password, role } = req.body;

	const user = await User.create({
		role,
		name,
		email,
		password,
		avatar: {
			public_id:
				'avatar/vfe&opi=89978449&ved=0CBIQjRxqFwoTCNi1hum-tIUDFQAAAAAdAAAAABAE',
			// 	result.public_id,
			// url: result.secure_url,
			url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Fbest-profile-picture-science-research-psychology%2F&psig=AOvVaw0PmEvrnH708vwROFzoX3_J&ust=1712730039002000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNi1hum-tIUDFQAAAAAdAAAAABAE',
		},
	});

	sendToken(user, 200, res);
});
//login user =>api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
	const { email, password } = req.body;
	//check if emial  and password is entered by user
	if (!email || !password) {
		return next(new ErrorHandler('please enter email & password', 400));
	}
	//finding user in database
	const user = await User.findOne({ email }).select('password');

	if (!user) {
		return next(new ErrorHandler('invalid email or password', 401));
	}

	//check if password is correct or not
	const isPasswordMatched = await user.comparePassword(password);
	if (!isPasswordMatched) {
		return next(new ErrorHandler('invalid email or password', 401));
	}

	sendToken(user, 200, res);
});

//forgot password => /api/v1/password/forgot

// exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
// 	const user = await User.findOne({ email: req.body.email });

// 	if (!user) {
// 		return next(new ErrorHandler('user not found in this email', 404));
// 	}
// 	//get reset Token
// 	const resetToken = user.getResetPasswordToken();

// 	await user.save({ validateBeforeSave: false });

// 	//create reset password url
// 	const resetUrl = `${req.protocol}://${req.get(
// 		'host'
// 	)}/api/v1/password/reset/${resetToken}`;

// 	const message = `your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;
// 	try {
// 		await sendEmail({
// 			email: user.email,
// 			subject: 'Lewachii password recovery',
// 			message,
// 		});
// 		res.status(200).json({
// 			success: true,
// 			message: `Email sent to ${user.email}`,
// 		});
// 	} catch (error) {
// 		user.resetPasswordToken = undefined;
// 		user.resetPasswordExpire = undefined;
// 		await user.save({ validateBeforeSave: false });
// 		return next(new ErrorHandler(error.message, 500));
// 	}
// });

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			return next(new ErrorHandler('User not found with this email', 404));
		}

		// Get reset token
		const resetToken = user.getResetPasswordToken();

		// Save user (without validation) to update reset token and expiration
		await user.save({ validateBeforeSave: false });

		// Create reset password URL
		const resetUrl = `${req.protocol}://${req.get(
			'host'
		)}/api/v1/password/reset/${resetToken}`;

		const message = `Your password reset token is as follows:\n\n${resetUrl}\n\nIf you have not requested this email, please ignore it.`;

		// Send email with reset token
		await sendEmail({
			email: user.email,
			subject: 'Lewachii Password Recovery',
			message,
		});

		res.status(200).json({
			success: true,
			message: `Email sent to ${user.email}`,
		});
	} catch (error) {
		// Clear reset token and expiration
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;
		await user.save({ validateBeforeSave: false });

		// Handle the error
		return next(new ErrorHandler(error.message, 500));
	}
});

//Get currently logged in user details =>api/v1/me

exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id);
	res.status(200).json({
		success: true,
		user,
	});
});

//update /change passsword =>/api/v1/password/update

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('+password');

	//check previous user passeword
	const isMatched = await user.comparePassword(req.body.oldPassword);

	if (!isMatched)
		return next(new ErrorHandler('old password is incorrect', 400));

	user.password = req.body.password;
	await user.save();

	sendToken(user, 200, res);
});

//update user profile =>/api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
	};

	//update avatar :TODO

	const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});
	res.status(200).json({
		success: true,
	});
});

///logout user =>api/v1/Logout

exports.logout = catchAsyncErrors(async (req, res, next) => {
	res.cookie('token', null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});
	res.status(200).json({
		success: true,
		message: 'logged out',
	});
});

//admin Routes

//Get all users => /api/v1/admin/users

exports.allUsers = catchAsyncErrors(async (req, res, net) => {
	const users = await User.find();

	res.status(200).json({
		success: true,
		users,
	});
});

//get uset detaills =>/api/v1/admin/user/:id
exports.getuserdetails = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		return next(
			new ErrorHandler(`user does not ound with this id ${req.params.id}`)
		);
	}
	res.status(200).json({
		success: true,
		user,
	});
});

//create new review =>api/v1/review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
	const { rating, comment, productId } = req.body;

	const review = {
		user: req.user._id,
		name: req.user.name,
		rating: Number(rating),
		comment,
	};

	const product = await Product.findById(productId);

	// console.log(product.reviews);
	const isReviewed = product.reviews.find(
		(r) => r.user.toString() === req.user._id.toString()
	);
	if (isReviewed) {
		product.reviews.forEach((review) => {
			if (review.user.toString() === req.user._id.toString()) {
				review.comment = comment;
				review.rating = rating;
			}
		});
	} else {
		product.reviews.push(review);
		product.numofReviews = product.reviews.length;
	}

	product.rating =
		product.reviews.reduce((acc, item) => item.rating + acc, 0) /
		product.reviews.length;

	await product.save({ validateBeforeSave: false });

	res.status(200).json({
		success: true,
	});
});

// Get PRODUCt reviews =>/api/v1/reviews

exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.query.id);

	res.status(200).json({
		success: true,
		reviews: product.reviews,
	});
});

// Delete Product Review =>api/v1/reviews

exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.query.ProductId);

	const reviews = product.reviews.filter(
		(review) => review._id.toString() !== req.query.id.toString()
	);

	const numofReviews = reviews.length;

	const rating =
		product.reviews.reduce((acc, item) => item.rating + acc, 0) /
		product.reviews.length;

	await Product.findByIdAndUpdate(
		req.query.productId,
		{
			reviews,
			rating,
			numofReviews,
		},
		{
			new: true,
			runValidators: true,
			useFindAndModify: false,
		}
	);
	res.status(200).json({
		success: true,
	});
});
