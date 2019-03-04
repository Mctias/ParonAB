const mongoose = require('mongoose');
const config = require('../config/db');

//User schema
const LagerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		unique: true
	},
	products:
	{
		jPlatta:{
			noItems: {type: Number, default: 0}
		},
		jTelefon:{
			noItems: {type: Number, default: 0}
		},
		Paronklocka:{
			noItems: {type: Number, default: 0}
		}
	}
});

const Lager = module.exports = mongoose.model('Lager', LagerSchema);