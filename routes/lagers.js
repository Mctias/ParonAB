const express = require('express');
const router = express.Router();
const Lager = require('../models/lager');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.get('/lager', (req, res)=>{
	Lager.find((err, lager)=>{
		if(err) res.send(err);
		else res.json(lager);
	});
});

router.post('/addLager', (req, res)=>{
	let newLager = new Lager({
		name: req.body.name,
		products:[{
			jPlatta:{
				noItems: 0
			} ,
			jTelefon:{
				noItems: 0
			},
			Paronklocka:{
				noItems: 0
			}

		}]});
	if(!newLager.name){
		res.json({success: false, msg: 'You have to name your lager'});
	}
	else{
		newLager.save(newLager, (err, lager)=>{
			if(err){
				if(err.code === 11000) res.json({success: false, msg: 'A warehouse with that name already exists'});
			}
			else{
				res.json({success: true, msg: 'Lager created!'});
			} 
		});
	}
});

router.put('/addDelivery', (req, res)=>{
		Lager.findOne({name: req.body.name}, (err, lager)=>{
			if(err) throw err;
			else{
				if(!lager)
					res.json({success: false, msg: 'That lager does not exist'});
				else{
					console.log(req.body.pName);
					if(req.body.pName == 'jPlatta'){
						lager.products.jPlatta.noItems += parseInt(req.body.noItems);
					}
					else if(req.body.pName == 'jTelefon'){
						lager.products.jTelefon.noItems += parseInt(req.body.noItems);
					}
					else{
						lager.products.Paronklocka.noItems += parseInt(req.body.noItems);
					}
					if(lager.products.jPlatta.noItems < 0||
					   lager.products.jTelefon.noItems < 0||
					   lager.products.Paronklocka.noItems < 0){
						res.json({success:false, msg: 'Cannot have negative stock!'});
					}else{
						lager.save((lager,(err, lager) => {
						res.json({success: true, msg: 'Lager created!'});
						}));
					}	 
				}
			}
		});
});

module.exports = router;