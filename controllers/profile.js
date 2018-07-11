const handleProfile = (req, res, db) => {
	const { id } = req.params;
	// let found = false;
	db.select('*').from('users').where({id}).then(user => {
		if(user.length){
			res.json(user)
		} else {
			res.status(400).json('not found');
		}	
	})
	.catch(err => res.status(400).json('error getting user'))
}
	
	// if(!found){
	// 	res.status(400).json('not found');
	// }

module.exports ={
	handleProfile: handleProfile
}