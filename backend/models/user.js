let mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const JWT_EXPIRES_TIME=7d;
const crypto = require('crypto');
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please enter your name'],
		maxlength: [30, "your name can't exceed 30 characters "],
	},
	email: {
		type: String,
		required: [true, 'please enter email'],
		unique: true,
		validate: [validator.isEmail, 'please enter valid email address'],
	},
	password: {
		type: String,
		requierd: [true, 'please enter your password'],
		minLength: [6, 'your password must be longer than 6 characters'],
		select: false,
	},
	avatar: {
		public_id: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			require: true,
		},
	},
	role: {
		type: String,
		default: 'admin',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	resetPasswordToken: String,
	resetPasswordEpire: Date,
});
//encrypting password before saving user
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	this.password = await bcrypt.hash(this.password, 10);
});
//compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//return JWT token
userSchema.methods.getJwtToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_TIME,
	});
};

//generate password reset token
userSchema.methods.getResetPasswordToken = function () {
	//genetate token
	const resetToken = crypto.randomBytes(20).toString('hex');

	//hash and set to resetPasswordToken
	this.resetPasswordToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	//set token expire time
	this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
	return resetToken;
};
module.exports = mongoose.model('user', userSchema);
