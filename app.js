const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db');

mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
	console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', ()=>{
	console.log('Database error: ' + config.database);
});

const app = express();

const users = require('./routes/users');
const products = require('./routes/products');
const lagers = require('./routes/lagers');
const deliveries = require('./routes/deliveries');

//Port number
const port = 3000;

//CORS middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//Body parser
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/products', products);
app.use('/lagers', lagers);
app.use('/deliveries', deliveries);

app.get('/', (req, res)=>{
	res.send('Invalid endpoint!');
});

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, ()=>{
	console.log("Server initiated on port: " + port);
});