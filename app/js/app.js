{

	class InvertedIndex{

		/* Class Constructor */
		constructor(indices){
			
			this.fileName = fileName;
		}

		/* Reads the data from the file being uploaded */
		readFile(){

			let fileContent = document.getElementsByClassName('file-upload');
			fileContent.addEventListener('change', event => {

    			// When the control has changed, there are new files
				let i = 0,
        			files = fileContent.files,
        			len = files.length;

    			for (; i < len; i++) {
        			console.log("Filename: " + files[i].name);
        			console.log("Type: " + files[i].type);
        			console.log("Size: " + files[i].size + " bytes");
    			}
			}, false);
		}

		/* Ensures all the documents in a particular file is valid */
		validateFile(){}
		
		/* Strips out special characters from documents to be indexed */
		tokenize(){}
		
		/* Creates the index for documents */
		createIndex(file, fileName){
			let tokens = [];

			const cleanTitle = file.title.replace(/[^w+/d]/g,'');
			const cleanText = file.text.replace(/[^w+/d]/g,'');

			tokens.forEach(() => {

			});
		}

		createText(text){

			return text
					.toLowerCase()
					.replace()
					.split();

		}

		/* Get’s indices created for particular files */
		getIndex(){}

		/* Searches through one or more indices for words */
		searchIndex(){}

	}
}