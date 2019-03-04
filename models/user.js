const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

//User schema
const UserSchema = mongoose.Schema({
	name:{
		type: String
	},
	email:{
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, cb){
	User.findById(id, cb);
}

module.exports.getUserByName = function(name, cb){
	const query = {name: name};
	User.findOne(query, cb);
}

module.exports.addUser = function(newUser, cb){
	bcrypt.genSalt(10, (err, salt)=>{
		bcrypt.hash(newUser.password, salt, (err, hash)=>{
			if(err)
				throw err;
			else{
				newUser.password=hash;
				newUser.save(newUser);
			}
				
		});
	});
}

module.exports.comparePassword = function(password, hashedPassword, cb){
	bcrypt.compare(password, hashedPassword, (err, isMatch)=>{
		if(err)
			throw err;
		cb(null, isMatch);
	});
}