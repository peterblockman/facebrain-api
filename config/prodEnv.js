module.exports = {
	dbConfig: {
	  client: 'pg',
	  connection: {
	    connectionString: process.env.DATABASE_URL,
	    ssl: true
	  }
	},
	clarifaiKey: process.env.API_CLARIFAI
}