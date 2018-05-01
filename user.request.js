const addUser = (req, res, repository) => {
	const user = {
		id: repository.rand(),
		name: req.params.name,
		createdAt: new Date()
	};
	repository.add(user);
	res.send(user);
};

const getUser = (req, res, repository) => {
	const user = repository.find(req.params.id);
	res.send(user);
};

module.exports = { addUser, getUser };
