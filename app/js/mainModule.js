/**
 * Controller handling basic features of app
 * @param  {Object} $scope Binds the view with the controller
 * @return {[type]}        [description]
 */
const MainController = ($scope) => {
  $scope.invIndex = new InvertedIndex();
  $scope.message = 'default';
  $scope.searchResult = {};
  $scope.fileUpload = () => {
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
