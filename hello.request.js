const getHello = (req, res) => {
	res.send({msg: 'Hello'})
};

module.exports = { getHello };
