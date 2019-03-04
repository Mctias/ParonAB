const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

//Register route
router.post('/register', (req, res)=>{
	let newUser = new User({
		//Get info from body
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});

	User.addUser(newUser, (err, user)=>{
		if(err){
			if(err.code === 11000) //Is unique?
				res.json({success: false, msg: 'Name and email must be unique'});
		}
		else{
			res.json({success: true, msg: 'User successfully created'});
		}
	});
});

//Authenticate
//Weheck for the name. If it exists we compare the passwords. If they matches we send good data
router.post('/authenticate', (req, res)=>{
	const name = req.body.name;
	const password = req.body.password;

	User.getUserByName(name, (err, user)=>{
		if(err)
			return res.json({success: false, msg:'Error'});
		if(!user)
			return res.json({success: false, msg: 'User not found'});
		User.comparePassword(password, user.password, (err, isMatch)=>{
			if(err)
				return res.json({success: false, msg:'Error'});
			if(isMatch){
				const token = jwt.sign({data:user}, config.secret,{
					expiresIn: 604800,
				});

				res.json({
					success: true,
					token: 'JWT' + token,
					user: {
						id: user._id,
						name: user.name,
						email: user.email
					}
				});
			}else{
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});
});

module.exports = router;