const env = require('../config/env')

const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: env.clarifaiKey
});
const handleApiCall = (req, res) =>{
	app.models
	.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data =>{
		res.json(data)
	})
	.catch(err => {
		console.log('clarifai')
		console.log('------------------------')
		console.log(err)})//res.status(400).json('Api fails')
}


const handleImage = (req, res, db) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
  	.returning('entries')
  	.then(entries => {res.json(entries[0])})
  	.catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
	handleImage,
	handleApiCall
}