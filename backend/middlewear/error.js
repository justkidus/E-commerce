// const ErrorHandler = require('../utils/errorHandler');

// module.exports = (err, req, res, next) => {
// 	err.statusCode = err.statusCode || 500;

// 	if (process.env.NODE_ENV === 'DEVELOPMENT') {
// 		res.status(err.statusCode).json({
// 			success: false,
// 			error: err,
// 			errMessage: err.message,
// 			stack: err.stack,
// 		});
// 	}

// 	if (process.env.NODE_ENV === 'PRODUCTION') {
// 		let error = { ...err };
// 		error.message = err.message;

// 		// wrong mongoose object id
// 		if (err.name == 'Casterror') {
// 			const message = `Resource not found .Invalid:${err.path}`;
// 			error = new ErrorHandler(message, 400);
// 		}
// 		// handleing mongoose validation error
// 		if (err.name === 'ValidationError') {
// 			const message = Object.values(err.errors).map((value) => value.message);
// 			error = new ErrorHandler(message, 400);
// 		}
// 		res.status(error.statusCode).json({
// 			success: false,
// 			message: error.message || 'Internal Server Error ',
// 		});
// 	}
// };

const ErrorHandler = require('../utils/errorHandler');

const dotenv = require('dotenv');

dotenv.config();

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || 'Internal Server Error';

	res.status(err.statusCode).json({
		success: false,
		error: err.stack,
	});
};

// module.exports = (err, req, res, next) => {
// 	err.statusCode = err.statusCode || 500;
// 	let process = process.env.NODE_ENV;
// 	if (process.env.NODE_ENV === 'DEVELOPMENT') {
// 		res.status(err.statusCode).json({
// 			success: false,
// 			error: err,
// 			errMessage: err.message,
// 			stack: err.stack,
// 		});

// 		console.log(process);
// 	}

// 	if (process.env.NODE_ENV === 'PRODUCTION') {
// 		let error = { ...err };

// 		error.message = err.message;
// 		res.status(error.statusCode).json({
// 			success: false,
// 			message: error.message || 'internal Server Error',
// 		});
// 	}
// };
