class UserRepository {
	constructor() {
		this._users = [];
	}

	get users() {
		return this._users;
	}

	find(id) {
		return this._users.filter(a=>a.id=id)[0];
	}

	add(user) {
		this._users.push(user);
	}	

}

module.exports = { UserRepository };
