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
  $scope.message = '';
  $scope.fileNames = [];
  $scope.searchResult = {};
  $scope.fileObjects = {};
  $scope.allIndicies = {};
  $scope.fileUpload = (event) => {
    const allUploads = event.target;
    for (let count = 0; count < allUploads.files.length; count += 1) {
      invIndex.readFile(allUploads.files[count]).then((content) => {
        if (JSON.parse(content)) {
          $scope.fileObjects[allUploads.files[count].name] = JSON.parse(content);
          if ((!$scope.fileNames
            .includes(allUploads.files[count].name))) {
            $scope.$apply($scope.fileNames.push(allUploads.files[count].name));
          }
        } else {
          $scope.message = `${allUploads.files[count].name} 
            is not a valid json file.`;
        }
      });
    }
    return $scope.fileObjects;
  };
  document.querySelector('#all-files')
  .addEventListener('change', $scope.fileUpload);

  $scope.createIndex = (selectFile) => {
    const fileContent = $scope.fileObjects[selectFile];
    let fileName = selectFile;
    if (invIndex.createIndex(fileName, fileContent)) {
      const indexed = invIndex.getIndex(fileName);
      let uniqueWords = Object.keys(indexed);
      let numOfBook = $scope.getNumOfBooks(fileName);

      $scope.allIndicies[fileName] = {
        uniqueWords,
        numOfBook,
        indexed
      };
    }
    return true;
  };
  /**
   * Function to get book count in a file
   * @param  {Object} fileName [description]
   * @return {[type]}          [description]
   */
  $scope.getNumOfBooks = (fileName) => {
    let fileContent = $scope.fileObjects[fileName],
    arr = [];
    for (let i = 0; i < fileContent.length; i += 1) {
      arr.push(i);
    }
    return arr;
  };
  /**
   * Function to search index
   */
  $scope.searchIndex = (term) => {
    const searched = invIndex.searchIndex(terms);

  };
};
/**
 * Function to handle icon display inside table
 * @return {String} String referencing and icon name.
 */
const rowIcon = () => {
  return (input, arr) => {
    if (arr.includes(input)) {
      return 'cross';
    } else {
      return 'dash';
      }
  }
};
MainController.$inject = ['$scope'];
/**
 * Module declaration
 */
angular.module('mainApp', [])
.controller('MainController', MainController)
.filter('imgCheck', rowIcon);
