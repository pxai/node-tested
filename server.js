const express = require('express');
const { getHello } = require('./hello.request.js')
const { addUser } = require('./addUser.request.js')
const app = express();


app.get('/', (req, res) => {
	res.send({result: 'OK'});
});

app.get('/hello', (req, res) => getHello(req,res));
app.get('/add', (req, res) => addUser(req,res));

app.listen(3000, ()=> {
	console.log('Server running');
});
