const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/db');

//Passport strategy takes in options and lets us extract token from headers
module.exports = function(passport){
	let opts = {};
	opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.secret;
	passport.use(new jwtStrategy(opts, (jwt_payload, done)=>{
		User.getUserById(jwt_payload.doc._id, (err, user)=>{
			if(err)
				return done(err, false)
			if(user)
				return done(null, user);
			else
				return done(null, false);
		});
	}));
}