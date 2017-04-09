/**
 * Instance of class created
 * @type Object
 */
const invIndex = new InvertedIndex();
/**
 * Controller handling basic features of app
 * @param  {Object} $scope Binds the view with the controller
 * @return {Object}        [description]
 */
const MainController = ($scope) => {
  $scope.message = 'Please upload a valid .json file.';
  $scope.word = 'info';
  $scope.fileNames = [];
  $scope.fileObjects = {};
  $scope.showIndex = true;
  $scope.fileUpload = (event) => {
    const allUploads = event.target;
    for (let count = 0; count < allUploads.files.length; count += 1) {
      const uploadedFile = allUploads.files[count],
        singleFileName = uploadedFile.name;
      invIndex.readFile(uploadedFile).then((content) => {
        if (!invIndex.validateFile(singleFileName, JSON.parse(content))) {
          $scope.$apply(() => {
            $scope.message = `${singleFileName} is not a valid .json file.`;
            $scope.word = 'danger';
            return $scope.message;
          });
        } else {
          $scope.message = 'Upload successfull';
          $scope.word = 'success';
          $scope.fileObjects[singleFileName] = JSON
            .parse(content);
          if ((!$scope.fileNames
              .includes(uploadedFile.name))) {
            $scope.$apply(() => $scope.fileNames.push(uploadedFile.name));
          }
        }
      });
    }
    return $scope.fileObjects;
  };
  document.querySelector('#all-files')
  .addEventListener('change', $scope.fileUpload);

  $scope.createIndex = (selectFile) => {
    $scope.showIndex = true;
    const fileContent = $scope.fileObjects[selectFile],
      fileName = selectFile;
    if (invIndex.createIndex(fileName, fileContent)) {
      $scope.allIndicies = {};
      const indexed = invIndex.getIndex(fileName),
        uniqueWords = Object.keys(indexed),
        totalBooks = $scope.getTotalBooks(fileName);
      $scope.allIndicies[fileName] = {
        uniqueWords,
        totalBooks,
        indexed
      };
    }
    if ($scope.allIndicies[fileName]) {
      $scope.message = `Index created for ${fileName}`;
      $scope.word = 'success';
      return true;
    }
    $scope.message = 'No index created';
    $scope.word = 'info';
    $scope.allIndicies = {};
  };
  /**
   * Function to get book count in a file
   * @param  {Object} fileName
   * @return {Array} An array of all files
   */
  $scope.getTotalBooks = (fileName) => {
    const fileContent = $scope.fileObjects[fileName],
      arr = [];
    for (let i = 0; i < fileContent.length; i += 1) {
      arr.push(i);
    }
    return arr;
  };
  /**
   * Function to search through index created
   * @param  {Object} fileName Object pointing to file
   * @param  {String} query    Search term
   * @return {Object}          Object containing search result
   */
  $scope.searchIndex = (fileName, query) => {
    const fileArr = [];
    const queriedWords = invIndex.tokenize(query).toString();
    fileArr.push(fileName);
    if ($scope.createIndex) {
      $scope.showIndex = false;
      $scope.searchedIndices = {};
      const searched = invIndex.searchIndex(fileArr, query),
        books = Object.keys(searched),
        totalBooks = $scope.getTotalBooks(fileName);
      $scope.searchedIndices = {
        books,
        totalBooks,
        searched
      };
    }
    if ($scope.searchedIndices) {
      $scope.message = `Search Index created for word(s) '${queriedWords}'`;
      $scope.word = 'success';
      return true;
    }
  };
};
/**
 * Function to handle icon display inside table
 * @return {String} String referencing and icon name.
 */
const tableIcon = () => (input, arr) => {
  if (arr.includes(input)) {
    return 'check';
  }
  return 'dash';
};
MainController.$inject = ['$scope'];
/**
 * Module declaration
 */
angular.module('mainApp', [])
.controller('MainController', MainController)
.filter('iconCheck', tableIcon);
