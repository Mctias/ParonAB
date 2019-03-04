const mongoose = require('mongoose');
const config = require('../config/db');

//User schema
const DeliverySchema = mongoose.Schema({
	product:{
		type: String
		//required: true
	},
	lagerLokal:
	{
		type: String
	},
	noItems:{
		type: Number
	},
	date:{
		type: String
	}

});

const Delivery = module.exports = mongoose.model('Delivery', DeliverySchema);