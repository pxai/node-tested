const chai = require('chai');
const expect = chai.expect;
const repository = require('./repository');

describe('Testing the repository', () => {
	it('should exist', () => {
		expect(repository).to.exist;
	});

	it('should be empty by default', ()=> {
		expect(repository.users).to.be.empty;
	});

	it('should add elements correctly', ()=> {
		repository.add({name: 'Jon', createdAt: new Date()});
		expect(repository.users.length).to.equal(1);
	});	
	
	it('should delete elements correctly', () => {
		repository.add({id:666, name: 'Jon', createdAt: new Date()});
		expect(repository.users.length).to.equal(2);
		repository.delete(666);
		expect(repository.users.length).to.equal(1);
	});
});
