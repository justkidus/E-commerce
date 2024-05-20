const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');
const DB = require('./config/database');
const cloudinary = require('cloudinary');

//handle uncaught exceptions
process.on('uncaughtException', (err) => {
	console.log(`ERROR: ${err.stack}`);
	console.log('Shutting down due to uncaught exception');
	process.exit(1);
});

//setting up config app

dotenv.config();

//connecting to database
connectDatabase(DB);

//seting up cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

const port = process.env.PORT;
const server = app.listen(4000, () => {
	console.log(`server started on PORT ${port} in ${process.env.NODE_ENV} mode`);
});
// console.log(cloud_name);
process.on('unhandledRejection', (err) => {
	console.log(`ERROR :${err.message}`);
	console.log('Shutting down the server due to unhandled promise rejection');
	server.close(() => {
		process.exit(1);
	});
});
