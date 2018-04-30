const addUser = (req, res, repository) => {
	const user = {
		id: Math.round(Math.random()*10000),
		name: req.params.name,
		createdAt: new Date()
	};
	repository.add(user);
	res.send(user);
};

module.exports = { addUser };
