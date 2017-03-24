/* eslint-disable */
{
  /**
   * Depenencies declared
   */
  const InvertedIndex = require('../app/js/app.js'),
      invIndexInstance = new InvertedIndex(),
      badFormat = require('./books/bad-format.json'),
      empty     = require('./books/empty.json'),
      validBook   = require('./books/books.json');
  /**
   * Test case for constructor
   */
  describe('Constructor', () => {
    it('should be able to create an instance of InvertedIndex class', () => {
      expect(typeof invIndexInstance).toBe('object');
      expect(invIndexInstance instanceof InvertedIndex).toBe(true);
    });
  });
  /**
   * Test Cases for validateFile method
   */
  describe('validateFile', () => {
      
      it('should return `true` for valid json file', () => {
        expect(invIndexInstance.validateFile(validBook)).toBe(true);
      });

      it('should return `false` for empty files', () => {
        expect(invIndexInstance.validateFile(empty)).toBe(false);
      });

      it('should return `false` for invalid file', () => {
        expect(invIndexInstance.validateFile(badFormat)).toBe(false);
      });
  });
  /**
   * Test cases for tokenize method
   */
  describe('tokenize method', () => {
    it('should return array of unique words without whitespace or characters', () => {
        expect(invIndexInstance.tokenize(validBook[0].title)).toEqual(['alice','in','wonderland']);
    });
  });
  /**
   * Test cases for searchIndex method
   */
}
