/**
 * Dependencies declared globally
 */
const InvertedIndex = require('../app/js/app.js'),
  invIndexInstance = new InvertedIndex(),
  badFormat = require('./books/bad-format.json'),
  empty = require('./books/empty.json'),
  book = require('./books/books.json'),
  otherBook = require('./books/other-book.json');


/**
 * Test case for Class definition
 */
describe('InvertedIndex class', () => {
  it('should be defined', () => {
    expect(InvertedIndex).toBeDefined();
  });
});
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
    expect(invIndexInstance.validateFile(book)).toBe(true);
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
  it(`should return array of unique words
   without whitespace/characters`, () => {
    expect(invIndexInstance.tokenize(book[0].title))
    .toEqual(['alice', 'in', 'wonderland']);
  });
});
/**
 * Test cases for createIndex method
 */
describe('createIndex method', () => {
  it(`should return index of words and 
    number of books in a json file`, () => {
    expect(invIndexInstance.createIndex('other-book', otherBook))
    .toEqual({ words: { alice: [0],
      in: [0],
      wonderland: [0],
      a: [0],
      falls: [0],
      hole: [0],
      into: [0],
      rabbit: [0] },
      bookCount: 1 });
  });
});
