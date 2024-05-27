const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewear/auth');

const {
	registerUser,
	loginUser,
	logout,
	allUsers,
	forgotPassword,
	getUserProfile,
	updatePassword,
	updateProfile,
	getuserdetails,
} = require('../controllers/Authcontroller');

router.route('/register').post(registerUser);

router.route('/login').post(isAuthenticatedUser, loginUser);

router.route('/logout').get(logout);

// router.route('/password/forgot').post(forgotPassword);

router.route('/me').get(isAuthenticatedUser, getUserProfile);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

router.route('/me/update').put(isAuthenticatedUser, updateProfile);

router
	.route('/admin/users')
	.get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
module.exports = router;

router
	.route('/admin/users/:id')
	.get(isAuthenticatedUser, authorizeRoles('admin'), getuserdetails);

module.exports = router;
