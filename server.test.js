const chai = require('chai');
const expect = chai.expect;
const { getHello } = require('./hello.request');
const sinon = require('sinon');

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
});
