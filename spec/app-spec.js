{
	/* Grab necessary dependencies */
	const InvertedIndex = require('../app/js/app.js'),
		  invIndexInstance = new InvertedIndex(),
		  badFormat 	= require('books/bad-format.json'),
		  empty			= require('books/empty.json'),
		  validBook		= require('books/books.json');

	describe('Checks for valid input file', () => {
  		
  		it('Should return true for valid json file', () => {
    		expect(invIndexInstance.validateFile(validBook)).toBe(true);
  		});

  		it('Should return true for valid fields', () => {
  			expect(invIndexInstance.validateFile(empty)).toBe(true);
  		});
	});

	describe('Checks for invalid input file', () => {
  		
  		it('Should return false for invalid file', () => {
    		expect(invIndexInstance.validateFile(badFormat)).toBe(false);
  		});
	});
	
}