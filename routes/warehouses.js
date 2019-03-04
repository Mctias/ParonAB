const express = require('express');
const router = express.Router();
const Warehouse = require('../models/warehouse');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.get('/warehouse', (req, res)=>{
	Warehouse.find((err, warehouse)=>{
		if(err) res.send(err);
		else res.json(warehouse);
	});
});

router.post('/addWarehouse', (req, res)=>{
	let newWarehouse = new Warehouse({
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
	if(!newWarehouse.name){
		res.json({success: false, msg: 'You have to name your warehouse'});
	}
	else{
		newWarehouse.save(newWarehouse, (err, warehouse)=>{
			if(err){
				if(err.code === 11000) res.json({success: false, msg: 'A warehouse with that name already exists'});
			}
			else{
				res.json({success: true, msg: 'Warehouse created!'});
			} 
		});
	}
});

router.put('/updateWarehouse', (req, res)=>{
		Warehouse.findOne({name: req.body.name}, (err, warehouse)=>{
			if(err) throw err;
			else{
				if(!warehouse)
					res.json({success: false, msg: 'That warehouse does not exist'});
				else{
					console.log(req.body.pName);
					if(req.body.pName == 'jPlatta'){
						warehouse.products.jPlatta.noItems += parseInt(req.body.noItems);
					}
					else if(req.body.pName == 'jTelefon'){
						warehouse.products.jTelefon.noItems += parseInt(req.body.noItems);
					}
					else{
						warehouse.products.Paronklocka.noItems += parseInt(req.body.noItems);
					}
					if(warehouse.products.jPlatta.noItems < 0||
					   warehouse.products.jTelefon.noItems < 0||
					   warehouse.products.Paronklocka.noItems < 0){
						res.json({success:false, msg: 'Cannot have negative stock!'});
					}else{
						warehouse.save((warehouse,(err, warehouse) => {
							res.json({success: true, msg: 'Warehouse created!'});
						}));
					}	 
				}
			}
		});
});

module.exports = router;