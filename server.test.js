const chai = require('chai');
const expect = chai.expect;
const { getHello } = require('./hello.request');
const sinon = require('sinon');
const { addUser, getUser } = require('./user.request');

describe('Testing basic routes', () => {
	it('Should return ok', (done) => {
		expect(true).to.be.true;
		done();
	});
	
	it('Should return hello', (done) => {
		let req = {};
		let res = {
			send: sinon.spy() 
		}
		getHello(req, res);		
		expect(res.send.calledOnce).to.be.true;
		expect(res.send.firstCall.args[0].msg).to.equal('Hello');
		done();
	});
});

describe('Testing addUser route', () => {
	it('Should call the repository', (done) => {
		let req = {
			params : { name: 'Mike' }
		};

		let res = {
			send: sinon.spy()
		};

		let repository = {
			add: sinon.spy(),
			rand: sinon.spy()
		};

		addUser(req, res, repository);
		expect(res.send.calledOnce).to.be.true;
		expect(repository.add.calledOnce).to.be.true;
		done();
	});

	it('Should add new element to the repository', (done) => {
		let repository = { add : function() {}, rand: function(){} }; 
		let req = {
			params : { name: 'Mike' }
		};

		let res = {
			send: sinon.spy()
		};

		const repositoryStub = sinon.stub(repository,"add").returns({id:0,name:'JJ',createdAt:new Date()});

		addUser(req, res, repository);

		expect(res.send.calledOnce).to.be.true;
		expect(repositoryStub.calledOnce).to.be.true;
		done();
	});

	it('should send the created user', (done)=>{
		let user = {id:42,name:'JJ',createdAt:new Date()}; 
		let repository = { add: function(){}, rand: function(){}};
		let repositoryStub = sinon.stub(repository, "add").returns(user);
		repositoryStub = sinon.stub(repository, "rand").returns(42);
		let req = {
		  params: { name: 'JJ' }
		};
		let res = {
		  send: function(){}
		};

		const mock = sinon.mock(res);
		mock.expects("send").once().withExactArgs(user);
		addUser(req, res, repository);
		expect(repositoryStub.calledOnce).to.be.true;
		
		mock.verify();
		done();
	});

});

describe('Testing getUser', () => {
	it('should call send with a user', (done) => {
		let req = { params: { id: 42 }};
		let res = { send: sinon.spy() };
		let repository = { find: function(){} };

		getUser(req, res, repository);
		expect(res.send.calledOnce).to.be.true;
		done();
	});

	it('should call the repository', (done) => {
		let req = { params: { id: 42 }};
		let res = { send: sinon.spy() };
		let repository = { find: function(){} };

		let user = {id:42,name:'JJ',createdAt:new Date()}; 
		let repositoryStub = sinon.stub(repository,"find").returns(user);

		getUser(req, res, repository);

		expect(res.send.calledOnce).to.be.true;
		expect(repositoryStub.calledOnce).to.be.true;

		done();
	});

	it('should return expected user', (done) => { 
		let req = { params: { id: 42 }};
		let res = { send: function(){} };
		let repository = { find: function(){} };


		let user = {id:42,name:'JJ',createdAt:new Date()}; 
		let repositoryStub = sinon.stub(repository,"find").returns(user);


		const mock = sinon.mock(res);
		mock.expects('send').once().withExactArgs(user);
		getUser(req, res, repository);

		expect(repositoryStub.calledOnce).to.be.true;
		mock.verify();
		done();
	});
});
