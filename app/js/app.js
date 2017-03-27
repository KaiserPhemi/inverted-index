{
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
    static readFile(file) {
      const reader = new FileReader();
      reader.onload = () => reader.result;
      reader.readAsText(file);
    }
     /**
     * Ensures all the documents in a particular file is valid
     * @param  {Object} file
     * @return {Boolean} isValid -True or false
     */
    validateFile(file) {
      this.file = file;
      let isValid = true;
      try {
        const parsedJSON = JSON.parse(JSON.stringify(this.file));
        isValid = (parsedJSON.length === 0) ? false : isValid;
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
        for (const key in objDoc) {
          const tokens = this.tokenize(objDoc[key]);

          tokens.forEach((token) => {
            if (fileIndex[token]) {
              if (fileIndex[token].indexOf(index) === -1) { // Checks for index
                fileIndex[token].push(index);
              }
            } else {
              fileIndex[token] = [index];
            }
          });
        }
      });
      this.allIndices[fileName] = { words: fileIndex,
        bookCount: content.length };
      return this.allIndices[fileName];
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
      const queryTokens = this.tokenize(query),
        index = this.getIndex(fileName);
      if (!index) {
        return `Index with ${fileName} does not exist`;
      }

      const searchResult = {
        words: {},
        docCount: index.docCount
      };

      queryTokens.forEach((token) => {
        if (index.words[token]) {
          searchResult.words[token] = index.words[token];
        }
      });

      return Object.keys(searchResult.words).length > 0
      ? searchResult : 'No word found';
    }
  }

  /** App exported as Node package */
  if (typeof window === 'undefined') {
    module.exports = InvertedIndex;
  }

  const invIndex = new InvertedIndex();
}
