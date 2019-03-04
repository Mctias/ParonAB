const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

//User schema
const UserSchema = mongoose.Schema({
	name:{
		type: String,
		unique: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

//Function to find user by id
module.exports.getUserById = function(id, cb){
	User.findById(id, cb);
}

//Function to find user by name
module.exports.getUserByName = function(name, cb){
	const query = {name: name};
	User.findOne(query, cb);
}

//Function to add user to the db. Hashes password
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

//Compares the password with the hashed password
module.exports.comparePassword = function(password, hashedPassword, cb){
	bcrypt.compare(password, hashedPassword, (err, isMatch)=>{
		if(err)
			throw err;
		cb(null, isMatch);
	});
}