const chai = require('chai');
const expect = chai.expect;
const { getHello } = require('./hello.request');
const sinon = require('sinon');
const { addUser } = require('./user.request');

describe('Testing basic routes', () => {
	it('Should return ok', (done) => {
		expect(true).to.be.true;
		done();
	});
	
	it('Should return hello', (done) => {
		let req = {};
		let res = {
			send: sinon.spy() 
		};
		getHello(req, res);		
		expect(res.send.calledOnce).to.be.true;
		expect(res.send.firstCall.args[0].msg).to.equal('Hello');
		done();
	});

	it('Should call the repository', (done) => {
		let req = {
			params : { name: 'Mike' }
		};

		let res = {
			send: sinon.spy()
		};

		let repository = {
			add: sinon.spy()
		};

		addUser(req, res, repository);
		expect(res.send.calledOnce).to.be.true;
		expect(repository.add.calledOnce).to.be.true;
		done();
	});

	it('Should add new element to the repository', (done) => {
		let repository = { add : function() {} }; 
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
});
