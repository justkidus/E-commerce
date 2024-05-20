const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please enter product name'],
		trim: true,
		maxLength: [100, "product name can't exceed 100 characters"],
	},
	price: {
		type: Number,
		required: [true, 'please enter product price'],

		maxLength: [5, "product name can't exceed 5 characters"],
		default: 0.0,
	},
	description: {
		type: String,
		require: [true, 'please enter product price'],
	},
	rating: {
		type: Number,
		default: 0,
	},
	// images: [
	// 	{
	// 		public_id: {
	// 			type: String,
	// 			required: true,
	// 		},
	// 		url: {
	// 			type: String,
	// 			required: true,
	// 		},
	// 	},
	// ],
	category: {
		type: String,
		require: [true, 'please select category or this product'],
		enum: {
			values: [
				'Electronics',
				'Carmeras',
				'Laptop',
				'Accessories',
				'Headphone',
				'Food',
				'Books',
				'Cloths/Shoes',
				'Beauty/Health',
				'Sports',
				'Outdoor',
				'Home',
				'Pets',
				'Furnituire',
				'Vehicle',
				'Pottery',
				"Toy's",
			],
			msg: 'please select correct category for product',
		},
	},
	seller: {
		type: String,
		require: [true, 'please enter product seller'],
	},
	stock: {
		type: Number,
		require: [true, 'please enter product stock'],
		maxLength: [5, 'product name canot exceed 5 characters'],
		default: 0,
	},
	numofReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			user: {
				type: mongoose.Schema.ObjectId,
				ref: 'User',
				required: true,
			},
			name: {
				type: String,
				require: true,
			},
			rating: {
				type: Number,
				require: true,
			},
			comment: {
				type: String,
				require: true,
			},
		},
	],
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model('product', productSchema);

// 		id: 'product1',
// 		url: 'https://pictures-ethiopia.jijistatic.com/3049788_MzAwLTQwMC00YzZkZjFiNjVj.webp',
// 		detailurl: '',
// 		title: {
// 			shortTitle: '',
// 			longTitle: '',
// 		},
// 		price: {
// 			mrp: 1195,
// 			cost: 625,
// 			discount: '47%',
// 		},
// 		description:
// 			'This electric kettle from pigeon will soon become a travelers',
// 		discount: 'Extra 10% of',
// 		tagline: 'Deal of the Day',
// 	},
// 	{
// 		id: 'product2',
// 		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv93sNNS-WD1lHDfRv-Srr0-1As6HDBlc79Pb3wnfkW7ncKWseNZhcA7TIiSRg8P7PHys&usqp=CAU',
// 		detailurl: '',
// 		title: {
// 			shortTitle: '',
// 			longTitle: '',
// 		},
// 		price: {
// 			mrp: 1195,
// 			cost: 625,
// 			discount: '47%',
// 		},
// 		discription:
// 			'This electric kettle from pigeon will soon become a travelers',
// 		discount: 'Extra 10% of',
// 		tagline: 'Deal of the Day',
// 	},
// 	{
// 		id: 'product3',
// 		url: 'https://5.imimg.com/data5/FI/DT/MY-41531855/dewalt-hand-drilling-machine-500x500.jpg',
// 		detailurl: '',
// 		title: {
// 			shortTitle: '',
// 			longTitle: '',
// 		},
// 		price: {
// 			mrp: 1195,
// 			cost: 625,
// 			discount: '47%',
// 		},
// 		discription:
// 			'This electric kettle from pigeon will soon become a travelers',
// 		discount: 'Extra 10% of',
// 		tagline: 'Deal of the Day',
// 	},
// 	{
// 		id: 'product4',
// 		url: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/BO/NU/AQ/12128902/product-jpeg.jpg',
// 		detailurl: '',
// 		title: {
// 			shortTitle: '',
// 			longTitle: '',
// 		},
// 		price: {
// 			mrp: 1195,
// 			cost: 625,
// 			discount: '47%',
// 		},
// 		discription:
// 			'This electric kettle from pigeon will soon become a travelers',
// 		discount: 'Extra 10% of',
// 		tagline: 'Deal of the Day',
// 	},
// 	{
// 		id: 'product5',
// 		url: 'https://m.media-amazon.com/images/I/61m1Dot5KCL._AC_SL1000_.jpg',
// 		detailurl: '',
// 		title: {
// 			shortTitle: '',
// 			longTitle: '',
// 		},
// 		price: {
// 			mrp: 1195,
// 			cost: 625,
// 			discount: '47%',
// 		},
// 		discription:
// 			'This electric kettle from pigeon will soon become a travelers',
// 		discount: 'Extra 10% of',
// 		tagline: 'Deal of the Day',
// 	},
// ];
