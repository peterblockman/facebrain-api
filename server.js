const express = require('express');
const bodyParser = require('body-parser'); //for reading the data in body from frontend
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors'); //allow front end communicate with backend
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

// db.select('*').from('users').then(data => {
// 	console.log(data);
// });

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) =>{res.send('Server made by peter')})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) =>{ register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db)})


app.put('/image',(req, res) => { image.handleImage(req, res, db)})
app.post('/imageUrl', (req, res) =>{image.handleApiCall(req, res)})

// const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () => {
	console.log(`app is running on ${process.env.PORT}`)
})

