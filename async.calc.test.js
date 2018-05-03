const { add } = require('./async.calc');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

describe('Testing async add with promises', ()=> {
	it('should add correctly',(done)=> {
		expect(add(40,2)).to.eventually.equal(42);
		done();
	});
});
