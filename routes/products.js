const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.get('/products', (req, res)=>{
	Product.find((err, product)=>{
		if(err) res.send(err);
		else res.json(product);
	});
});

router.post('/addProduct', (req, res)=>{
	let newProduct = new Product({
		name: req.body.name,
		noItems: 0
	});
	if(!newProduct.name){
		res.json({success: false, msg: 'You have to name your product'});
	}
	else{
		newProduct.save(newProduct, (err, product)=>{
			if(err) res.send(err);
			else{
				res.json({success: true, msg: 'Product created!'});
			} 
		});
	}
});

router.delete('/deleteProduct/:id', (req, res)=>{
	var id = req.params.id;
	Product.findOneAndRemove({_id: id}, (err, product)=>{
		if(err || !product) res.send(err);
		else res.json({success: true, msg: 'Product deleted'});
	});
});

router.put('/updateProduct', (req, res)=>{
	if(!req.body._id){
		res.json({success: false, msg: 'No product provided'});
	}
	else{
		Product.findOne({_id: req.body._id}, (err, product)=>{
			if(err) res.send(err);
			else{
				if(!product)
					res.json({success: false, msg: 'Product id not found'})
				else{
					product.name = req.body.name;
					product.noItems += req.body.noItems;

					if(product.noItems < 0){
						res.json({success: flase, msg: 'You cannot have a negative number of products'});
					}
					else{
						product.save((err)=>{
							if(err) res.send(err);
							else res.json({success: true, msg: 'Product updated'});
						});
					}
				}
			}
		});
	}

});
module.exports = router;