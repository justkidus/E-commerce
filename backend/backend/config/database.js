const mongoose = require('mongoose');

const connectDatabase = () => {
	const DB =
		// 'mongodb+srv://kidus:@ecommerce.tq9mipo.mongodb.net/LEwachii?retryWrites=true&w=majority&appName=Ecommerce'
		// 'mongodb+srv://kidus:AA0001621239justkidus@ecommerce.tq9mipo.mongodb.net/LEwaachii?retryWrites=true&w=majority&appName=Ecommerce';
		// 'mongodb+srv://kidus:AA0001621239justkidus@ecommerce.tq9mipo.mongodb.net/Lewachii?retryWrites=true&w=majority&appName=Ecommerce';
		// 'mongodb+srv://kidus:AA0001621239justkidus@ecommerce.tq9mipo.mongodb.net/Lewachii';
		'mongodb+srv://kidus:AA0001621239justkidus@ecommerce.tq9mipo.mongodb.net/Lewachii';
	mongoose
		.connect(DB)
		.then((con) => {
			console.log(`MongoDb Database connected successfully`);
			mongoose.set('useCreateIndex', true);
		})
		.catch((err) => {
			console.log('error connecting to mongodb', err.message);
		});
};
module.exports = connectDatabase;
