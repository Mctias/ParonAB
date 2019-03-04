const mongoose = require('mongoose');
const config = require('../config/db');

//User schema
const ProductSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	noItems:{
		type: Number
		//required: true
	}
});

const Product = module.exports = mongoose.model('Product', ProductSchema);
