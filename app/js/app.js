/**
 * @class InvertedIndex
 */
class InvertedIndex {
  /**
   * Class Constructor
   * @constructor
   */
  constructor() {
    this.allIndices = {};
  }
  /**
   * Reads the data from the file being uploaded
   * @param  {File} file - Uploaded file to be read.
   * @return {void}
   */
  readFile(file) {
    this.file = file;
    return new Promise((resolve, reject) => {
      const bookReader = new FileReader();

      bookReader.onload = evt => resolve(evt.target.result);
      bookReader.onerror = (evt) => {
        reject(`Error reading + ${this.file.name}: ${evt.target.result}`);
      };
      bookReader.readAsText(this.file);
    });
  }
  /**
   * Ensures all the documents in a particular file is valid
   * @param  {String} fileName
   * @param  {Object} fileContent
   * @return {Boolean} isValid -True or false
   */
  validateFile(fileName, fileContent) {
    this.content = fileContent;
    this.fileName = fileName;
    let isValid = true;
    try {
      const parsedJSON = JSON.parse(JSON.stringify(this.content));
      isValid = (parsedJSON.length === 0) ? false : // eslint-disable-line
        (!this.fileName.toLowerCase().match(/\.json$/g)) ? false : isValid;
      parsedJSON.forEach((key) => {
        if (typeof key.title !== 'string' || typeof key.text !== 'string') {
          isValid = false;
        }
      });
    } catch (error) {
      isValid = false;
    }
    return isValid;
  }
  /**
   * Strips out special characters from documents to be indexed
   * @param  {String} fileText - String from file to be tokenized
   * @return {Array} An array of unique words
   */
  tokenize(fileText) {
    this.text = fileText;
    return [...new Set(this.text
              .toLowerCase()        // Converts text to lower case
              .replace(/[^\w\s]/g, '')  // Removes any non-word character
              .split(/\s+/)       // Turns it into an array
              .sort()           // Sorts array
    )];
  }
  /**
   * Creates the index for documents
   * @param  {String} fileName
   * @param  {Array} content
   * @return {Object} this.allIndices object
   */
  createIndex(fileName, content) {
    const fileIndex = {};
    content.forEach((objDoc, index) => {
      if (typeof objDoc === 'object') {
        for (const key in objDoc) {                // eslint-disable-line
          const tokens = this.tokenize(objDoc[key]);
          tokens.forEach((token) => {
            if (fileIndex[token]) {
              if (fileIndex[token].indexOf(index) === -1) {  // Checks for index
                fileIndex[token].push(index);
              }
            } else {
              fileIndex[token] = [index];
            }
          });
        }
      }
    });
    this.allIndices[fileName] = fileIndex;
    return true;
  }
  /**
   * Get’s indices created for particular files
   * @param  {Object} fileName -Title of input file
   * @return {Object} allIndices
   */
  getIndex(fileName) {
    return this.allIndices[fileName];
  }
    /**
   * Searches through one or more indices for words
   * @param  {String} fileName -File name
   * @param  {String} query -Input token
   * @return {Object} searchResult
   */
  searchIndex(fileName, query) {
    const self = this;
    let location;
     if (fileName.length === 0) {
      location = Object.keys(self.allIndices);
    } else {
      location = fileName;
    }
    let finalResult = {};
    const queryTokens = this.tokenize(query);
    location.forEach((files) => {
      const searchResult = {};
      queryTokens.forEach((elem) => {
        const fileContent = this.allIndices[files];
        const fileToken = Object.keys(fileContent);
        if (fileToken.includes(elem)) {
          searchResult[elem] = fileContent[elem];
        } else {
          searchResult[elem] = [];
        }
        finalResult[files] = searchResult;
      });
    });
    return finalResult;
  }
}
/** App exported as Node package */
if (typeof window === 'undefined') {
  module.exports = InvertedIndex;
}
