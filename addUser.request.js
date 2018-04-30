const addUser = (req, res) => {
	const user = {
		name: req.params.name,
		createdAt: new Date()
	};
	res.send(user);
};

module.exports = { addUser };
