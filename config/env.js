if(process.env.NODE_ENV === 'production'){
	module.exports = require('./prodEnv');
} else {
	module.exports = require('./devEnv');
}