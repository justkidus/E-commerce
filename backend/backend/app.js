const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewear/error');
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileUpload());
//Middleware to handle errors

app.use(errorMiddleware);
//import all routes

const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api/v1', products);
app.use('/api/v1', auth);

module.exports = app;
