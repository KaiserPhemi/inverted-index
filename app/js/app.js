{
	/**
	 * /
	 */
	class InvertedIndex{

		/** Class Constructor 
		* @constructor
		*/
		constructor(){
			this.allIndices = {};
		}

		/** 
		 * Reads the data from the file being uploaded
		 * @param  {File} file - Uploaded file to be read.
		 * @return {void}
		 */
 		readFile(file){
			let reader = new FileReader();
				reader.onload = (ev) => {
					let uploadedJSON = reader.result;
				}
				reader.readAsText(file);
		}

		/**
		 * Ensures all the documents in a particular file is valid
		 * @param  {Object} file
		 * @return {Boolean} isValid -True or false
		 */
		validateFile(file){
			this.file = file;
			let checkField,
				isValid = true;
			try{
				const parsedJSON = JSON.parse(JSON.stringify(this.file));
				isValid = (parsedJSON.length === 0) ? false : checkField;
				
				checkField = parsedJSON.forEach((key) => {
					isValid = (typeof key.title !== 'string' || typeof key.text !== 'string') ? false : true;
				});
			}
			catch(error){
				isValid = false;
			}
			return isValid;
		}
		
		/** 
		 * Strips out special characters from documents to be indexed
		 * @param  {String} fileText - String from file to be tokenized
		 * @return {Array} -An array of unique words
		 */
		tokenize(fileText){
			this.text = fileText;
			return [...new Set(this.text
								.toLowerCase()				// Converts text to lower case
								.replace(/[^\w\s]/g, '')	// Removes any non-word character e.g. dot
								.split(/\s+/)				// Turns it into an array
								.sort()						// Sorts array
			)];
		}
		
		/**
		 * Creates the index for documents
		 * @param  {[]}
		 * @param  {[type]}
		 * @return {[type]}
		 */
		createIndex(fileName, content){
			const fileIndex = {};

			content.forEach((objDoc, index) =>{
				for(const key in objDoc) {
					const tokens = this.tokenize(objDoc[key]);

					tokens.forEach((badge) => {
						if (fileIndex[badge]){								// Badge exist in fileIndex
							if (fileIndex[badge].indexOf(index) === -1) {	// Checks for unique index
								fileIndex[badge].push(index);
							}
						} else{
							fileIndex[badge] = [index];
						}
					});
				}
			});
			this.allIndices[fileName] = {words:fileIndex, count:content.length};
			return this.allIndices[fileName];
		}

		/** Get’s indices created for particular files */
		getIndex(fileName){

			return this.allIndices[fileName];
		}

		/** Searches through one or more indices for words */
		searchIndex(fileName, query){
			const queryTokens = this.tokenize(query),
				  index 	  = this.getIndex(fileName);
			
			if (!index) {
				return `Index with ${fileName} does not exist`;
			}

			let searchResult = {
				words:{},
				docCount: index.docCount
			};

			queryTokens.forEach((token) => {
				if (index.words[token]) {
					searchResult.words[token] = index.words[tokens];
				}
			});

			return Object.keys(searchResult.words).length > 0 ? searchResult : 'No word found';
		}
	}

	/** App exported as Node package */
	/*module.exports = InvertedIndex;*/
}