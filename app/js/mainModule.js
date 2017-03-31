/**
 * Controller handling basic features of app
 * @param  {Object} $scope Binds the view with the controller
 * @return {[type]}        [description]
 */
const MainController = ($scope) => {
  const invIndex = new InvertedIndex();
  $scope.message = 'default';
  $scope.searchResult = {};
  $scope.fileUpload = (args) => {
    let allFiles = args.target.files;
    console.table(allFiles);
    console.table(allFiles.length);
    /*let fileInput = document.querySelector('#all-files').addEventListener('change', () => console.log(fileInput.files));*/
    /*let allFilesUploaded = fileInput.files;*/
/*    console.log(fileInput.files);
*/    /*let uploads = allFilesUploaded.length,
    count = 0;
    while(count < uploads){
      let singleFile = allFilesUploaded[uploads];
      /*console.log(allFilesUploaded.name);*/
      /*count++;*/
  /*  }*/
  };
  document.querySelector('#all-files').addEventListener('change', $scope.fileUpload);

  $scope.createIndex = () => {
    $scope.tableMsg = '';
  };
};
MainController.$inject = ['$scope'];
/**
 * Controller handling table display
 * @param  {Object} $scope Binds the view with the controller
 * @return {[type]}        [description]
 */
const TableController = ($scope) => {
  $scope.table = null;
  $scope.tableMsg = 'No index created';
};
TableController.$inject = ['$scope'];

/**
 * Module declaration
 */
angular.module('mainApp', [])
.controller('MainController', MainController)
.controller('TableController', TableController);
