const express = require('express');
const router = express.Router();
const Delivery = require('../models/delivery');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

//Gets all deliveries and sorts them by date
router.get('/delivery', (req, res)=>{
	mySort={date: -1};
	Delivery.find((err, delivery)=>{
		if(err) res.send(err);
		else res.json(delivery);
	}).sort(mySort);
});

//Posts a new delivery to db
router.post('/addDelivery', (req, res)=>{
	let newDelivery = new Delivery({
		product: req.body.pName,
		lagerLokal: req.body.name,
		noItems: req.body.noItems,
		date: req.body.date
	});
	//Validation, we need all the params from the body
	if(!newDelivery.product || !newDelivery.lagerLokal || !newDelivery.date){
		res.json({success: false, msg: 'Fill in form'});
	}else{
		if(newDelivery.noItems == 0){
			res.json({success: false, msg: 'Please do not add delivery of 0 items'})
		}
		else{
			newDelivery.save(newDelivery, (err, delivery)=>{
				if(err) throw err;
				else{
					res.json({success: true, msg: 'Delivery created!'});
				} 
			});
		
		}
	}
	
	
});

module.exports = router;